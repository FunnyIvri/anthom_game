const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
      main: './src/index.js', // Existing entry point
      easymode: './src/easy_mode.js', // Entry point for the new file
    },
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: '[name].lib.js', // Output bundle filename
    library: 'lib',
  },
  target: 'web', // Specify the target environment as 'web'
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the rule to all JavaScript files
        exclude: /node_modules/, // Exclude the 'node_modules' directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling ES6+ syntax
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
    ],
  },
};
