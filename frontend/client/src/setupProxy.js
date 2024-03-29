const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://localhost:5000',
			changeOrigin: true,
		})
	);
};
// module.exports = {
//   developMiddleware: app => {
//     app.use(
//       "/api",
//       proxy({
//         target: "http://localhost:8000",
//          changeOrigin: true,
//       })
//     )
//   },
// // }
// module.exports =function(app){
//   app.use(
//     proxy("/api",{
//       target:"http://localhost:5000",
//       changeOrigin: true,
//     })
//   )
// }