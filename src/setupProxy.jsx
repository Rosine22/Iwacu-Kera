const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api-docs',
        createProxyMiddleware({
            target: 'https://iwacu-kera-backend-2.onrender.com',
            changeOrigin: true,
        })
    );
};
