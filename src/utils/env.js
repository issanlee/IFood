import { Platform } from "react-native";

const liveHost = "https://us-central1-ifood-ad4af.cloudfunctions.net";
const localHost = "https://us-central1-ifood-ad4af.cloudfunctions.net";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
