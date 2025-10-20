export const ageUser = (birthday: string) => {
  const [day, month, year] = birthday.split("-").map(Number);
  const formatBirthday = new Date(year, month - 1, day);
  const today = new Date();
  let edad = today.getFullYear() - formatBirthday.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  if (
    currentMonth < formatBirthday.getMonth() ||
    (currentMonth === formatBirthday.getMonth() &&
      currentDay < formatBirthday.getDate())
  ) {
    edad--;
  }

  return edad;
};
