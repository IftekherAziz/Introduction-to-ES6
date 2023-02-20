document.getElementById("apply-bg").addEventListener("click", function() {

    //console.log("Apply background color");

    // To set background color on every elements containing the class "friend"
    const friends = document.getElementsByClassName("friend");
   for (const friend of friends) {
        friend.style.backgroundColor = "lightblue";
    }

});

// To work with specific element by id
document.getElementById("btn-friend-3").addEventListener("click", function() {
    
    // console.log("Button friend 3 clicked");
    const friend = document.getElementById("friend-3");
    friend.style.textAlign = "center";
});

// Add new items (div) using id and addEventListener
document.getElementById("add-new-friend").addEventListener("click", function() {
   //console.log("Add new friend");
   const friendContainer = document.getElementById("friends");
   const friendDiv = document.createElement("div");
   friendDiv.classList.add("friend");
   friendDiv.style.backgroundColor = "red";
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        `;
    friendContainer.appendChild(friendDiv);
});