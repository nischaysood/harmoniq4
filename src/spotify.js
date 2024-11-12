import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "c8ddd14e620b4bbbaaf1a2f34d0102e0";
const redirectUri = "http://localhost:3001";
const scopes = ["user-library-read", "playlist-read-private,app-remote-control,"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
