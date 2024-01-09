const date =document.getElementById("date");
const day =document.getElementById("day");
const month =document.getElementById("month");
const year =document.getElementById("year");

const today = new Date();

const weekDays =[ "Sunday","Monday","Tuesdaay", "Wednesday","Thursday", "friday","Saturday" ]
const allMonths =[ "January", "Febuary", "March","April", "may" ,"June","July","August","September","October" ,"Novembe","December"   ]


date.innerHTML =(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML =weekDays[today.getDay()];
month.innerHTML =allMonths[today.getmonth()];
year.innerHTML =today.getFullsyear();