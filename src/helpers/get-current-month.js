const getCurrentMonth = () => [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec',
][new Date().getMonth()];

export default getCurrentMonth;
