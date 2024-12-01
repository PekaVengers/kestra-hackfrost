const axios = require("axios");

class ApiClient {
  constructor(baseUrl, apiKey) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  async request(method, url, data = {}) {
    try {
      const response = await this.client.request({ method, url, data });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
}

module.exports = ApiClient;
