import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import path from 'path';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './electron/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  externals: {
    sqlite3: path.resolve(__dirname, './node_modules/sqlite3'),
    typeorm: path.resolve(__dirname, "./node_modules/typeorm")
  }
};
