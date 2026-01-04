import os
import logging
from flask import Flask, render_template

# Set up logging for debugging
logging.basicConfig(level=logging.DEBUG)

# Create the Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

@app.route('/')
def home():
    """Main route that displays the crochet business website."""
    # Product data for the crochet items
    products = [
        {
            'id': 1,
            'name': 'Flower Boquet Coaster',
            'price': '$12.00',
            'description': '2 in 1! Looks like a boquet wrapped up, turns into a coaster when flattened. Buy two coasters for $20',
            # Now an array of image filenames for local static files
            'images': ['flower_boquet.jpeg']
        },
        {
            'id': 2,
            'name': 'Bartholomew Bee, Claude Chick, Octo Octopus',
            'price': '$7.00',
            'description': 'Fluffy, cute animals. Get the entire crew for $16 :o',
            # Now an array of image URLs
            'images': [
                'crochetcrew.jpeg', 'crochetcrew2.jpeg', 'crochetcrew3.jpeg', 'crochetcrew4.jpeg','crochetcrew5.jpeg'
            ]
        },
        {
            'id': 3,
            'name': 'Duck Car Charm',
            'price': '$8.00',
            'description': 'Swinging duck charm to hang on car rearview mirror to make you smile :)  Other animals are available upon request!',
            'images': ['duckcharm.jpeg', 'duckcharm2.jpeg'
            ]
        },
        {
            'id': 4,
            'name': 'Mini Stuffies (perfect as keychains!)',
            'price': '$6.00',
            'description': 'Colors can be personalized! Perfect for gifts, putting on bags, etc.',
            'images': ['keychain.jpeg', 'keychain2.jpeg', 'keychain3.jpeg', 'keychain4.jpeg', 'keychain5.jpeg'
            ]
        },
        {
            'id': 5,
            'name': 'Big Friends',
            'price': 'Price varies depending on size',
            'description': 'Colors can be personalized! Enjoy a handmade crocheted item :D',
            # Now an array of image filenames for local static files
            'images': ['portfolio.jpeg', 'portfolio2.jpeg', 'portfolio3.jpeg', 'portfolio4.jpeg', 'portfolio5.jpeg', 'portfolio6.jpeg']
        },
        {
            'id': 6,
            'name': 'Custom Creations',
            'price': 'Price varies',
            'description': 'An array of customizable features and full sized creations. Initials can be stitched, clothing can be made, custom characters can be created, and more!',
            # Now an array of image filenames for local static files
            'images': ['customized.jpeg','customized3.jpeg', 'customized4.jpeg', 'customized5.jpeg', 'customized6.jpeg']
        }
    ]

    return render_template('index.html', products=products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
