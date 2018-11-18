export function mapObject<T, R>(
  obj: { [id: string]: T },
  callback: (val: T, key: string, index?: number) => R
): { [id: string]: R } {
  const keys = Object.keys(obj);
  return keys
    .map((key, index) => {
      return callback(obj[key], key, index);
    })
    .reduce((acc, val, index) => {
      return {
        ...acc,
        [keys[index]]: val
      };
    }, {});
}

export function updateObject<T>(
  obj: { [id: string]: T },
  key: string,
  newValue: T
) {
  const newObj = obj;
  newObj[key] = newValue;
  return newObj;
}

export function toArray<T>(obj: { [id: string]: T }): T[] {
  return Object.keys(obj).map(key => {
    return obj[key];
  });
}
