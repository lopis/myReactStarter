const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

const devMiddleware = webpackMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
})

app.use(devMiddleware);

app.get('*', function response(req, res) {
  const indexLocation = path.join(__dirname, 'www/index.html');
  res.write(middleware.fileSystem.readFileSync(indexLocation));
  res.end();
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
