/*         * This script sets the page title dynamically.
         * It is used to ensure that the title is consistent across different pages.
         *the title is set to "دكتور" for the Doctor Reserve page.
         * after json data is loaded, the title will be set to "دكتور".
         */
let windowWidth = window.innerWidth;

let doctorId = new URLSearchParams(window.location.search).get("doctorId");
if (doctorId==null || doctorId=="" || doctorId==undefined) {
    doctorId = "0";
}
let patientID=window.localStorage.getItem('patientId');

function availableWidth() {
    if (windowWidth < 768) {
        //if the window width is less than 768px, then the page is in mobile view
        document.querySelector(".doctorCard").style.cssText = `width: 100%;`;
        document.querySelector(".doctorInfo").style.cssText = `width: 100%;`;
        document.querySelector(".services").style.cssText = `width: 100%;`;
        document.querySelector(".doctorSchedule").style.cssText = `width: 100%;`;
    }
}
function schedule(DoctorD, offset = new Number()) {
    //this function checks if the doctor has a schedule
    var nowDate = new Date();
    var currentDay = nowDate.getDay(); // 0-6 (Sunday-Saturday
    var workingDays = DoctorD.schedule.workingDays
    let holyDay = false;
    //this array contains the working days in Arabic
    var workingDaysTextArray = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    //this array contains the working days in Arabic
    var currentDayText = "";
    switch (currentDay) {
        case 0:
            currentDayText = workingDaysTextArray[0];
            break;
        case 1:
            currentDayText = workingDaysTextArray[1];
            break;
        case 2:
            currentDayText = workingDaysTextArray[2];
            break;
        case 3:
            currentDayText = workingDaysTextArray[3];
            break;
        case 4:
            currentDayText = workingDaysTextArray[4];
            break;
        case 5:
            currentDayText = workingDaysTextArray[5];
            break;
        case 6:
            currentDayText = workingDaysTextArray[6];
            break;
        default:
            break;
    }
    workingDays.forEach((day) => {
        if (day !== currentDayText) {
            holyDay = true;
        }

    });
    var StartinHours = DoctorD.schedule.workingHours.StartingHour
    var ClosingHours = DoctorD.schedule.workingHours.ClosingHours



}

//alert(window.location.href);
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var str = xmlHttp.responseText;
        implementData(str);
    }
}
xmlHttp.open("GET", "Js/doctorexamplejason.txt", true);
xmlHttp.send();
//this function will implement the data from the json file
//it will create the doctor card, doctor info, services, schedule and reviews
function implementData(d) {
    var jsonData = JSON.parse(d);
    var dData;
    var doctors = jsonData.doctors;
    doctors.forEach(doctor => {
        if (doctor.ID == doctorId) {    
            dData = doctor;
        }
    });
    //set page tilte
    document.title = dData.name;

    //create doctor card and append it to the doctordataBox
    var doctorDataBox = document.querySelector(".doctordataBox");
    doctorDataBox.style.cssText = `padding: 0px;`;
    //create doctor card
    var doctorCard = createDoctorCard(dData);
    doctorDataBox.appendChild(doctorCard);

    //create doctor info and append it to the doctordataBox
    var doctorInfoCard = createDoctorInfo(dData);
    doctorDataBox.appendChild(doctorInfoCard);

    //create services and append it to the doctordataBox
    var services = createServices(dData);
    doctorDataBox.appendChild(services);
    //create doctor schedule and append it to the doctordataBox
    var doctorREserve = createDoctorReserve(dData);
    doctorDataBox.appendChild(doctorREserve);

    //create reviews and append it to the doctordataBox
    var reviews = createReviews(dData);
    doctorDataBox.appendChild(reviews);

}

//create reviews card
//this card will contain the doctor's reviews
function createReviews(doctor) {
    //create reviews card
    let reviewsCard = document.createElement("div");
    reviewsCard.className = "reviewsCard";
    reviewsCard.style.cssText = `display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0px;`;
    //create reviews card header
    let cardHeader = document.createElement("h3");
    cardHeader.className = "reviewsCardHeader";
    cardHeader.textContent = "تقييمات الزوار";
    cardHeader.style.cssText = `text-align: right;
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
        margin-right: 10px;`;
    //create reviews content
    //this will contain the reviews
    let reviewsContent = document.createElement("div");
    reviewsContent.className = "reviewsContent";
    reviewsContent.style.cssText = `display: flex;
    width: 100%;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        overflow-y: auto;`;
    //loop through the doctor's reviews and create a card for each review   
    var reviews = doctor.reviews;
    reviews.forEach(review => {
        //create review card
        let reviewCard = document.createElement("div");
        reviewCard.className = "reviewCard";
        reviewCard.style.cssText = `display: flex;
            flex-direction: column;
            background-color:white;
            gap: 5px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;`;
        //create review header
        let reviewHeader = document.createElement("div");
        reviewHeader.className = "reviewHeader";
        reviewHeader.style.cssText = `display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;`;
        //create review author
        let reviewAuthor = document.createElement("span");
        reviewAuthor.className = "reviewAuthor";
        reviewAuthor.textContent = review.auther;
        reviewAuthor.style.cssText = `font-weight: bold;
            color: #333;`;
        //create review date
        let reviewDate = document.createElement("span");
        reviewDate.className = "reviewDate";
        reviewDate.textContent = new Date(review.date).toLocaleDateString("ar-EG", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        reviewDate.style.cssText = `color: #999;
            font-size: 0.9rem;`;
        //create review rating
        let reviewRating = document.createElement("span");
        reviewRating.className = "reviewRating";
        reviewRating.textContent = `التقييم: ${review.rating} / 5`;
        reviewRating.style.cssText = `color: #f39c12;
            font-weight: bold;
            margin:5px;
            font-weight: bold;`;
        //append review author, date and rating to review header
        reviewHeader.appendChild(reviewAuthor);
        reviewHeader.appendChild(reviewDate);
        reviewHeader.appendChild(reviewRating);
        //create review content
        let reviewContent = document.createElement("p");
        reviewContent.className = "reviewContent";
        reviewContent.textContent = review.content;
        reviewContent.style.cssText = `text-align: right;
            font-size: 14px;
            color: #555;
            padding-left: 15px;
            padding-right: 15px;`;
        //append review header and content to review card
        reviewCard.appendChild(reviewHeader);
        reviewCard.appendChild(reviewContent);
        //append review card to reviews content
        reviewsContent.appendChild(reviewCard);
    });
    //append reviews content to reviews card
    reviewsCard.appendChild(cardHeader);
    reviewsCard.appendChild(reviewsContent);
    //return reviews card
    return reviewsCard;
}
//create doctor reserve form
//this form will contain the reservation form

function createDoctorReserve(doctor) {
    //create reservation form card
    //this card will contain the reservation form
    let doctorreserveCard = document.createElement("div");
    doctorreserveCard.className = "reservationForm";
    doctorreserveCard.style.cssText = `display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0px;
       `;
    //create reservation form header
    //this header will contain the doctor's name

    let header = document.createElement("div");
    header.className = "reservationHeader";
    header.onclick = function () {
        //when clicked open new page with the doctor's schedule
        window.location.href = "DoctorSchedule.html?doctorId=" + doctor.ID;
    }
    //set header style
    header.style.cssText = `display: block;
        text-align: center;
        background-color:red;
        color: white;
        border-radius: 10px;
        border: 1px solid red;
        width: 100%;
        cursor: pointer;`

    //create header content
    //this content will contain the doctor's name
    let headerContent = document.createElement("h3");
    headerContent.className = "reserveHeaderContent";
    headerContent.textContent = "حجز موعد مع الدكتور " + " " + doctor.name;
    headerContent.style.cssText = `
        font-size:15px;
    `
    //create doctor reserve form
    let doctorReserveForm = document.createElement("form");
    doctorReserveForm.className = "doctorReserveForm";
    doctorReserveForm.style.cssText = `display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 20px;`;
    doctorReserveForm.elements=[]

    //create daycards container
    //this container will contain the day cards
    let dayCardsContainer = document.createElement("div");
    dayCardsContainer.className = "dayCardsContainer";
    dayCardsContainer.style.cssText = `display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;
        overflow-x: auto;`;
    //create day cards nav buttons
    //these buttons will be used to navigate through the day cards
    
    let dayCardsNav = document.createElement("div");
    dayCardsNav.className = "dayCardsNav";

    // create day card to select the day
    let dayCard = document.createElement("div");
    dayCard.className = "dayCard";
    dayCard.style.cssText = `display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;`;

    doctorreserveCard.appendChild(header);
    header.appendChild(headerContent);
    
    return doctorreserveCard;
}
//create services card
//this card will contain the doctor's services
function createServices(doctor) {

    var servicesCard = document.createElement("div");
    servicesCard.className = "services";
    servicesCard.style.cssText = `display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0px;`;
    //create services card header
    let cardHeader = document.createElement("h3");
    cardHeader.className = "servicesCardHeader";
    cardHeader.textContent = "الخدمات المقدمة";
    cardHeader.style.cssText = `text-align: right;
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
        margin-right: 10px;`;
    //create services card content
    //small card for each service
    let servicesContent = document.createElement("div");
    servicesContent.className = "servicesContent";
    servicesContent.style.cssText = `display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;
        overflow-x: auto;`;
    //loop through the doctor's services and create a card for each service
    var offers = doctor.clinic.offers;
    offers.forEach(service => {
        //create service card
        let serviceCard = document.createElement("div");
        serviceCard.className = "offerCard";
        serviceCard.style.cssText = `display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;`;
        //create service name
        let serviceName = document.createElement("h4");
        serviceName.className = "serviceName";
        serviceName.textContent = service;
        serviceName.style.cssText = `font-size: 1rem;
            font-weight: bold;
            color: #333;`;
        //append service name to service card
        serviceCard.appendChild(serviceName);
        //append service card to services content
        servicesContent.appendChild(serviceCard);
    });
    //append services content to services card
    servicesCard.appendChild(cardHeader);
    servicesCard.appendChild(servicesContent);

    return servicesCard;
}
//summary card will contain the doctor's summary
function createDoctorInfo(doctor) {
    //get doctor's summary
    var setSummary = doctor.summary
    //create doctor info card
    //this card will contain the doctor's summary
    let doctorInfo = document.createElement("div");
    doctorInfo.className = "doctorInfo";
    doctorInfo.style.cssText = `display: flex;`
    //create summary card container
    var summaryCard = document.createElement("div");
    summaryCard.className = "summaryCard";

    //create summary card header
    let cardHeader = document.createElement("h3");
    cardHeader.className = "summaryCardHeader";
    cardHeader.textContent = "معلومات عن الدكتور";

    //create summary card content
    let summaryContent = document.createElement("p");
    summaryContent.className = "summaryContent";
    summaryContent.textContent = setSummary;
    summaryContent.style.cssText = `text-align: right;
        font-size: 14px;
        color: #555;
        padding-left: 15px;
        padding-right: 15px;`



    doctorInfo.appendChild(summaryCard);
    summaryCard.appendChild(cardHeader);
    summaryCard.appendChild(summaryContent);
    return doctorInfo;
}

//create doctor card
//this card will contain the doctor's name, image, speciality, and rate
function createDoctorCard(doctor) {
    let ratingValue = doctor.rating.overallRate;
    let ratingCount = doctor.rating.numberOfPeopleRating;
    //create doctor card

    let doctorCard = document.createElement("div");
    doctorCard.className = "doctorCard";
    doctorCard.style.cssText = ``
    var doctorImage = document.createElement("div");
    doctorImage.className = "doctorImage";
    doctorImage.style.cssText = `padding: 0;
            display: flex;
        justify-content: center;
        align-items: center;
        `;
    doctorImage.innerHTML = `<img id="doctorCardImg" 
                            src="${doctor.imageURL}" 
                            alt="${doctor.name}"
                            style="width: inherit;
                            height: inherit;
                            border-radius: 50%;
                            background: #e8eef7  center / cover no - repeat;border: none; ">`;


    var doctorName = document.createElement("span");
    doctorName.className = "doctorName";
    doctorName.textContent = doctor.name;
    doctorName.style.cssText = `font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
        margin-top: 10px;
        text-align: right;
        margin-right: 5px;`;



    var doctorSpeciality = document.createElement("div");
    doctorSpeciality.className = "doctorSpeciality";
    doctorSpeciality.style.cssText = `font-size: 1rem;
        color: black;
        margin-bottom: 5px;
        text-align: right;
        margin-right: 5px;`;
    doctorSpeciality.textContent = `${doctor.speciality.GSpeciality} `;
    doctorSpeciality.innerHTML += `<br>`;
    // create highlighted speciality

    let subSpeciality = Array(doctor.speciality.SubSpeciality);
    let specialitytext = document.createElement("span");
    specialitytext.className = "specialityText";
    specialitytext.textContent = " دكتور متخصص في:";
    specialitytext.style.cssText = `font-weight: bold;
        color: #555;
        margin-right: 5px;`;
    doctorSpeciality.appendChild(specialitytext);
    //loop through the sub speciality and create a highlight for each one
    subSpeciality.forEach((subSpec) => {
        var specialityHighlight = document.createElement("a");
        specialityHighlight.className = "specialityHighlight";
        specialityHighlight.href = "#";
        specialityHighlight.textContent = subSpec ;
        specialityHighlight.style.cssText = `background-color: none;
        color: #333;
        padding: 5px;
        border-radius: 5px;
        margin-top: 7px;
        margin-bottom: 5px;
        margin-right: 5px;
        text-decoration: none;`;
        doctorSpeciality.appendChild(specialityHighlight);
    })
    

    //create doctor rate

    var doctorRate = document.createElement("div");
    doctorRate.className = "doctorRate";

    doctorRate.textContent = `التقييم: ${ratingValue}   (${ratingCount} زائر)`;

    doctorCard.appendChild(doctorImage);
    var textInfo = document.createElement("div");
    textInfo.className = "textInfo";
    textInfo.style.cssText = `margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;`;

    textInfo.appendChild(doctorName);
    textInfo.appendChild(doctorSpeciality);
    textInfo.appendChild(doctorRate);
    doctorCard.appendChild(textInfo);

    return doctorCard;
}


