module.exports = {
  apps: [
    {
      name: 'home-page',
      port: '8082',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}