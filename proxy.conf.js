const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://localhost:7064/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
