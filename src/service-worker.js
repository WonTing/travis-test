workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  // 設定要 cache 的 API 或 檔案的路徑
  new RegExp('https:\/\/picsum\.photos\/200'),
  // workbox.strategies.cacheFirst()
  // NetworkFirst() 以網路資料優先
  new workbox.strategies.NetworkFirst()
)