export const checkEmpty = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

export const filter = (array) => {
  const keys = ["student_name", "isbn", "book_name", "author"];
  return array.filter((key) => keys.includes(key));
};

export function capitalize(string) {
  const factor = string.includes("_") ? "_" : " ";
  if (!string.includes(factor))
    return string.charAt(0).toUpperCase() + string.slice(1);

  const stringArr = string.split(factor);
  // eslint-disable-next-line no-shadow
  const capitalizedStringArr = stringArr.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  return capitalizedStringArr.join(" ");
}
