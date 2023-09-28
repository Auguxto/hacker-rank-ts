function timeConversion(s: string): string {
  let time: string[] = [];

  if (s.includes("AM")) {
    let time_array = s
      .replace("AM", "")
      .split(":")
      .map((value, index) =>
        index === 0 ? (Number(value) === 12 ? 0 : Number(value)) : Number(value)
      );

    time_array.forEach((value) => {
      time.push(String(value).padStart(2, "0").padEnd(2, "0"));
    });
  } else if (s.includes("PM")) {
    let time_array = s
      .replace("PM", "")
      .split(":")
      .map((value, index) =>
        index === 0
          ? Number(value) === 12
            ? 12
            : Number(value) + 12
          : Number(value)
      );

    time_array.forEach((value) => {
      time.push(String(value).padStart(2, "0").padEnd(2, "0"));
    });
  }

  return time.join(":");
}

console.log(timeConversion("07:05:45PM"));
