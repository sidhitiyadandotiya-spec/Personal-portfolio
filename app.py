from flask import Flask, render_template, request, jsonify, make_response
import json
import csv
import io
from datetime import datetime, date

app = Flask(__name__)

# In-memory storage (per-session, resets on restart)
habits = []
completions = {}  # { habit_id: [list of date strings "YYYY-MM-DD"] }
habit_counter = 0


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/habits', methods=['GET'])
def get_habits():
    return jsonify(habits)


@app.route('/api/habits', methods=['POST'])
def add_habit():
    global habit_counter
    data = request.json
    habit_counter += 1
    habit = {
        'id': habit_counter,
        'name': data.get('name', ''),
        'description': data.get('description', ''),
        'category': data.get('category', 'Health'),
        'frequency': data.get('frequency', 'daily'),
        'created_at': date.today().isoformat()
    }
    habits.append(habit)
    completions[habit_counter] = []
    return jsonify(habit), 201


@app.route('/api/habits/<int:habit_id>', methods=['DELETE'])
def delete_habit(habit_id):
    global habits
    habits = [h for h in habits if h['id'] != habit_id]
    completions.pop(habit_id, None)
    return jsonify({'success': True})


@app.route('/api/habits/<int:habit_id>/toggle', methods=['POST'])
def toggle_completion(habit_id):
    data = request.json
    date_str = data.get('date', date.today().isoformat())

    if habit_id not in completions:
        completions[habit_id] = []

    if date_str in completions[habit_id]:
        completions[habit_id].remove(date_str)
        completed = False
    else:
        completions[habit_id].append(date_str)
        completed = True

    return jsonify({'completed': completed, 'date': date_str})


@app.route('/api/completions', methods=['GET'])
def get_completions():
    return jsonify(completions)


@app.route('/api/stats', methods=['GET'])
def get_stats():
    stats = {}
    for habit in habits:
        hid = habit['id']
        dates = sorted(completions.get(hid, []))
        streak = 0
        max_streak = 0
        total = len(dates)

        if dates:
            current_streak = 1
            for i in range(1, len(dates)):
                d1 = datetime.strptime(dates[i - 1], '%Y-%m-%d').date()
                d2 = datetime.strptime(dates[i], '%Y-%m-%d').date()
                diff = (d2 - d1).days
                if diff == 1:
                    current_streak += 1
                else:
                    max_streak = max(max_streak, current_streak)
                    current_streak = 1
            max_streak = max(max_streak, current_streak)
            streak = current_streak

        stats[hid] = {
            'name': habit['name'],
            'frequency': habit['frequency'],
            'current_streak': streak,
            'max_streak': max_streak,
            'total_completions': total
        }

    # Calculate average streak
    if stats:
        avg_streak = sum(s['current_streak'] for s in stats.values()) / len(stats)
    else:
        avg_streak = 0.0

    return jsonify({'habits': stats, 'avg_streak': round(avg_streak, 1)})


@app.route('/api/export', methods=['GET'])
def export_csv():
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(['Habit Name', 'Description', 'Category', 'Frequency', 'Date Completed'])

    for habit in habits:
        hid = habit['id']
        dates = sorted(completions.get(hid, []))
        if dates:
            for d in dates:
                writer.writerow([habit['name'], habit['description'], habit['category'], habit['frequency'], d])
        else:
            writer.writerow([habit['name'], habit['description'], habit['category'], habit['frequency'], ''])

    response = make_response(output.getvalue())
    response.headers['Content-Type'] = 'text/csv'
    response.headers['Content-Disposition'] = 'attachment; filename=habits_export.csv'
    return response


if __name__ == '__main__':
    app.run(debug=True, port=5000)
