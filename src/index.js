// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...


threeContacts.forEach((person) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
<td>
    <img src="${person.pictureUrl}" />
  </td>
  <td> ${person.name} </td>
  <td> ${person.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;



  const allBtnDelete = newRow.querySelector(".btn-delete")
  allBtnDelete.addEventListener("click", () => {
    newRow.remove()
  })

  const likeButton = newRow.querySelector(".btn-like")
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected")
  })

  tableBody.appendChild(newRow);
})

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
