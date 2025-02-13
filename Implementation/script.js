// console.log("script.js loaded");
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Loading our data from the Supabase API
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://sddclpuwivzmkooyccxz.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZGNscHV3aXZ6bWtvb3ljY3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MTEzNzksImV4cCI6MjA1MTk4NzM3OX0.syw-CB6c-ZzuAMy028e17bIgJXsYpW5I368q9lj5h6w",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZGNscHV3aXZ6bWtvb3ljY3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MTEzNzksImV4cCI6MjA1MTk4NzM3OX0.syw-CB6c-ZzuAMy028e17bIgJXsYpW5I368q9lj5h6w",
      },
    }
  );
  const data = await res.json();
  console.log("RESPONSE: ", res);
  console.log("RESPONSE: ", data);
  // const filteredData = data.filter((fact) => fact.category === "technology");
  // console.log("FILTERED DATA: ", filteredData);
  createFactsList(data);
}

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
// Getting the form element
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements, to render the facts in the list

factsList.innerHTML = ""; // Clear the facts list

// Function to create the facts list
function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
      <p>
        ${fact.text}
            <a
                class="source"
                href=${fact.source}
                target="_blank"
                >(Source)</a>
        </p>
        <span class="tag" style="background-color: ${
          CATEGORIES.find((category) => category.name === fact.category).color // You can use ANY javascript code inside the ${} brackets, as long as it returns a value.
        }"
        >${fact.category}</span>
    </li>`
  );
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterend", html);
}

// Attach an event listener to the button
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden"); // Show the form
    btn.textContent = "Close"; // Change the button text
  } else {
    form.classList.add("hidden"); // Hide the form
    btn.textContent = "Share a fact"; // Change the button text
  }
});

// // Testing JS features

// // Defining an arrow function
// const arrowFunction = (year) => {
//   console.log("YEAR DIFF: ", Math.abs(new Date().getFullYear() - year));
// };

// // Calling the arrow function
// arrowFunction(2035);

// // Defining an integer array
// const array = [1, 2, 3, 4, 5, true, "hello", 6, 7, 8, 9, 10];

// const newArray = [...array, 11, 12, 13, 14, 15];
// console.log("NEW ARRAY: ", newArray);

// const new_object = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   function() {
//     console.log("HELLO FROM FUNCTION");
//   },
// };

// console.log("NEW OBJECT: ", new_object);
// console.log("NEW OBJECT KEYS: ", Object.keys(new_object));
// console.log("NEW OBJECT VALUES: ", Object.values(new_object));
// // Getting the name value
// console.log("NEW OBJECT NAME: ", new_object.name);
// console.log("NEW OBJECT NAME: ", new_object["name"]);

// let newArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newArray2.forEach((element) => {
//   console.log("ELEMENT: ", element);
// });

// console.log("--------------------");

// let newArray3 = newArray2.map((element) => {
//   return element * 2;
// });
// newArray3.forEach((element) => {
//   console.log("ELEMENT: ", element);
// });

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((category) => category.name);
// console.log("ALL CATEGORIES: ", allCategories);

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// const factAges = initialFacts.map(
//   (fact) => new Date().getFullYear() - fact.createdIn
// );
// console.log("FACT AGES: ", factAges);

// Using the filter method
// const filteredFacts = initialFacts.filter((fact) => fact.votesFalse > 0);
// console.log("FILTERED FACTS: ", filteredFacts);
// const newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const filteredArray = newArray.filter((element) => element > 30);
// console.log("FILTERED ARRAY: ", filteredArray);

// Using the find method
// const foundFact = initialFacts.find((fact) => fact.id === 2);
// console.log("FOUND FACT: ", foundFact);
