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
    splash: {
      image: "./assets/images/splash-icon.png",
      objectFit: "contain",
      backgroundColor: "#ff69b4",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.lovepage.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ff69b4",
      },
      package: "com.lovepage.app",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-splash-screen",
      [
        "expo-secure-store",
        {
          configureAndroidBackup: true,
          faceIDPermission:
            "Permitir que o aplicativo acesse seus dados biométricos para autenticação segura.",
        },
      ],
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "static",
          },
        },
      ],
      "expo-sqlite",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "7c530d57-fade-41f3-842c-a905d03557f8",
      },
    },
  },
}; 