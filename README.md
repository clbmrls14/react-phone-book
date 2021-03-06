# Simple Phone Book App
## Made by Caleb Morales

**Project Summary**

A simple phone book application using React. You enter in a first name, last name, and phone number and view all past entries as well. There is a search bar to search for phone numbers or names in the list.

**Bonus Points**
- TypeScript
- Functional Components
- Dockerize it

## Running the app using npm
- Clone the repository `git clone https://github.com/clbmrls14/react-phone-book.git phone-book`
- `cd phone-book` into the project
- Run `npm install`
- Run `npm start`

The project should start on localhost:3000

## Running the project in Docker
- Clone the repository `git clone https://github.com/clbmrls14/react-phone-book.git phone-book`
- `cd phone-book` into the project
- Run `docker build .`
- Run `docker-compose up -d --build`

The project will be running on localhost:3001. You can stop running it with `docker-compose stop`

The public Docker Image can be found [here](https://hub.docker.com/r/clbmrls014/phone-book).

