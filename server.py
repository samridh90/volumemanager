from flask import Flask
from flask.json import jsonify
import flask

from flasharray import FlashArray

fa = FlashArray()
app = Flask(__name__, template_folder='./')

@app.route("/volumes")
def list_volumes():
    return jsonify(fa.list_volumes())

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route("/<path:path>")
def send_current(path):
    return flask.send_from_directory("./", path)

@app.route("/app/<path:path>")
def send_app(path):
    return flask.send_from_directory("app", path)

@app.route("/node_modules/<path:path>")
def send_modules(path):
    return flask.send_from_directory("node_modules", path)