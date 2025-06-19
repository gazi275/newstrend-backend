from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
import numpy as np

import os

# Load environment variables from .env file if present


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/', methods=['POST'])
def index():
    text = request.form.get('text')
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    blob = TextBlob(text)
    sentiment = 'Positive' if blob.sentiment.polarity > 0 else 'Negative' if blob.sentiment.polarity < 0 else 'Neutral'
    moral_framing = {
        'Care': np.random.rand(),
        'Fairness': np.random.rand(),
        'Loyalty': np.random.rand(),
        'Authority': np.random.rand(),
        'Sanctity': np.random.rand()
    }
    return jsonify({
        'sentiment': sentiment,
        'moral_framing': moral_framing,
        'text': text
    })

@app.route('/results', methods=['GET'])
def results():
    text = request.args.get('text')
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    blob = TextBlob(text)
    sentiment = 'Positive' if blob.sentiment.polarity > 0 else 'Negative' if blob.sentiment.polarity < 0 else 'Neutral'
    moral_framing = {
        'Care': np.random.rand(),
        'Fairness': np.random.rand(),
        'Loyalty': np.random.rand(),
        'Authority': np.random.rand(),
        'Sanctity': np.random.rand()
    }
    return jsonify({
        'sentiment': sentiment,
        'moral_framing': moral_framing,
        'text': text
    })

if __name__ == '__main__':
    app.run(debug=True, port=5001)