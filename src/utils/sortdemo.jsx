let students = [
  {
    "name": "Isabella Williams",
    "roll": 38,
  },
  {
    "name": "Sophia Heels",
    "roll": 45,
  },
  {
    "name": "Ava Benjamin",
    "roll": 17,
  },
  {
    "name": "Amelia Brown",
    "roll": 8,
  },
]

// Our Sorting function
students.sort((s1, s2) => {
    return s1.roll - s2.roll;
});

// printing our results
console.log("Students sorted based on ascending order of their roll numbers are:")
console.log(students);