import {
  defineEventHandler,
  getCookie,
  getHeaders,
  getMethod,
  getQuery,
  readBody,
} from "h3";
const baseURL = "https://email.chaohangweb.cn";
export default defineEventHandler(async (event) => {
  console.log("1", event.req.url);
  if (!event.node.req.url?.startsWith("/proxyApi")) return;
  console.log("2", event.req.url);

  const method = getMethod(event);
  const params = getQuery(event);

  const headers = getHeaders(event);
  const authorization =
    headers.Authorization || getCookie(event, "auth._token.local");

  const url = event.req.url.replace("/proxyApi", "");

  const body = method === "GET" ? undefined : await readBody(event);

  console.log("url", url);
  console.log("baseURL", baseURL);

  return await $fetch(url, {
    headers: {
      "Content-Type": headers["content-type"],
      Authorization: authorization,
    },
    baseURL,
    method,
    params,
    body,
  });
});
