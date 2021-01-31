import { version, provide, inject } from 'vue';

const versionSymbol: unique symbol = Symbol('version');

export const provideVersion = (): void => provide(versionSymbol, version);
export const useVersion = (): string => inject(versionSymbol);
