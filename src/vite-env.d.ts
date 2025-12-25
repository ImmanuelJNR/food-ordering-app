/// <reference types="vite/client" />

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        MainButton: any;
        BackButton: any;
        initData: string;
        initDataUnsafe: any;
        themeParams: any;
      };
    };
  }
}

export {};
