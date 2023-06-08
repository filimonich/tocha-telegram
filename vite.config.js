import injectHTML from 'vite-plugin-html-inject';

export default {
  root: './src',
  publicDir: './../public',
  build: {
    outDir: './../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: '/index.html',
        other: '/pages/other.html',
      },
    },
  },
  plugins: [injectHTML()],
};
