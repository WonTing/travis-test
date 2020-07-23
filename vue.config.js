module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/travis-test-demo/' : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/travis-test/' : '/',
	pwa: {
		workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // service-worker.js 的路徑
      swSrc: 'src/service-worker.js'
    }
	}
}