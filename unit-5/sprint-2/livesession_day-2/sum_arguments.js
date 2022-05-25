function sumOfAll(...props) {
  const total = props.reduce((acc, elem) => acc + elem);
  return total;
}

function ConvertToTime(n) {
  const hours = Math.floor(n / 3.6e6) % 60;

  const minuts = Math.floor(n / 60000) % 60;

  const second = Math.floor(n / 1000) % 60;

  if (hours > 0) {
    const time = `${hours} Hours ${minuts} Minuts ${second} seconds`;
    return time;
  }
  if (minuts > 0) {
    const time = `${minuts} Minuts ${second} seconds`;
    return time;
  }
  return `${second} seconds`;
}

module.exports = { sumOfAll, ConvertToTime };
// console.log(sumOfAll(1,5,6,6));
// console.log(ConvertToTime(12000000))
