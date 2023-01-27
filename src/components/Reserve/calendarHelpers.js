export function randomDates() {
  return Math.random() > 0.7;
}

export const today = new Date();

export const tomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};
