int indexInMap<K, V>(Map<K, V> map, K key) {
  return map.keys.toList().indexOf(key);
}

MapEntry<K, V> elementAtIndexInMap<K, V>(Map<K, V> map, int index) {
  final key = map.keys.elementAt(index);
  return MapEntry(key, map[key]);
}
