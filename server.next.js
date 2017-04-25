const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const fetch = require('node-fetch');

const glamor = require('glamor')
glamor.speedy(true)

function render (req, res, pathName, query) {

}

app.prepare().then(() => {

  const server = express()
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on port ${port}`)
  })

})
