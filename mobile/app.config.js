export default {
  expo: {
    name: "Fernando & Miriam 💑",
    slug: "love-page",
    version: "1.0.0",
    newArchEnabled: false,
    orientation: "portrait",
    icon: "./assets/images/adaptive-icon.png",
    scheme: "love-page",
    userInterfaceStyle: "light",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "Love.Page",
      googleServicesFile: "./google-services.json",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ff69b4",
      },
      package: "Love.Page",
      googleServicesFile: "./google-services.json",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "expo-router",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-firebase/storage",
      "@react-native-firebase/firestore",
      "expo-notifications"
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "7c530d57-fade-41f3-842c-a905d03557f8"
      },
    },
  },
}; 