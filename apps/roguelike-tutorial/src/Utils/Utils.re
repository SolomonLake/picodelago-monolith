let randomRange = (min, max) => {
  Random.self_init();
  Random.int(max - min) + min;
};