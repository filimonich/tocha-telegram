import injectHTML from 'vite-plugin-html-inject';

export default {
  root: './src',
  publicDir: './../public',
  build: {
    outDir: './../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: '/index.html',
        other: '/pages/modal.html',
      },
    },
  },
  plugins: [injectHTML()],
};
