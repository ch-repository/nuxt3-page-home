export default defineEventHandler((event) => {
  // proxy only "/api" requests
  if (!event.node.req.url?.startsWith("/proxyApi")) return;

  // const { apiBaseUrl } = useRuntimeConfig();
  const apiBaseUrl = "https://email.chaohangweb.cn";
  const url = event.node.req.url.replace("/proxyApi", "");
  const target = new URL(url, apiBaseUrl);

  return proxyRequest(event, target.toString(), {
    headers: {
      host: target.host, // if you need to bypass host security
    },
  });
});
