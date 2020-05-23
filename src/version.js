import { version, provide, inject } from 'vue';

const versionSymbol = Symbol('version');

export const provideVersion = () => provide(versionSymbol, version);
export const useVersion = () => inject(versionSymbol);
