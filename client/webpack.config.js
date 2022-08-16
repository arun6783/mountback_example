const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotEnvWebPack = require('dotenv-webpack');
const dotEnvPlugin = new dotEnvWebPack()
const dotEnv = require('dotenv')

module.exports = ()=>{

const env = dotEnv.config().parsed;

const port = env.APP_PORT|| 8085

  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      dotEnvPlugin,
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      port:port,
      
      proxy:  {
        '/api/users': {
          target: env.USE_MOCK_API ==='true' ? env.MOCK_API_BASE_URL : 'http://localhost:3000',
        },
        '/api/address': {
          target: env.USE_MOCK_API ==='true' ? env.ADDRESS_MOCK_API_BASE : 'http://localhost:3000',
        }
      }
    },
    module: {
      // exclude node_modules
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        }, {
          test: /\.(js|jsx)$/,
          exclude:  /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    // pass all js files through Babel
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    
  }
} ;
