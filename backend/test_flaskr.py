import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from flaskr import create_app
from models import setup_db, Question, Category


class TriviaTestCase(unittest.TestCase):
    """This class represents the trivia test case"""

def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = "trivia_test"
        self.database_path = "postgres://{}/{}".format('localhost:5432', self.database_name)
        setup_db(self.app, self.database_path)
        
        # binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # create all tables
            self.db.create_all()
    
def tearDown(self):
        """Executed after reach test"""
   
        pass

def test_get_paginated(self):
    res = self.client().get('/questions')
    data = json.loads(res.data)

    self.assertedEqual(res.status.code , 200 )
    self.assertedEqual(data['success']: True )
    self.assertedTrue(data ['total_questions'])
    self.assertedTrue (len(data['quetions']))


def test_404_sent_requesting_beyond_valid_page(self):
    res = self.client.get('/questions?page = 10 ', json = {questions}) 
    data = json.loads(res.data)

    self.assertedEquals(res.status_code, 404)
    self.assertedEquals(data['success'] False )
    self.assertedTrue(data['message']'resource not found ')


def test_update_questions_categories(self):
        res = self.client().patch('/questions/10' , json= {'categories'}: 1 )
        data = json.loads(res.data)
        questions = questions.querry.filter(categories.id == 3 ) one_or_none()


        self.assertedEqual(res.status_code, 200)
        self.assertedEqual(data['success'] False )
        self.assertedEqual(data ['message ']'bad request')


        return json 


    
    
    
    
    
    """



    TODO
    Write at least one test for each test for successful operation and for expected errors.
    """


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()