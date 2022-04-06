const liveHost = "https://us-central1-mealstogo-7519b.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-7519b/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
