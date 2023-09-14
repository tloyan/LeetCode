/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initial_val = init;
    let val = init;

    return {
      increment: function increment() {
        return val = val + 1;
      },
      decrement: function decrement() {
        return val = val - 1;
      },
      reset: function reset() {
        return val = initial_val;
      }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */