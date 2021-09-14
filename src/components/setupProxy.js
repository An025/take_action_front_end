// import proxy from "http-proxy-middleware";
const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/kitchens', { target: 'https://co2.eaternity.ch/api/' });

/* module.exports = function(app) {
    app.use(
        proxy("/kitchens", {
            target : "https://co2.eaternity.ch/api/",
            changeOrigin : true
        })
    );
}; */