import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'il.yehiva.kav',
  appName: 'קו לישיבה',
  webDir: 'dist',
  plugins: { LocalNotifications: { smallIcon: 'ic_launcher', iconColor: '#4169f5' } }
};
export default config;
