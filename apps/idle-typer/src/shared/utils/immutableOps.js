/* @flow */

/*

This are properly _typed_ immutable operations. Ideally we would spread operator, but it is not typesafe enough.

 */

export function immutableUpdate<T: {}>(obj: T, props: $Shape<T>): T {
  return {
    ...obj,
    ...props
  };
}

export function immutableSetInMap<U, T: { [key: string]: U }>(
  map: T,
  key: string,
  value: U
): T {
  return {
    ...map,
    [key]: value
  };
}

export function immutableExtend<T: {}, U: {}>(obj: T, props: U): T & U {
  return {
    ...obj,
    ...props
  };
}
