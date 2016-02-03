# Friend-Or-Fraud
Javascript 3 Project

[Live Demo](http://fof.mikaelagrundin.com)

## Get the project
`$ git clone https://github.com/Zatine/friend-or-fraud.git`
Or download the zip-file

## Installation
The build scripts requires [NodeJS](http://nodejs.org).

You need to install bower for the project to work.
```
$ npm install -g bower
$ bower install
```

In order for gulp to work, it must be installed both locally in the project and globally by `$ npm install -g gulp`

The following commands will install all necessary packages from NPM.
It will also open you browser pointing to the app.
```
$ npm install
$ gulp
```

## Play the game locally
1. Every player has to download the game and run the server (gulp default task). 
2. Every player has to connect to their own local URL to use their phone as a controller (the URL will show up in the terminal when you connect). Since Browsersync is used for simultaneous testing on different browsers and devices, several units connecting to the same URL will be messy and not work properly.
3. Connect to a game by entering the Game ID on your phone.
 

## Dist
To minimize the project, run:
```
$ gulp build
```
