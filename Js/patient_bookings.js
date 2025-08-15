// Seed Data - بيضيف بيانات تجريبية أول مرة
function seedData() {
    var bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length === 0) {
        bookings = [
            {
                bookingId: "B001",
                name: "Dr. Ahmed Ali",
                rating: 4,
                img: "./images/woman.jpg",
                price: "250 EGP",
                phone: "01012345678",
                datetime: "2025-08-20 10:00 AM",
                branch: "Cairo - Nasr City",
                status: "Confirmed"
            },
            {
                bookingId: "B002",
                name: "Dr. Sara Mohamed",
                rating: 5,
                img: "./images/man2.jpg",
                price: "300 EGP",
                phone: "01098765432",
                datetime: "2025-08-22 2:00 PM",
                branch: "Giza - Dokki",
                status: "Reserved"
            },
            {
                bookingId: "B003",
                name: "Dr. Hossam Youssef",
                rating: 3,
                img: "./images/man.jpg",
                price: "200 EGP",
                phone: "01123456789",
                datetime: "2025-08-25 6:00 PM",
                branch: "Alexandria - Smouha",
                status: "Confirmed"
            }
        ];

        localStorage.setItem("bookings", JSON.stringify(bookings));
    }
}


// إلغاء الحجز
function cancelBooking(bookingId) {
    var bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings = bookings.map(function(b) {
        if (b.bookingId === bookingId) {
            b.status = "Canceled";
        }
        return b;
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    loadBookings();
}

// عرض الحجوزات
function loadBookings() {
    var bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    var container = document.getElementById("bookings-container");
    container.innerHTML = "";

    if (bookings.length === 0) {
        container.innerHTML = '<div class="no-bookings" style="text-align:center; padding:20px;"><img src="" style="width:80px;"><p>You have no bookings yet</p></div>';
        return;
    }

    bookings.forEach(function(b) {
        var card = document.createElement("div");
        card.className = "booking-card";

        var statusClass = b.status.toLowerCase().replace(" ", "");
        var stars = "★".repeat(b.rating) + "☆".repeat(5 - b.rating);

        var actionButtons = "";
        if (b.status !== "Canceled") {
            actionButtons = `<button class="cancel-btn" onclick='cancelBooking("${b.bookingId}")'>Cancel</button>`;
        }

        card.innerHTML = `
            <img class="booking-img" src="${b.img}" alt="Booking Image">
            <div class="booking-info">
                <h3>${b.name}</h3>
                <div class="rating">${stars}</div>
                <p class="price">${b.price}</p>
                <p class="phone">📞 ${b.phone}</p>
                <p><strong>Date:</strong> ${b.datetime}</p>
                <p><strong>Branch:</strong> ${b.branch}</p>
                <span class="status ${statusClass}">${b.status}</span>
                <div class="actions">
                    ${actionButtons}
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// تشغيل
seedData();
loadBookings();
