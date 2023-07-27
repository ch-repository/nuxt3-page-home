const BASE_URL = "/proxyApi";

class HttpRequest {
  request(url, method, data, options = {}) {
    return new Promise((resolve, reject) => {
      const newOptions = {
        baseURL: BASE_URL,
        method,
        ...options,
      };

      if (method === "GET" || method === "DELETE") {
        newOptions.params = data;
      }

      if (method === "POST" || method === "PUT") {
        newOptions.body = data;
      }

      useFetch(url, newOptions)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(url, params, options = {}) {
    return this.request(url, "GET", params, options);
  }

  post(url, data, options = {}) {
    return this.request(url, "POST", data, options);
  }

  put(url, data, options = {}) {
    return this.request(url, "PUT", data, options);
  }

  delete(url, params, options = {}) {
    return this.request(url, "DELETE", params, options);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
