document.addEventListener("DOMContentLoaded", function () {
    const present = document.getElementById("present");
    const absent = document.getElementById("absent");
    const rate = document.getElementById("rate");

    function updateAttendance(presentDays, absentDays) {
        const totalDays = presentDays + absentDays;
        const percentage = ((presentDays / totalDays) * 100).toFixed(2);
        rate.textContent = percentage + "%";
    }

    updateAttendance(parseInt(present.textContent), parseInt(absent.textContent));

    // Interactive Circulars List
    const circulars = [
        "Admission Circular 2025-26",
        "Education and Career Guidance Fair",
        "Stationery List 2025-26"
    ];

    const circularList = document.querySelector("#circulars ul");
    const addCircularBtn = document.createElement("button");
    addCircularBtn.textContent = "Add Circular";
    addCircularBtn.style.marginTop = "10px";
    document.getElementById("circulars").appendChild(addCircularBtn);

    addCircularBtn.addEventListener("click", function () {
        const newCircular = prompt("Enter new circular:");
        if (newCircular) {
            circulars.push(newCircular);
            const li = document.createElement("li");
            li.textContent = newCircular;
            circularList.appendChild(li);
        }
    });

    // Toggle Assignments Section
    const assignmentsSection = document.getElementById("assignments");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Assignments";
    toggleBtn.style.marginTop = "10px";
    assignmentsSection.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        if (assignmentsSection.style.display === "none") {
            assignmentsSection.style.display = "block";
        } else {
            assignmentsSection.style.display = "none";
        }
    });

    // Dynamic Attendance Update
    const updateAttendanceBtn = document.createElement("button");
    updateAttendanceBtn.textContent = "Update Attendance";
    updateAttendanceBtn.style.marginTop = "10px";
    document.getElementById("attendance").appendChild(updateAttendanceBtn);

    updateAttendanceBtn.addEventListener("click", function () {
        const newPresent = parseInt(prompt("Enter new present days:", present.textContent));
        const newAbsent = parseInt(prompt("Enter new absent days:", absent.textContent));
        if (!isNaN(newPresent) && !isNaN(newAbsent)) {
            present.textContent = newPresent;
            absent.textContent = newAbsent;
            updateAttendance(newPresent, newAbsent);
        } else {
            alert("Please enter valid numbers.");
        }
    });

    // Dark Mode Toggle
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Toggle Dark Mode";
    darkModeBtn.style.marginTop = "10px";
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
