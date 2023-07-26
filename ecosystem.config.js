module.exports = {
  apps: [
    {
      name: 'home-page',
      port: '5000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}