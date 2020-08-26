const postJobBtn = document.getElementById("post-job-button");
const findTutorBtn = document.getElementById("find-tutor-button");
const searchTutorBtn = document.getElementById("search-tutor-button");


postJobBtn.addEventListener("click", function () {
    const postJob = document.getElementById("post-job");
    postJob.style.display = "block"
    const findTutor = document.getElementById("find-tutor");
    findTutor.style.display = "none";
    postJobBtn.style.color = "#04BFCD";
    findTutorBtn.style.color = "#000";

})


findTutorBtn.addEventListener("click", function () {
    const findTutor = document.getElementById("find-tutor");
    findTutor.style.display = "block";
    const postJob = document.getElementById("post-job");
    postJob.style.display = "none"
    postJobBtn.style.color = "#000";
    findTutorBtn.style.color = "#04BFCD";
})


searchTutorBtn.addEventListener("click", function () {
    const foundTutorsList = document.getElementById("found-tutors-list");
    foundTutorsList.style.display = "block";
})


var tutors = document.getElementsByClassName("founded-tutor-individual");
var tutorFunction = function () {
    const tutorId = document.getElementById("founded-tutor-id")
    tutorId.style.display = "block"
};
for (var i = 0; i < tutors.length; i++) {
    tutors[i].addEventListener('click', tutorFunction, false);
}