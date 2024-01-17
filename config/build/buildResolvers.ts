import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true, // Предпочитать абсолютный путь
    modules: [options.paths.src, 'node_modules'], // Папки с которых будет применяться абсолютный путь
    mainFiles: ['index'], // Указывает главный файл для модуля
    alias: {}, // С какого символа будет начинаться абсолютный путь ({} - без начального символа)
  };
}
