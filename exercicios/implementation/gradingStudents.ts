function gradingStudents(grades: number[]): number[] {
  let result = [];

  for (let grade of grades) {
    if (grade % 5 === 0) result.push(grade);
    else {
      let next = grade;

      do {
        next++;
      } while (next % 5 !== 0);

      if (next - grade < 3 && next < 40) result.push(grade);
      else if (next - grade < 3 && next >= 40) result.push(next);
      else result.push(grade);
    }
  }

  return result;
}

console.log(gradingStudents([74, 67, 38, 33]));
