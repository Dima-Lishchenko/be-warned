export const sortBy = (data, column, isReverse) => () => {
  const sortedData = data.sort((a, b) => {
    if (a[column] < b[column]) {
      return -1;
    } else if (a[column] > b[column]) {
      return 1;
    }
    return 0;
  });

  return isReverse ? sortedData.reverse() : sortedData;
};