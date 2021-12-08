//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
const greeting = {
  color: "red"
};

var greetingText;

const myHour = new Date().getHours();
// const myToday = new Date().getTime();
// const myMonth = new Date().getMonth();
// const myYear = new Date().getFullYear();
// const myDate = new Date().getDate();
// const myNoon = new Date(myYear, myMonth, myDate, 12).getTime();
// const myEvening = new Date(myYear, myMonth, myDate, 17).getTime();

//console.log(myHour);

if (myHour < 12) {
  greetingText = "Good Morning";
} else if (myHour < 18) {
  greetingText = "Good Afternoon";
  greeting.color = "green";
} else {
  greetingText = "Good Evening";
  greeting.color = "blue";
}
// if (myToday > myEvening) {
//   greetingText = "Good Evening";
//   greeting.color = "blue";
// } else if (myToday > myNoon) {
//   greetingText = "Good Afternoon";
//   greeting.color = "green";
// }
//console.log(myMonth, myYear, myDate, myNoon, myToday);

ReactDom.render(
  <h1 className="heading" style={greeting}>
    {greetingText}
  </h1>,
  document.getElementById("root")
);
