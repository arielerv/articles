import { create, ApiResponse } from "apisauce";

const http = create({
  baseURL: process.env.REACT_APP_BASE_URL,
  adapter: require("axios/lib/adapters/http"),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": process.env.REACT_API_CORS
  }
});

const navMonitor = async (response: ApiResponse<any>) => {
  if (response.status !== 200) {
    if (response && response.data) {
      response.data.code = "General Error";
    }
  }
};

http.addAsyncResponseTransform(navMonitor);

export default http;
