const postJobBtn = document.getElementById("post-job-button");
const findTutorBtn = document.getElementById("find-tutor-button");
const searchTutorBtn = document.getElementById("search-tutor-button");
const profileBtn = document.getElementById("student-profile-button");
const postJobBtnId = document.getElementById("post-job-button-id");
const sendRequestBtn = document.getElementById("send-request-button");
const notificationBtn = document.getElementById("notification-button");
const seeTutorDetailsType1Btn = document.getElementById("see-tutor-details-id-type-1");
const seeTutorDetailsType2Btn = document.getElementById("see-tutor-details-id-type-2");
const notificationsDetailsId = document.getElementById("notifications-details-id");
const removeTutorNotificationType1Btn = document.getElementById("remove-tutor-notification-id-type-1");
const removeTutorNotificationType2Btn = document.getElementById("remove-tutor-notification-id-type-2");
const notificationAreaId = document.getElementById("notification-area-id");
const foundedTutorIndividualId = document.getElementById("founded-tutor-individual-id");

//post job handler
postJobBtn.addEventListener("click", function () {
    const postJob = document.getElementById("post-job");
    postJob.style.display = "block"
    const findTutor = document.getElementById("find-tutor");
    findTutor.style.display = "none";
    const studentProfile = document.getElementById("student-profile-id");
    studentProfile.style.display = "none";
    notificationAreaId.style.display = "none";
    postJobBtn.style.color = "#04BFCD";
    findTutorBtn.style.color = "#000";
    notificationBtn.style.color = "#000";
    profileBtn.style.color = "#000";
})

postJobBtnId.addEventListener("click", function () {
    if (confirm("Are you sure you want to post a job?") == true) {
        alert("Job posted successfully.")
    } else {
        alert("Make sure before posting a job.")
    }
})


//find a tutor handler
findTutorBtn.addEventListener("click", function () {
    const findTutor = document.getElementById("find-tutor");
    findTutor.style.display = "block";
    const postJob = document.getElementById("post-job");
    postJob.style.display = "none"
    const foundTutorsList = document.getElementById("found-tutors-list");
    foundTutorsList.style.display = "none";
    const studentProfile = document.getElementById("student-profile-id");
    studentProfile.style.display = "none";
    notificationAreaId.style.display = "none";
    postJobBtn.style.color = "#000";
    findTutorBtn.style.color = "#04BFCD";
    notificationBtn.style.color = "#000";
    profileBtn.style.color = "#000";
})

searchTutorBtn.addEventListener("click", function () {
    const foundTutorsList = document.getElementById("found-tutors-list");
    foundTutorsList.style.display = "block";
    const foundedTutorId = document.getElementById("founded-tutor-id");
    foundedTutorId.style.display = "none";
})

foundedTutorIndividualId.addEventListener("click", function () {
    const tutorId = document.getElementById("founded-tutor-id")
    tutorId.style.display = "block"
})

sendRequestBtn.addEventListener("click", function () {
    alert("Request sent successfully.");
})




//notification handler
notificationBtn.addEventListener("click", function () {
    // const notificationAreaId = document.getElementById("notification-area-id");
    notificationAreaId.style.display = "block";
    const postJob = document.getElementById("post-job");
    postJob.style.display = "none"
    const findTutor = document.getElementById("find-tutor");
    findTutor.style.display = "none";
    const studentProfile = document.getElementById("student-profile-id");
    studentProfile.style.display = "none";
    const notificationsDetailsId = document.getElementById("notifications-details-id");
    notificationsDetailsId.style.display = "none";
    postJobBtn.style.color = "#000";
    findTutorBtn.style.color = "#000";
    notificationBtn.style.color = "#04BFCD";
    profileBtn.style.color = "#000";
})

seeTutorDetailsType1Btn.addEventListener("click", function () {
    notificationsDetailsId.style.display = "block";

})

seeTutorDetailsType2Btn.addEventListener("click", function () {
    notificationsDetailsId.style.display = "block";

})

removeTutorNotificationType1Btn.addEventListener("click", function () {
    notificationsDetailsId.style.display = "none";
    const type1NotificationId = document.getElementById("type-1-notification-id");
    type1NotificationId.style.display = "none";
})

removeTutorNotificationType2Btn.addEventListener("click", function () {
    notificationsDetailsId.style.display = "none";
    const type2NotificationId = document.getElementById("type-2-notification-id");
    type2NotificationId.style.display = "none";
})




//student profile handler
profileBtn.addEventListener("click", function () {
    const studentProfile = document.getElementById("student-profile-id");
    studentProfile.style.display = "block";
    const postJob = document.getElementById("post-job");
    postJob.style.display = "none"
    const findTutor = document.getElementById("find-tutor");
    findTutor.style.display = "none";
    notificationAreaId.style.display = "none";
    postJobBtn.style.color = "#000";
    findTutorBtn.style.color = "#000";
    notificationBtn.style.color = "#000";
    profileBtn.style.color = "#04BFCD";
})



// var tutors = document.getElementsByClassName("founded-tutor-individual");
// var tutorFunction = function () {
//     const tutorId = document.getElementById("founded-tutor-id")
//     tutorId.style.display = "block"
// };
// for (var i = 0; i < tutors.length; i++) {
//     tutors[i].addEventListener('click', tutorFunction, false);
// }