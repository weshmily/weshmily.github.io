/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b374443b68eb21af274b3c95c12f1334"
  },
  {
    "url": "accumulate/index.html",
    "revision": "6e93e9f02b715228bcb731a0222356c9"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a315a7c01d1df59c63aabd6702ef8ada"
  },
  {
    "url": "assets/css/0.styles.b22f762a.css",
    "revision": "3e0ea3ecdfe0c31d4423a94ff23e7667"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.202878e4.js",
    "revision": "a1bce28daf4e041bc072e0a82f2d4c2f"
  },
  {
    "url": "assets/js/3.139f2e36.js",
    "revision": "1de15e332f1d0485131780f586650fc2"
  },
  {
    "url": "assets/js/4.83a08bdd.js",
    "revision": "7ee4038e6038c38a1359ba18e1ced010"
  },
  {
    "url": "assets/js/5.5f00fbf8.js",
    "revision": "f6ef483e6e54b2c836e70f45c9f91cb1"
  },
  {
    "url": "assets/js/6.65244ec9.js",
    "revision": "ee85fd798cdb935fcf11a4f4d8658a76"
  },
  {
    "url": "assets/js/7.f1579671.js",
    "revision": "da063ee854a6b2358cc80deb2b05af36"
  },
  {
    "url": "assets/js/8.bd45e8df.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.d5aaa50e.js",
    "revision": "2fe00dfec8318f957894adfde920f683"
  },
  {
    "url": "guide.html",
    "revision": "303df7e695f4156d44c738e67427a5a0"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "12a44b05105f9e670afed03a53f9d3aa"
  },
  {
    "url": "others/index.html",
    "revision": "d41dbda9d7cf3bb5593752062e54b4f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
