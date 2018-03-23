from flask import Flask, Response, render_template, request, jsonify
import random, json
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def static_page():
	return render_template("index.html")

@app.route('/purchased.html')
def purchased():
	return render_template("purchased.html")

@app.route('/getlist')
def get():
	f = open("list.txt", "r")
	content = f.read()
	return jsonify({"list": content})

@app.route('/savelist', methods=["POST"])
def save():
	f = open("list.txt", "w")
	listData = request.json.get("list")
	f.write(listData)
	return "List Saved"

@app.route('/getpurchasedlist')
def getPurchased():
	f = open("purchasedList.txt", "r")
	content = f.read()
	return jsonify({"list": content})

@app.route('/savepurchasedlist', methods=["POST"])
def savePurchased():
	f = open("purchasedList.txt", "w")
	listData = request.json.get("list")
	f.write(listData)
	return "List Saved"

if __name__=='__main__':
	app.run(debug=True, port=5001)
