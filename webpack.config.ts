import * as HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg)$/,
        use: ['file-loader?name=images/[name].[ext]'],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: ['file-loader?name=fonts/[name].[ext]'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
