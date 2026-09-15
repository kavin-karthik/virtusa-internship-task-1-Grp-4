const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Calculates a person's age in years, months, and days given a
 * date-of-birth string, measured against today's date.
 *
 * @param {string} dobString - date of birth in YYYY-MM-DD format
 * @returns {{years: number, months: number, days: number}} the calculated age
 */
function calculateAge(dobString) {
  const dateOfBirth = new Date(dobString);

  if (isNaN(dateOfBirth.getTime())) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD.");
  }

  const today = new Date();

  let years = today.getFullYear() - dateOfBirth.getFullYear();
  let months = today.getMonth() - dateOfBirth.getMonth();
  let days = today.getDate() - dateOfBirth.getDate();

  // Borrow days from the previous month if the day count went negative
  if (days < 0) {
    months -= 1;
    const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInPreviousMonth;
  }

  // Borrow a year from the month count if it went negative
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

rl.question("Enter date of birth (YYYY-MM-DD): ", (dobInput) => {
  try {
    const age = calculateAge(dobInput);
    console.log(`Age: ${age.years} years, ${age.months} months, ${age.days} days`);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
});
