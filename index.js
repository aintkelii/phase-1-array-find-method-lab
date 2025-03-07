function superbowlWin(record) {
  // Use find() to locate the first object where result is "W"
  const winRecord = record.find((game) => game.result === "W");

  // If a win record is found, return the year; otherwise, return undefined
  return winRecord ? winRecord.year : undefined;
} // code your solution here
