workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp('API'), // API 的位置
  workbox.strategies.cacheFirst()
)