from flask import Flask, render_template, request, flash, redirect, session,url_for,abort

import requests

app = Flask(__name__, static_url_path='/static')

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

app.config['SECRET_KEY'] = "I'LL NEVER TELL!!"
CURR_USER_KEY = "curr_user"


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("home.html")


@app.route('/meme_generator', methods=["GET", "POST"])
def meme_generator():
    return render_template('meme_generator.html')

@app.route('/connect_four', methods=["GET", "POST"])
def connect_four():
    return render_template('connect_four.html')


@app.route('/memory_game', methods=["GET", "POST"])
def memory_game():
    return render_template('memory_game.html')


@app.route('/guess_the_word', methods=["GET", "POST"])
def guess_the_word():
    return render_template('guess_the_word.html')

@app.route('/quiz', methods=["GET", "POST"])
def quiz():
    return render_template('quiz.html')

@app.route('/html_test', methods=["GET", "POST"])
def html_test():
    return render_template('html_test.html')

@app.route('/css_test', methods=["GET", "POST"])
def css_test():
    return render_template('css_test.html')

@app.route('/javascript_test', methods=["GET", "POST"])
def javascript_test():
    return render_template('javascript_test.html')

@app.route('/python_test', methods=["GET", "POST"])
def python_test():
    return render_template('python_test.html')

@app.route('/todo', methods=["GET", "POST"])
def todo():
    return render_template('todo.html')

@app.route('/weather', methods=["GET", "POST"])
def weather():
    return render_template('weather.html')