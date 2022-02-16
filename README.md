# Survey

A survey app using Django in the backend, React in the frontend and PostgreSQL in the database.

## Installation of pre-requisites

1. Python 3.8+
1. virtualenv
1. PostgreSQL 10+
1. NodeJS 12+

If you have all the pre-requisites installed, skip this step and go to next step

### Install Python

```sh
sudo apt-get install python3.8 python3.8-dev
python3 --version
```

### Install virtualenv

```sh
sudo apt-get install virtualenv
virtualenv --version
```

### Install PostgreSQL

```sh
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install postgresql postgresql-contrib
psql --version
```

### Install NodeJS and npm

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install build-essential
sudo apt-get install nodejs
nodejs -v
npm -v
```

## Project Setup

```sh
# clone the repository
git clone https://github.com/ams-hasan/survey.git

# go to project root after cloning the project
cd survey

# create virtual environment with python3.6 as default python and activate it
virtualenv -p python3 .venv
source .venv/bin/activate

# install api dependecies
pip install -r api/requirements.txt

# copy example env containing necessary environment variables to .env
cp sample.env .env
```

open `.env` and input values of following variables

```env
DJANGO_SECRET_KEY
POSTGRES_DB
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_HOST
POSTGRES_PORT
```

complete setup with the following commands

```bash
# migrate database with the application models
python api/manage.py migrate

# create a super user
python api/manage.py createsuperuser

#install frontend dependencies and run the project
cd client
npm install

# start the server
cd ..
python api/manage.py runserver
```
