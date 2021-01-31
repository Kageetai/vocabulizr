/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint src --ext .js,jsx,.ts,.tsx',
        watch: 'esw -w --clear src --ext .js,jsx,.ts,.tsx',
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    open: 'none',
  },
  buildOptions: {
    /* ... */
  },
};
