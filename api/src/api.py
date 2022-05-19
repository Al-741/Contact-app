#cree table contact : id, nom, prenom, telephone, addresse, entreprise
#get post update et delete a faire 

from email.mime import application
from flask import Flask, request, jsonify, Response
from flask_sqlalchemy import SQLAlchemy
from faker import Faker
import random
from datetime import date

app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]="postgresql://root:root@localhost:5432/contact"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

db=SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    firstname = db.Column(db.String(100))
    lastname= db.Column(db.String(100))
    phone = db.Column(db.String(100))
    email= db.Column(db.String(100)) 
    job= db.Column(db.String(100))

    def __init__(self, firstname, lastname, phone, email, job):
        self.firstname = firstname
        self.lastname = lastname
        self.phone = phone
        self.email = email
        self.job = job 

fake = Faker()
def populate_table():
    for n in range(0, 50):
        new_contact=Contact(fake.first_name(), fake.last_name(), fake.phone_number(), fake.email(), fake.job())
        nb_app=random.randint(1,4) 
        db.session.add(new_contact)
    db.session.commit()