# myReactStarter

My own react starter kit. It's using [Next.js](https://github.com/zeit/next.js) for server-side rendering which uses its own router `next/router`. For CSS, it's using [glamorous](https://github.com/paypal/glamorous) which is based on [glamor](https://github.com/threepointone/glamor).


#### Install dependencies

`npm install`


#### Start in dev

`npm start`


#### Compile

`npm run compile`

#### Project structure

```
app
 ├── actions
     ├── api.js
     └── state.js
 ├── components
     ├── Button
     .  ├── Button.js
     .  └── Button.test.js #unit and snapshot tests
     └── ...
 ├── containers
     └── App.js #main component
 ├── reducers
     └── reducer.js
 └── pages
     ├── index.js #next.js entry point
     └── ...      #each file here is automatically a route
static
 └── locales
     ├── en
     .   ├── common.json #common translations
     .   └── routes.json #routes translations
     └── ...
scripts
 └── ... #can contain npm scripts
www
 ├── index.html #main html
 └── bundle.js #compiled app (prod)
```
