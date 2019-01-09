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

export function updateSortedObject<T>(
  obj: { [id: string]: T },
  id: string,
  newValue: T
) {
  return mapObject(obj, (val, key) => {
    return key === id ? newValue : val;
  });
}

export function toArray<T>(obj: { [id: string]: T }): T[] {
  return Object.keys(obj).map(key => {
    return obj[key];
  });
}

export function indexOfObj<T>(
  obj: { [id: string]: T },
  searchId: string
): number | null {
  const arr = Object.keys(obj);
  const indexOfEl = arr.indexOf(searchId);
  return indexOfEl != -1 ? indexOfEl : null;
}

export function removeKey<T>(
  obj: { [_key: string]: T },
  keyToRemove: string
): { [_key: string]: T } {
  const { [keyToRemove]: value, ...updatedObject } = obj;
  return updatedObject;
}
