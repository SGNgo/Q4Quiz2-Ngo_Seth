function getRating() {
  var science = parseInt(document.getElementById("science").value);
  var math = parseInt(document.getElementById("math").value);
  var english = parseInt(document.getElementById("english").value);

  var average = (science + math + english) / 3;
  let rating;

  if (average >= 94 && average <= 100) {
    rating = "Excellent";
  } else if (average >= 87 && average <= 93.99) {
    rating = "Above Satisfactory";
  } else if (average >= 80 && average <= 86.99) {
    rating = "Satisfactory";
  } else if (average >= 75 && average <= 79.99) {
    rating = "Needs Improvement";
  } else if (average >= 0 && average < 75) {
    rating = "Poor";
  } else {
    rating = "Invalid Entry";
  }

  document.getElementById("output").innerHTML = 
    "Average: " + average.toFixed(2) + "<br>Rating: " + rating;
}
