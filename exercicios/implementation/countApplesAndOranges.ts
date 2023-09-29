function countApplesAndOranges(
  house_init_pos: number,
  house_finish_pos: number,
  apple_tree_pos: number,
  orange_tree_pos: number,
  apples: number[],
  oranges: number[]
): void {
  let total_apples = apples.filter(
    (apple_pos) =>
      apple_pos + apple_tree_pos >= house_init_pos &&
      apple_pos + apple_tree_pos <= house_finish_pos
  ).length;

  let total_oranges = oranges.filter(
    (orange_pos) =>
      orange_pos + orange_tree_pos >= house_init_pos &&
      orange_pos + orange_tree_pos <= house_finish_pos
  ).length;

  console.log(total_apples);
  console.log(total_oranges);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
