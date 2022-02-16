const debounceEvent = (callback, time: number) => {
  let interval;
  return (...args) => {
    if (interval) {
      clearTimeout(interval);
    }
    interval = setTimeout(() => {
      callback(...args);
    }, time);
  };
};

export default debounceEvent;
