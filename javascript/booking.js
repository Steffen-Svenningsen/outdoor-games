// FlatPickr
dateConfig = {
    dateFormat: "U",
    altInput: true,
    altFormat: "\\k\\l. H:i D. \\d. j. M, Y",
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
// set the date (setDate()) as current date (getDate()) + 1 so we get the date tomorrow
currentDateTime.setDate(currentDateTime.getDate() + 1);

let year = currentDateTime.getFullYear();

// + 1 so we don't start at 0 (1-12 instead of 0-11)
let month = (currentDateTime.getMonth() + 1);

let date = (currentDateTime.getDate());

// format the output /////////////////////////////////
if (date < 10) {                                    //
    // 0 in front if less than 10 (02, 04, etc.)    //
    date = '0' + date;                              //
}                                                   //
if (month < 10) {                                   //
    month = '0' + month;                            //
}                                                   //
let dateTomorrow = date + "-" + month + "-" + year; //

let datoInput = document.querySelectorAll(".dato");

for (let i = 0; i < datoInput.length; i++) {
    datoInput[i].setAttribute("placeholder", dateTomorrow);
}