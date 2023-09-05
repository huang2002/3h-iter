export type ToIterables<T extends readonly unknown[]> = {
    [K in keyof T]: Iterable<T[K]>;
};

export type MixinMap<T extends readonly unknown[], U> = {
    [K in keyof T]: T[K] | U;
};
