import os
import pymysql  # Add this line to ensure PyMySQL is imported
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

pymysql.install_as_MySQLdb()  # Ensures PyMySQL works with SQLAlchemy

app = Flask(__name__)


# Load credentials from environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{os.getenv('MYSQL_USER')}:{os.getenv('MYSQL_PASSWORD')}@{os.getenv('MYSQL_HOST')}/{os.getenv('MYSQL_DB')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# Define a simple model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return "Connected to MySQL successfully!"

if __name__ == "__main__":
    app.run(debug = True)