import axios from "axios";

const apiCall = async (url, { method = "GET", payload = null, params = {}, headers = {}, skipToken = false } = {}) => {
  const token = localStorage.getItem('token');

  try {
    const config = {
      url,
      method,
      data: payload,
      params,
      headers: {
        "Content-Type": payload instanceof FormData ? "multipart/form-data" : "application/json",
        ...((token && !skipToken) ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export default apiCall;
