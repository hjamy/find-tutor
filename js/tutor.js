const boardBtn = document.getElementById("board-button");
const invitationBtn = document.getElementById("invitation-button");
const employerBtn = document.getElementById("employer-button");
const profileBtn = document.getElementById("profile-button");
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
    boardBtn.style.color = "#04BFCD";
    invitationBtn.style.color = "#000";
    employerBtn.style.color = "#000";
    profileBtn.style.color = "#000";
})


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
    boardBtn.style.color = "#000";
    invitationBtn.style.color = "#04BFCD";
    employerBtn.style.color = "#000";
    profileBtn.style.color = "#000";
})


employerBtn.addEventListener("click", function () {
    const employer = document.getElementById("employer");
    employer.style.display = "block"
    const board = document.getElementById("board");
    board.style.display = "none"
    const invitation = document.getElementById("invitation");
    invitation.style.display = "none"
    const profile = document.getElementById("profile");
    profile.style.display = "none"
    const employerId = document.getElementById("employer-id")
    employerId.style.display = "none"
    boardBtn.style.color = "#000";
    invitationBtn.style.color = "#000";
    employerBtn.style.color = "#04BFCD";
    profileBtn.style.color = "#000";
})


profileBtn.addEventListener("click", function () {
    const profile = document.getElementById("profile");
    profile.style.display = "block"
    const board = document.getElementById("board");
    board.style.display = "none"
    const invitation = document.getElementById("invitation");
    invitation.style.display = "none"
    const employer = document.getElementById("employer");
    employer.style.display = "none"
    boardBtn.style.color = "#000";
    invitationBtn.style.color = "#000";
    employerBtn.style.color = "#000";
    profileBtn.style.color = "#04BFCD";
})


//job-details show item event handler
var jobs = document.getElementsByClassName("job-serial");
var jobFunction = function () {
    const jobDetails = document.getElementById("job-details")
    jobDetails.style.display = "block"
};
for (var i = 0; i < jobs.length; i++) {
    jobs[i].addEventListener('click', jobFunction, false);
}


//invitation-details show item event handler
var invitations = document.getElementsByClassName("invitation-serial");
var invitationFunction = function () {
    const invitationDetails = document.getElementById("invitation-details")
    invitationDetails.style.display = "block"
};
for (var i = 0; i < invitations.length; i++) {
    invitations[i].addEventListener('click', invitationFunction, false);
}

//employer-details show item event handler
var employers = document.getElementsByClassName("employer-individual");
var employerFunction = function () {
    const employerId = document.getElementById("employer-id")
    employerId.style.display = "block"
};
for (var i = 0; i < employers.length; i++) {
    employers[i].addEventListener('click', employerFunction, false);
}