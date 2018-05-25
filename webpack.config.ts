// import * as AwesomeTypescript from 'awesome-typescript-loader';

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
        test: /\.(svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
