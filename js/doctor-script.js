// Sample data for the Doctor Dashboard
const doctorData = {
    name: "Dr. Smith",
    appointments: [
        { date: "2024-10-05", patient: "John Doe" },
        { date: "2024-10-06", patient: "Alice Johnson" }
    ],
    patients: [
        { name: "John Doe", recordLink: "#", healthStatus: "Good" },
        { name: "Alice Johnson", recordLink: "#", healthStatus: "Stable" }
    ]
};

// Load Doctor Dashboard
window.onload = function() {
    document.getElementById("doctorName").innerText = doctorData.name;

    // Load Appointments
    const appointmentUl = document.getElementById("doctorAppointments");
    doctorData.appointments.forEach(appointment => {
        const li = document.createElement("li");
        li.textContent = `Date: ${appointment.date}, Patient: ${appointment.patient}`;
        appointmentUl.appendChild(li);
    });

    // Load Patient Health Records
    const patientUl = document.getElementById("doctorPatientRecords");
    doctorData.patients.forEach(patient => {
        const li = document.createElement("li");
        li.innerHTML = `Patient: ${patient.name} - <a href="${patient.recordLink}">View Record</a> (Status: ${patient.healthStatus})`;
        patientUl.appendChild(li);
    });
};
