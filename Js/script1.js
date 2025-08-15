/*         * This script sets the page title dynamically.
         * It is used to ensure that the title is consistent across different pages.
         *the title is set to "دكتور" for the Doctor Reserve page.
         * after json data is loaded, the title will be set to "دكتور".
         */
let windowWidth = window.innerWidth;

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
function implementData(d) {
    var jsonData = JSON.parse(d);
    console.log(jsonData);
    var dData = jsonData.doctors[0];
    //set page tilte
    document.title = dData.name;

    //create doctor card and append it to the doctordataBox
    var doctorDataBox = document.querySelector(".doctordataBox");
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

}
function createDoctorReserve(doctor) {
    //create header for doctor reserve form
    let doctorreserveCard = document.createElement("div");
    doctorreserveCard.className = "reservationForm";
    let header = document.querySelector(".reservationForm");
    header.innerHTML = `<h2 style ="margin-top: 0px;
        text-align: right;
        background-color:red;
        color: white;
        border-radius: 8px;
        font-size: 14px;">حجز موعد مع الدكتور ${doctor.name}</h2>`;
    header.style.cssText = ``;
    //create doctor reserve form
    let doctorReserveForm = document.createElement("form");
    doctorReserveForm.className = "doctorReserveForm";
    let doctorREserve = document.querySelector(".doctorSchedule");
    var scheduleCard = document.createElement("div");
    return doctorREserve;
}

function createServices(doctor) {

    var servicesCard = document.createElement("div");
    servicesCard.className = ".services";
    return servicesCard;
}

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


function createDoctorCard(doctor) {
    let ratingValue = doctor.rating.overallRate;
    let ratingCount = doctor.rating.numberOfPeopleRating;
    //create doctor card

    let doctorCard = document.createElement("div");
    doctorCard.className = "doctorCard";
    doctorCard.style.cssText = `
        `
    var doctorImage = document.createElement("div");
    doctorImage.className = "doctorImage";
    doctorImage.style.cssText = `padding: 0;
            display: flex;
        justify-content: center;
        align-items: center;
        `;
    doctorImage.innerHTML = `<img id="doctorCardImg" 
                            src="${doctor.imageURL}" 
                            alt="${doctor.name}
                            "style="width: 100px;height: 100px;border-radius: 50%;background: #e8eef7  center / cover no - repeat;border: none; ">`;


    var doctorName = document.createElement("span");
    doctorName.className = "doctorName";
    doctorName.textContent = doctor.name;
    doctorName.style.cssText = `font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;`;



    var doctorSpeciality = document.createElement("div");
    doctorSpeciality.className = "doctorSpeciality";
    doctorSpeciality.textContent = doctor.speciality.GSpeciality;

    var doctorRate = document.createElement("div");
    doctorRate.className = "doctorRate";

    doctorRate.textContent = `التقييم: ${ratingValue}   (${ratingCount} زائر)`;

    doctorCard.appendChild(doctorImage);
    var textInfo = document.createElement("div");
    textInfo.className = "textInfo";
    textInfo.appendChild(doctorName);
    textInfo.appendChild(doctorSpeciality);
    textInfo.appendChild(doctorRate);
    doctorCard.appendChild(textInfo);

    return doctorCard;
}


