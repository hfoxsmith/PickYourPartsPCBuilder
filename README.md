# PickYourPartsPCBuilder

## Connecting to Github
To connect to GitHub from Heroku we first go to the app that we created in Hiroku and then in the deploy tab select GitHub. This will then allow you to connect your GitHub account and select a repository.

## Connecting to the Database
The way that we connect to our database is by installing the Heroku CLI extension from https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli. It is also necissary to install git from https://git-scm.com/download/win. After both are installed open the Git CMD where you can run the command 'heroku login' which will open a browser to log you into Heroku. Then run the command 'heroku pg:psql -a pick-your-parts-pc-builder' where you then can begin to run SQL scripts to manipulate your database.
