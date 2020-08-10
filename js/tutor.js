const boardBtn = document.getElementById("board-button");
boardBtn.addEventListener("click", function () {
    const board = document.getElementById("board");
    board.style.display = "block"
    const invitation = document.getElementById("invitation");
    invitation.style.display = "none"
    const employer = document.getElementById("employer");
    employer.style.display = "none"
    const profile = document.getElementById("profile");
    profile.style.display = "none"
    const jobDetails = document.getElementById("job-details")
    jobDetails.style.display = "none"
})

const invitationBtn = document.getElementById("invitation-button");
invitationBtn.addEventListener("click", function () {
    const invitation = document.getElementById("invitation");
    invitation.style.display = "block"
    const board = document.getElementById("board");
    board.style.display = "none"
    const employer = document.getElementById("employer");
    employer.style.display = "none"
    const profile = document.getElementById("profile");
    profile.style.display = "none"
    const invitationDetails = document.getElementById("invitation-details")
    invitationDetails.style.display = "none"
})


//job-details show item event handler

var elements = document.getElementsByClassName("serial-no");
var myFunction = function () {
    const jobDetails = document.getElementById("job-details")
    jobDetails.style.display = "block"
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}


//invitation-details show item event handler
var elements = document.getElementsByClassName("serial-no");
var myFunction = function () {
    const invitationDetails = document.getElementById("invitation-details")
    invitationDetails.style.display = "block"
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}