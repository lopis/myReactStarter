# myReactStarter
My own react starter kit


#### Install dependencies

`npm install`


#### Start in dev

`npm start`


#### Compile

`npm run compile`

#### Project structure

```
app
 ├── actions #one or more action files
 ├── components
     ├── Button
     .  ├── Button.jsx
     .  └── Button.test.js #unit and snapshot tests
     └── ...
 ├── containers
 ├── reducers
 └── index.js #entry point
scripts
 └── ... #can contain npm scripts
www
 ├── index.html #main html
 └── bundle.js #compiled app (prod)
server.js #serves dev app with no extra config needed
```
