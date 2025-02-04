'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba0de7acda1df766d0163a1557f8c13f",
".git/config": "87d0368b601824a01305661061b35520",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "68df26a13fa05156a651d83f9ab91ca6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9719e9f2d22f1e9b99fbb18fcf8baf13",
".git/logs/refs/heads/main": "2af64243c799600c672c1ddd0d7536ef",
".git/logs/refs/remotes/origin/main": "1b0bf195cb0bfdaeb1998fe0f9cfcda3",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0c/92217251e7c8b0b7cbae39b1c19038dd01071a": "bbc71118abdc7af6cc24acaecea28984",
".git/objects/15/74b5fdc1f568bbd672ba59252c2063fdd1479d": "96cd9b74bfacd0ba981d4c3ec8ef849a",
".git/objects/22/a4a3fb11cf9770ac6cf05a12ce5199673ed625": "19027831984962db9cee764fdd53758a",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/ed9f91c208de4e84818d424b428676817c5093": "a098c2414511b910cc679cc4b7b12b89",
".git/objects/2a/0e54d941e4526cb9eba133cb5252399da92339": "97473fb26536774f448f66e1c4e511ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/28ae19009165f5ad9233e42c9fe8b112d886e1": "0ddb4e601477d8b3c81c43a67d8ce155",
".git/objects/4e/09221bb028365291e11730b5dc1770f0d1625e": "c2ba57ae221185ad9111d0958dc1792c",
".git/objects/4f/047e113f489332db65868361c7842d9ceac1cf": "1708fd5d324149d43c1acd504ba37584",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/c192b5e58d87d2eafbcabc6a1b1c89d6b67a30": "58df81034f34a6738a4c2c6cb7436715",
".git/objects/6a/f492d5889508c5d9dbee509711b943315b5128": "4ab53f730382d193ca83b2146763ba1d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/1afed77778b79fb4ba3fa959ac654cce9c6e65": "5f7e390fe69b1bbcae520a061d24d0a0",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/84/ef4b25594775dabd139cea26e744f18a124749": "7ba7058f4c01ec8729a8e5474f6cc918",
".git/objects/86/1cc01f1fc4b74d02202c1351708c8d1d16f4db": "cf251547f081830037d28af7d4ee29a9",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/645069cb8ef7bafe8ddad4003c84cddcb57ba4": "4163d3cafe3ac82c1404c35a1cf1bba6",
".git/objects/90/0bf7fcea9f32a1291df635a6d7b4dddbe0095b": "608de99e6fb6e4881f55ada3ef42d881",
".git/objects/95/b965efdc281831543c19ef949ee17e15ef40ff": "59f40afff876f4d5ed8cecafb5badf0c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/7e8f829a07ed5b7e1a85c3c77c3a7a8a523f4a": "5e3471d8e912995f344446d9590386e9",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b5/eee4e924b4ea476440406de98f2d74ced72c0d": "4d0e34a5076bb2e8561244958ee7e640",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/52cdb0edee1ef0261bb0c26c79d142a6051bee": "3c7eb9b11b9ac9437d0ffb1b11918876",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d3/0dbe88b916ca0f5168d6112e0e43fd05ca0ce3": "36b2f5e624830651de2ab649f5107b80",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/9cd2b40a794830d5e42acd1beb466092966dca": "cd16b25b5a14ef3b3a935dc0757990b4",
".git/objects/d9/5d7def5ed87781eb00b196100eba95cd9c1e3a": "af884116977d8a07a5235f2512fb4236",
".git/objects/db/0787ef9963687dad5924193f84bfb961da7e05": "897e6ae3d10cda778d32dbcf7ca8e1f9",
".git/objects/df/b4d623594238a011c9f97da31285b0cb89e792": "ecc16c3bfefdbc0ea6666a62aac7632d",
".git/objects/e0/2f27a11fca7a5cf4190973af770555ca3be166": "00f200f39017e314c27dbdbce2898605",
".git/objects/e0/d06598bf60da6b65112d9b1df44861f2c028ff": "95d1f152343d3a81ff8070d2845af878",
".git/objects/e3/cc18be064aaa6346384056525c7a3e8dce210f": "5732b7f763bc9beafef92dfa64c10bd4",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/eac02237a8d478b2993dab2e879e6c36774af1": "9792b7b2352e1ae528c9d8a1c8b09a22",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/0e2cea3907f84ac8e543123d6c8cd4f89fb6e6": "785ef3c88c798cbcb9fb74ae7401f33a",
".git/objects/f6/e90fcbee4a8fbc358fd56e8e3a78762ff15be9": "bf993bd7f55aff9daf9485ae9cbad294",
".git/refs/heads/main": "b550e96c3aa10b0dcdef1a32b40ac9eb",
".git/refs/remotes/origin/main": "b550e96c3aa10b0dcdef1a32b40ac9eb",
"assets/AssetManifest.bin": "249a04618c748f6e00d48fdf5c28de42",
"assets/AssetManifest.bin.json": "e7a98d4107659856c81172b66a637e85",
"assets/AssetManifest.json": "71f920f338aaee0e20cefd16514f2f16",
"assets/assets/icons/dotIcon.png": "dd0b2fb64f4aca63eeb123d9bfd692bb",
"assets/assets/images/appIcon.png": "f25d9c8b0e845fa456b34e611e8a2c83",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7762310779010314e304120888982119",
"assets/NOTICES": "fa7d757ee2214a349be34633917d9fa4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "0495aeb7168dff2c6c59441888cc5904",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "84bd27e99741fd3035004a6b3f8bd269",
"icons/Icon-maskable-192.png": "381ce6b14ce13d9612b7abee29056d3d",
"index.html": "5b1a2bf60953b3f211aa176cdd3fcbcd",
"/": "5b1a2bf60953b3f211aa176cdd3fcbcd",
"main.dart.js": "1323f1b8b2773dbcf6304985c038d68e",
"manifest.json": "2ae08cde0640247603631f79d4470848",
"README.md": "e081f2bbd0de86a94432d155e7e801c6",
"version.json": "ded90f42c4ca64da72c9428f58b30f46"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
