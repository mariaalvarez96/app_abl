import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ambbonalletra.app',
  appName: 'Amb Bona Lletra',
  webDir: 'www',
  android: {
    allowMixedContent: true
  },
  server: {
    androidScheme: 'http',
    iosScheme: 'http'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
