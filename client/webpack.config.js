const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotEnvWebPack = require('dotenv-webpack');
const dotEnvPlugin = new dotEnvWebPack()
const dotEnv = require('dotenv')

module.exports = ()=>{

const env = dotEnv.config().parsed;

const port = env.PORT|| 8085

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
      hot: true,
      proxy:  {
        '/postservice': {
          target: `${env.POSTS_API_BASE_URL}/api`,
          pathRewrite: { '^/postservice': '' },
        },
        '/queryservice': {
          target: `${env.QUERY_API_BASE_URL}/api`,
          pathRewrite: { '^/queryservice': '' },
        },
        '/commentsservice': {
          target: `${env.COMMENTS_API_BASE_URL}/api`,
          pathRewrite: { '^/commentsservice': '' },
        },
        '/ratingsservice': {
          target: `${env.RATINGS_API_BASE_URL}/api`,
          pathRewrite: { '^/ratingsservice': '' },
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
