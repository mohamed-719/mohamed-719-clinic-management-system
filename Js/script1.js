/*         * This script sets the page title dynamically.
         * It is used to ensure that the title is consistent across different pages.
         *the title is set to "دكتور" for the Doctor Reserve page.
         * after json data is loaded, the title will be set to "دكتور".
         */
let windowWidth = window.innerWidth;
function availableWidth() {
    if (windowWidth < 768) {
        //if the window width is less than 768px, then the page is in mobile view
        document.querySelector(".doctorCard").style.cssText = `width: 100%;`;
        document.querySelector(".doctorInfo").style.cssText = `width: 100%;`;
        document.querySelector(".services").style.cssText = `width: 100%;`;
        document.querySelector(".doctorSchedule").style.cssText = `width: 100%;`;
    }
}
function schedule(DoctorD)
{
    //this function checks if the doctor has a schedule

    var workingDays=DoctorD.schedule.workingDays
    var workingHours=DoctorD.schedule.workingHours
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
function implementData(d) {
    var jsonData = JSON.parse(d);
    console.log(jsonData);
    var dData = jsonData.doctors[0];
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
    header.style.cssText = `display: block;
        text-align: center;
        background-color:red;
        color: white;
        border-radius: 10px;
        border: 1px solid red;
        width: 100%;`

    //create header content
    //this content will contain the doctor's name
    let headerContent = document.createElement("h3");
    headerContent.className = "reserveHeaderContent";
    headerContent.textContent = "حجز موعد مع الدكتور "+" "+doctor.name;
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

    doctorreserveCard.appendChild(header);
    header.appendChild(headerContent);
    doctorreserveCard.appendChild(doctorReserveForm);
    return doctorreserveCard;
}
//create services card
//this card will contain the doctor's services
function createServices(doctor) {

    var servicesCard = document.createElement("div");
    servicesCard.className = ".services";
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
                            alt="${doctor.name}
                            "style="width: 100px;height: 100px;border-radius: 50%;background: #e8eef7  center / cover no - repeat;border: none; ">`;


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
        color: #666;
        margin-bottom: 5px;
        text-align: right;
        margin-right: 5px;`;
    doctorSpeciality.textContent = doctor.speciality.GSpeciality;

    var doctorRate = document.createElement("div");
    doctorRate.className = "doctorRate";

    doctorRate.textContent = `التقييم: ${ratingValue}   (${ratingCount} زائر)`;

    doctorCard.appendChild(doctorImage);
    var textInfo = document.createElement("div");
    textInfo.className = "textInfo";
    textInfo.style.cssText = `margin-right: 10px;`;
    textInfo.appendChild(doctorName);
    textInfo.appendChild(doctorSpeciality);
    textInfo.appendChild(doctorRate);
    doctorCard.appendChild(textInfo);

    return doctorCard;
}


