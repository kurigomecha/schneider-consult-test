function getNextMonday(date = new Date()) {
  const dateCopy = new Date(date.getTime());

  const nextMonday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7), // if today is Monday, default to 7
    ),
  );

  return nextMonday;
}


// change `sale-end-date` to next Monday in RU locale

document.querySelector(`.sale-end-date`).textContent =
getNextMonday().toLocaleDateString(`ru-RU`);