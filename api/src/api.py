#cree table contact : id, nom, prenom, telephone, addresse, entreprise
#get post update et delete a faire 

from email.mime import application
from flask import Flask, request, jsonify, Response
from flask_sqlalchemy import SQLAlchemy
from faker import Faker
import random
import requests
import json
from datetime import date

app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]="postgresql://root:root@localhost:5432/contact"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

db=SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    firstname = db.Column(db.String(500))
    lastname = db.Column(db.String(500))
    phone = db.Column(db.String(500))
    email = db.Column(db.String(500))
    address = db.Column(db.String(500))
    dob = db.Column(db.Date)
    picture = db.Column(db.String(500))
    job = db.Column(db.String(500))

    def __init__(self, firstname, lastname, phone, email, address, dob, picture, job):
        self.firstname = firstname
        self.lastname = lastname
        self.phone = phone
        self.email = email
        self.address = address
        self.dob = dob
        self.picture = picture
        self.job = job 

fake = Faker()
def populate_table():
    for n in range(0, 50):
        result = requests.get("https://randomuser.me/api/")
        data = result.text
        parse_json = json.loads(data)

        firstname = parse_json['results'][0]['name']['first']
        lastname = parse_json['results'][0]['name']['last']
        phone = parse_json['results'][0]['phone']
        email = parse_json['results'][0]['email']
        address = str(parse_json['results'][0]['location']['street']['number']) + " " + str(parse_json['results'][0]['location']['street']['name']) + ", " + str(parse_json['results'][0]['location']['postcode']) + " " + str(parse_json['results'][0]['location']['city']) + "\n"+ str(parse_json['results'][0]['location']['state']) + " " + str(parse_json['results'][0]['location']['country'])
        dob = parse_json['results'][0]['dob']['date'].split('T', 1)[0]
        picture = parse_json['results'][0]['picture']['thumbnail']
        job = fake.job()

        new_contact=Contact(firstname, lastname, phone, email, address, dob, picture, job)
        nb_app=random.randint(1,4) 
        db.session.add(new_contact)
    db.session.commit()

if __name__ == '__main__':
    db.drop_all()
    db.create_all()
    populate_table()
    app.run(host="0.0.0.0", port=8080, debug=True)