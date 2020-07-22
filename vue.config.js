module.exports = {
	pwa: {
		workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // service-worker.js 的路徑
      swSrc: 'src/service-worker.js',
    }
	},
}