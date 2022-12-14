// FlatPickr
dateConfig = {
  dateFormat: "U",
  altInput: true,
  altFormat: "j. F, Y H:i",
  enableTime: true,
  time_24hr: true,
  minTime: "09:00",
  maxTime: "18:00",
  locale: "da",
  minDate: "today",
  disable: [
      "today"
  ]
}
flatpickr("#dato", dateConfig);

let currentDateTime = new Date();
let year = currentDateTime.getFullYear();

// + 1 so we don't start at 0 (1-12 instead of 0-11)
let month = (currentDateTime.getMonth() + 1);

// + 1 so we get the date tomorrow
let date = (currentDateTime.getDate() + 1);

// fit input date to "min" attribute format //////////
if (date < 10) {                                    //
    date = '0' + date;                              //
}                                                   //
if (month < 10) {                                   //
    month = '0' + month;                            //
}                                                   //
let dateTomorrow = year + "-" + month + "-" + date; //

let dato = document.querySelectorAll(".dato");

for (let i = 0; i < dato.length; i++) {
    dato[i].setAttribute("placeholder", dateTomorrow);
}