function formatName(firstName, lastName) {
  // remove spaces
  firstName = firstName.trim();
  lastName = lastName.trim();

  // fix first name (e.g. abdul → Abdul)
  firstName =
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase();

  // make last name uppercase
  lastName = lastName.toUpperCase();

  // return in required format
  return lastName + ", " + firstName;
}
console.log(formatName("  basit ", "abdulganiyu "));