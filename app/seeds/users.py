from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        username='codyharris',
        email='cody@mail.com',
        password='password',
        display_name='Cody X. Harris',
        birth_year=1990,
        location='Seattle, CA',
        bfa='UCSC, BS Computer Science 2013',
        mfa=None,
        link_text='my website',
        link_url='http://www.y9k.xyz',
        user_type='fan'
        )

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()









# from werkzeug.security import generate_password_hash
# from app.models import db, User

# # Adds a demo user, you can add other users here if you want
# def seed_users():
#     demo = User(username='Demo', email='demo@aa.io', password='password')
#         # username='codyharris',
#         # email='cody@mail.com',
#         # password='password',
#         # display_name='Cody X. Harris',
#         # birth_year=1990,
#         # location='Seattle, CA',
#         # bfa='UCSC, BS Computer Science 2013',
#         # mfa=None,
#         # link_text='my website',
#         # link_url='http://www.y9k.xyz',
#         # user_type='fan'

#     db.session.add(demo)
#     db.session.commit()

# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and resets
# # the auto incrementing primary key
# def undo_artworks():
#     db.session.execute('TRUNCATE artworks;')
#     db.session.commit()
