let numbSet = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];

let date = new Date();
console.log(date.getTime());
function randomize(array) {
  let newObject = {};
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newObject[array[i]] = date.getTime() % array[i];
    console.log(newObject);
  }
  for (i = 0; i < array.length; i++) {
    if (newObject.hasOwnProperty(array[i])) {
      if (i === 0) {
        newArray.push(array[i]);
      } else {
        if (newObject[array[i]] % 2 === 0) {
          newArray.push(array[i]);
        } else {
          newArray.unshift(array[i]);
        }
      }
    }
  }
  console.log(newArray);
}
randomize(numbSet);

function findMean(array) {
  let sum = 0;
  let mean = null;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  mean = sum / array.length;
  return mean;
}

var table = document.createElement("TABLE");
document.querySelector("body").appendChild(table);
let row0 = table.insertRow(0);
let cell0 = row0.insertCell(0);
cell0.innerHTML = "First Name".bold();
cell0.style.border = "1px solid";
let cell1 = row0.insertCell(1);
cell1.innerHTML = "Last Name".bold();
cell1.style.border = "1px solid";
let cell3 = row0.insertCell(2);
cell3.innerHTML = "Email".bold();
cell3.style.border = "1px solid";
let cell4 = row0.insertCell(3);
cell4.innerHTML = "Gender".bold();
cell4.style.border = "1px solid";
table.style.border = "1px solid";

fetch("https://bpbuild.com/devtest/data.php")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    for (i = 0; i < res.length; i++) {
      let row1 = table.insertRow(i + 1);
      let cell1 = row1.insertCell(0);
      cell1.innerHTML = res[i].firstname;
      cell1.style.border = "1px solid";
      let cell2 = row1.insertCell(1);
      cell2.innerHTML = res[i].lastname;
      cell2.style.border = "1px solid";
      let cell3 = row1.insertCell(2);
      cell3.innerHTML = res[i].email;
      cell3.style.border = "1px solid";
      let cell4 = row1.insertCell(3);
      cell4.innerHTML = res[i].gender;
      cell4.style.border = "1px solid";
    }
  });
