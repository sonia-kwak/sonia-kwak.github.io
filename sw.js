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

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-132c2d9d089f95b9b07d.js"
  },
  {
    "url": "app-c7f56ff18368a72ca7d0.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d442a421c39cb1dd7731.js"
  },
  {
    "url": "index.html",
    "revision": "88d7b90c680d3351cd148d2dd8e1c28e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ce94853ea1acbe97df9b5bff106fc736"
  },
  {
    "url": "component---src-pages-index-js.a3fe537682e7addfea69.css"
  },
  {
    "url": "component---src-pages-index-js-aeda77925afa6ec805f6.js"
  },
  {
    "url": "0-73d958eb8e86c27b1b03.js"
  },
  {
    "url": "static/d/251/path---index-6a9-ND3SM0KLGUtErhntJKc1sfqKco.json",
    "revision": "f3996c25fbdc6a9b5a7c05db720fc3c4"
  },
  {
    "url": "component---src-pages-404-js.a3fe537682e7addfea69.css"
  },
  {
    "url": "component---src-pages-404-js-4f169bd2816c97d20474.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bbfc44bbd06ce9869bf1380fa8f7d87c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});