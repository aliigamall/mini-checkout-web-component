import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';


// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  plugins: [
    postcss({
      plugins: [
        tailwind(),
        autoprefixer()
      ]
    })
  ],
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
};
