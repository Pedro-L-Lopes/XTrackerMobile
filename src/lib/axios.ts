import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://ac89-2804-3ed8-bd00-5d01-2cbc-2198-c1bc-6bdb.ngrok-free.app/habit/",
});
