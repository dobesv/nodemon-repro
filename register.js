// Helper for running scripts in dev environment.
// Usage: node -r src/startup/server/register.js path/to/your/script

// Load babel transpiler so any ts/js/jsx/tsx files are converted
require('@babel/register')({
  envName: 'server',
  extensions: ['.js', '.ts', '.jsx', '.tsx'],
});
// Load babel polyfill so above converted files have the stuff they expect
// to be available globally
require('@babel/polyfill');
// Load .env
require('dotenv/config');
