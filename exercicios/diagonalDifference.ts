function diagonalDifference(n: number, arr: number[][]): number {
  let left = 0;
  let right = 0;

  for (let i = 0; i < n; i++) {
    left += arr[i][i];
    right += arr[n - 1 - i][i];
  }

  return Math.abs(left - right);
}

console.log(
  diagonalDifference(3, [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
