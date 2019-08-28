import createjs from 'preload-js';


export const preloadImage = (src) => {
  const queue = new createjs.LoadQueue(false);
  queue.loadFile({ src, type: 'image' });
  return new Promise((resolve, reject) => {
    queue.on('complete', () => resolve(src));
    queue.on('error', () => reject(src));
  });
};
