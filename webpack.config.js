const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   entry: './src/index.ts',
   output: {
      filename: '[name].js',
      sourceMapFilename: "bundle.js.map"
      // sourceMapFilename: '[name].[contenthash].js'      
   },
   devtool: "source-map",
   mode: "production", // none, development, production

   devServer: {
      port: 9000,
      // host: "25.72.43.4",
      headers: {
         'Cache-Control': 'no-store',
      },
   },
   plugins: [
      new HtmlWebpackPlugin({
         hash: true,
         filename: './index.html', //relative to root of the application
         title: "River Raid",
         template: './src/index.html',
      })
   ],
   resolve: {
      extensions: ['.ts', '.js'],
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'ts-loader',
         },
         {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', "sass-loader"]
         },
         {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: {
               loader: "file-loader",
               options: {
                  limit: 8000,
                  name: 'images/[hash]-[name].[ext]'
               }
            }
         },
         {
            test: /\.(wav)$/i,
            use: {
               loader: "file-loader",
               options: {
                  limit: 8000,
                  name: 'audio/[hash]-[name].[ext]'
               }
            }
         },
         {
            test: /\.(ttf)$/i,
            use: {
               loader: "file-loader",
               options: {
                  limit: 8000,
                  name: 'fonts/[hash]-[name].[ext]'
               }
            }
         }
      ],
   },
};