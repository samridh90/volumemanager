from flask import Flask, request
from flask.json import jsonify
import flask

from flasharray import FlashArray

fa = FlashArray()
app = Flask(__name__, template_folder='./')

@app.route("/api/v1/volumes", methods=['GET'])
def list_volumes():
    return jsonify(fa.list_volumes())

@app.route("/api/v1/volumes", methods=['POST'])
def create_volume():
    new_vol = request.json
    created = fa.create_volume(new_vol["name"], new_vol["size"])
    return jsonify(created)

@app.route("/api/v1/volumes/<string:name>", methods=['PUT'])
def update_volume(name):
    new_vol = request.json
    updated = fa.rename_volume(name, new_vol["name"])
    new_vol["name"] = updated["name"]
    return jsonify(new_vol)

@app.route("/api/v1/volumes/<string:name>", methods=['DELETE'])
def delete_volume(name):
    return jsonify(fa.destroy_volume(name))

@app.route("/")
@app.route("/dashboard")
@app.route("/volumes")
def index():
    return flask.render_template("index.html")

@app.route("/detail/<path:path>")
def also_index(path):
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