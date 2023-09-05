/**
 * Map the given type to contain iterables.
 */
export type ToIterables<T extends {}> = {
    [K in keyof T]: Iterable<T[K]>;
};
/** dts2md break */
/**
 * Mix type `U` into the values of type `T`.
 */
export type MixinMap<T extends {}, U> = {
    [K in keyof T]: T[K] | U;
};
