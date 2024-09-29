const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

module.exports = {
  globPatterns: [
    "**/*.{css,js}",
    "**/*.{jpg,jpeg,png,webp,mp3,woff2,xml,json,ico,svg,gif}",
  ],
  globDirectory: "public",
  swDest: "public/service-worker.js",
  maximumFileSizeToCacheInBytes: 10485760, // 缓存的最大文件大小，以字节为单位。
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      // 缓存站点中的所有图片
      urlPattern: /\.(?:jpg|jpeg|png|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "@jie_img-cache",
        expiration: {
          maxEntries: 500, // 可以根据需要调整
          maxAgeSeconds: 300 * 24 * 60 * 60, // 缓存 300 天
        },
      },
    },
    {
      // 缓存 HTML 文件
      urlPattern: /\.(?:html)$/,
      handler: "NetworkFirst", // 优先从网络获取，如果失败则从缓存中获取
      options: {
        cacheName: "@jie_html-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 缓存 30 天
        },
      },
    },
    {
      // 缓存 静态文件 文件
      urlPattern: /\.(?:mp3|woff2|xml|json|ico|svg|gif)$/,
      handler: "CacheFirst", // 优先从缓存获取，如果失败则从网络中获取
      options: {
        cacheName: "@jie_static-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 300 * 24 * 60 * 60, // 缓存 300 天
        },
      },
    },
  ],
  // manifestTransforms: [
  //   async (manifestEntries, compilation) => {
  //     const updatedManifestEntries = manifestEntries.map(entry => {
  //       // 计算文件内容的哈希值作为修订版本号
  //       const filePath = path.join('public', entry.url);
  //       const fileContent = fs.readFileSync(filePath);
  //       const hash = crypto.createHash('md5').update(fileContent).digest('hex');
  //       return {
  //         ...entry,
  //         revision: hash,
  //       };
  //     });

  //     return { manifest: updatedManifestEntries };
  //   },
  // ],
};
