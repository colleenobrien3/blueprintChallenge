console.log("We in");

function handleSubmit(e) {
  e.preventDefault();
  let email = document.querySelector("#emailInput").value;
  let zip = document.querySelector("#zipInput").value;
  if (email.includes("@") == false) {
    alert("Please enter a valid email.");
  } else if (!(zip.length == 5)) {
    alert("Please enter a valid zip code.");
  }
}

document.querySelector("#joinButton").addEventListener("click", handleSubmit);
