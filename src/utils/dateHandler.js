export const addDays = (date, days) => {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
};

export const dateFormat = (date) => {
    const YYYY = date.getFullYear();
    const MM = date.getMonth() + 1;
    const DD = date.getDate();
  return `${YYYY}-${MM}-${DD}`;
};



export const parseDate = (date) => {
  const d = new Date(date);
  return `${d.toLocaleString('en-us', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()}`;
};
