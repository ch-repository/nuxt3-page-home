// ~/server/middleware/proxy.ts
import { defineEventHandler } from "h3";
import { createProxyMiddleware } from "http-proxy-middleware"; // npm install http-proxy-middleware@beta

export default defineEventHandler(async (event) => {
  console.log('event.node.req.url', event.node.req.url)
  if (!event.node.req.url?.startsWith("/proxyApi")) return;

  const apiProxyMiddleware = createProxyMiddleware({
    target: "https://email.chaohangweb.cn",
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/proxyApi": "",
    },
    pathFilter: [],
    logger: console,
  });
  console.log("🚀 ~ file: proxy.js:19 ~ defineEventHandler ~ apiProxyMiddleware:", apiProxyMiddleware)

  await new Promise((resolve, reject) => {
    const next = (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    };

    apiProxyMiddleware(event.req, event.res, next);
  });
});
