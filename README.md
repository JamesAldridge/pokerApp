# Poker CRUD App
Name: James Aldridge
Student ID: 20071749

## Description.
A NodeJS backend server application, that is designed to host a collection of pokerplayer documents, with subdocuments of tournaments, of which the player has participated in. The collection is stored on a mongoDb database hosted on mlab, the user can make CRUD requests via the app to manipulate the player documents. 
Assignment Spec: https://ddrohan.github.io/wit-wad-2-2018/topic00//talk-1-assignment-1/assignment-1.pdf

#### API interface.

+ GET players/ - Get all players
+ GET players/:id - Get a single player
+ POST players/ - Add a player
+ PUT players/:id/tournament - Add a tournament to a player
+ DELETE players/:id - Delete a player

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone the Project and `cd` into the directory.

Execute the following to install dependecies.
```
$ npm install
```
## DX Approach
+ Git Repo 
+ ES6 
+ Unit Testing (Mocha)
+ Manual testing

## Testing
Mocha unit tests were used in addition to manual testing via webstorms built in REST Client.

## Running the tests

To run tests, `cd` into the projects directory
```
$ npm run test
```

## Deployment

Deployed to Heroku http://pokerwebapp.herokuapp.com/

## References/Resources used

* https://ddrohan.github.io/wit-wad-2-2018/
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 
* https://www.youtube.com/watch?v=1ANDrQrP0uQ&t=0s&list=LLmWhfzusCSQRP4yaxDsGZhg&index=4
