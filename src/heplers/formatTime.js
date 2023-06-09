export const formatTime = (start, end) => {
  const time = end - start;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  if (time > hour) {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ${minutes - hours * 60} minutes ${
      seconds - hours * 60 - minutes * 60
    } seconds`;
  }
  if (time > minute) {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes ${seconds - minutes * 60} seconds`;
  }
  return `${Math.floor(time / 1000)} seconds`;
};
