function rand(min, max, interval) {
    if (interval === undefined) interval = 1;
    return (
      Math.round((Math.floor(Math.random() * (max - min + 1)) + min) / interval) *
      interval
    );
  }
  
function randIndex(arr) {
    return arr[rand(1, arr.length) - 1];
  }