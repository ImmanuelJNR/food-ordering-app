// src/types/webpack.d.ts
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys: () => string[];
    <T>(id: string): T;
  };
};
