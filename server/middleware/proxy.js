export default defineEventHandler((event) => {
  // proxy only "/api" requests
  if (!event.node.req.url?.startsWith("/api/")) return;

  const { apiBaseUrl } = useRuntimeConfig();
  const target = new URL(event.node.req.url, apiBaseUrl);

  if (should_be_proxied)
    return proxyRequest(event, target.toString(), {
      headers: {
        host: target.host, // if you need to bypass host security
      },
    });
});
