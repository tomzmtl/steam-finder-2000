export const replace = (array, index, replacement) => [
  ...array.slice(0, index),
  replacement,
  ...array.slice(index + 1),
];
