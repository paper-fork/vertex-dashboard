export function queryDates(data: any) {
  const dates: any = [];

  data?.forEach((obj: any) => {
    if (obj?.hasOwnProperty('timestamp')) {
      const date = new Date(obj.timestamp * 1000); // Convert timestamp to milliseconds
      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      dates.push(formattedDate);
    }
  });

  dates.pop(); // Remove the first element

  return dates.reverse();
}
