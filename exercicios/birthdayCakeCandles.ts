function birthdayCakeCandles(candlesCount: number, candles: number[]): number {
  const candles_sort = candles.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));

  const max_candle_height = candles_sort[0];

  let candles_with_max_height = 0;

  candles_sort.forEach((candle_height) => {
    if (candle_height === max_candle_height) candles_with_max_height++;
  });

  return candles_with_max_height;
}

console.log(birthdayCakeCandles(4, [3, 2, 1, 3]));
