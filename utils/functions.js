export const sortByPublishDate = (data) => {
  const array = [...data];
  let sorted = array.sort((a, b) => new Date(a.dates[0].date) - new Date(b.dates[0].date));
  return sorted;
};
