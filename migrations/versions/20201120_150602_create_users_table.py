"""create_users_table

Revision ID: ffdc0a98111c
Revises: 
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa
import datetime


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('username', sa.String(length=40), nullable=False),
        sa.Column('hashed_password', sa.String(length=255), nullable=False),
        sa.Column('display_name', sa.String(length=255), nullable=True),
        sa.Column('birth_year', sa.Integer(), nullable=True),
        sa.Column('location', sa.String(length=255), nullable=True),
        sa.Column('bfa', sa.String(length=255), nullable=True),
        sa.Column('mfa', sa.String(length=255), nullable=True),
        sa.Column('link_text', sa.String(length=255), nullable=True),
        sa.Column('link_url', sa.String(length=255), nullable=True),
        sa.Column('user_type', sa.String(length=255), nullable=True),
        sa.Column('created_at', sa.DateTime(), default=datetime.datetime.utcnow),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('username')
    )
    op.create_table('artworks',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=255), nullable=False),
        sa.Column('materials', sa.String(length=255), nullable=True),
        sa.Column('dimensions', sa.String(length=255), nullable=True),
        sa.Column('year', sa.Integer(), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('image_url', sa.String(length=255), nullable=True),
        sa.Column('tags', sa.String(length=255), nullable=True),
        sa.Column('created_at', sa.DateTime(), default=datetime.datetime.utcnow),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_table('likes',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('is_liked', sa.Boolean(), nullable=False),
        sa.Column('source_id', sa.Integer(), nullable=False),
        sa.Column('target_id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(), default=datetime.datetime.utcnow),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_table('messages',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('message_text', sa.Text(), nullable=True),
        sa.Column('source_id', sa.Integer(), nullable=False),
        sa.Column('target_id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(), default=datetime.datetime.utcnow),
        sa.PrimaryKeyConstraint('id'),
    )
    # ### end Alembic commands ###qqqqqqqqq


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('artworks')
    op.drop_table('likes')
    op.drop_table('messages')
    # ### end Alembic commands ###
