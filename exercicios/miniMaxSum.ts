function miniMaxSum(arr: number[]): void {
  const arr_sort = arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  const min = arr_sort
    .slice(0, arr.length - 1)
    .reduce((prev, curr) => prev + curr);

  const max = arr_sort.slice(1, arr.length).reduce((prev, curr) => prev + curr);

  console.log(min, max);
}

miniMaxSum([2, 221, 69, 7, 8974]);
