# Venka-Journey

<img align="right" alt="Coding" width="200" height="200"  src="https://github.com/Venkatesan-M/Venka-Journey/assets/127939893/5ead4999-e674-434b-b18b-e8d9568ccda7">


Venka-Journey is my First Blog Website, This is also my Learning of [EJS](https://ejs.co/) and [MongoDB](https://www.mongodb.com/) Technologies.

## Create Your Own BlogSite

Install and setup git on your system, [git](https://git-scm.com/download/win) to install gitbash.

```bash

git clone https://github.com/Venkatesan-M/Venka-Journey.git

```

## Install the necessary Dependencies
Install [VSCODE](https://code.visualstudio.com/) to set up your codebase.
</br>
Install [Node](https://nodejs.org/en) and [Nodemon](https://www.npmjs.com/package/nodemon).
</br>
Install [MongoDB](https://www.mongodb.com/) and setup the mongodb shell and server (mongod).

## Set up your codebase!

```bash
cd Venka-Journey
code .
```
Resolve Dependencies by

```bash
npm i
```
## Set up your MonDBServer!

Replace the MongoDB connection code in App.js file.
</br>
from
```js
mongoose.connect('mongodb+srv://Venkatesan:<yourPassword>@cluster0.zcxvzob.mongodb.net/Venka');
```
with 
```js
mongoose.connect('mongodb://127.0.0.1:27017/test');
```
## Start you MongoDB Server

Run you MongoDB Server in another Terminal. 
</br>
Example
```bash
mongod
```

## Run you Application

Run you Application by Executing. 
</br>
```bash
nodemon app.js
```
on another Terminal.
</br>
go to [LocalHost](http://localhost:3000/) to View your Live app.

## Compose Your New Post

Visit [ComposePost](http://localhost:3000/compose) to compose your new Post.
