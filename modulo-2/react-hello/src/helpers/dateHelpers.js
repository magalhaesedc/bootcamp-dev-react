export function getAgeFrom(birthDate) {
  if (!birthDate) {
    return "?";
  }

  let [birthYear, birthMonth, birthDay] = birthDate.split("-");

  birthYear = parseInt(birthYear, 10);
  birthMonth = parseInt(birthMonth, 10);
  birthDay = parseInt(birthDay, 10);

  let today = new Date();
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth() + 1;
  let todayDay = today.getDate();

  let age = todayYear - birthYear;

  if (birthMonth > todayMonth) {
    age--;
  }

  if (birthMonth === todayMonth && birthDay > todayDay) {
    age--;
  }

  return age;
}
