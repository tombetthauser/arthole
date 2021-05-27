from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo_1 = User(
        username='codyharris',
        email='cody@mail.com',
        password='password',
        display_name='Cody X. Harris',
        birth_year=1990,
        location='Seattle, CA',
        bfa='UCSC, BS Computer Science 2013',
        mfa=None,
        link_text='my website',
        link_url='http://y9k.xyz',
        user_type='fan'
    )

    demo_2 = User(
        username='erinkaczkowski',
        email='erin@mail.com',
        password='password',
        display_name='Erin Kaczkowski',
        birth_year=1984,
        location='Sacramento, CA',
        bfa='University of Wisconsin Madison, 2009',
        mfa='Yale University School of Art, 2011',
        link_text='postfolio website',
        link_url='http://www.erinkaczkowskistudio.com',
        user_type='artist'
    )

    demo_3 = User(
        username='tombetthauser',
        email='tom@mail.com',
        password='password',
        display_name='Tom Betthauser',
        birth_year=1987,
        location='Sacramento, CA',
        bfa='San Francisco Art Institute, 2010',
        mfa='Yale University School of Art, 2012',
        link_text='github',
        link_url='http://www.tombetthauser.com',
        user_type='artist'
    )

    db.session.add(demo_1)
    db.session.add(demo_2)
    db.session.add(demo_3)

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
