// Sample data for the Patient Dashboard
const patientData = {
    name: "John Doe",
    appointments: [
        { date: "2024-10-05", doctor: "Dr. Smith" },
        { date: "2024-10-10", doctor: "Dr. Johnson" }
    ],
    healthRecords: [
        { date: "2024-10-01", bp: "120/80", sugar: "90", heartRate: "72" },
        { date: "2024-09-28", bp: "118/76", sugar: "88", heartRate: "75" }
    ],
    prescriptions: [
        { medicine: "Aspirin", dosage: "1 tablet daily" },
        { medicine: "Ibuprofen", dosage: "1 tablet as needed" }
    ]
};

// Load Patient Dashboard
window.onload = function() {
    document.getElementById("patientName").innerText = patientData.name;

    // Load Appointments
    const appointmentUl = document.getElementById("patientAppointments");
    patientData.appointments.forEach(appointment => {
        const li = document.createElement("li");
        li.textContent = `Date: ${appointment.date}, Doctor: ${appointment.doctor}`;
        appointmentUl.appendChild(li);
    });

    // Load Health Records
    const healthUl = document.getElementById("patientHealthRecords");
    patientData.healthRecords.forEach(record => {
        const li = document.createElement("li");
        li.textContent = `Date: ${record.date}, BP: ${record.bp}, Sugar: ${record.sugar}, Heart Rate: ${record.heartRate}`;
        healthUl.appendChild(li);
    });

    // Load Prescriptions
    const prescriptionUl = document.getElementById("patientPrescriptions");
    patientData.prescriptions.forEach(prescription => {
        const li = document.createElement("li");
        li.textContent = `Medicine: ${prescription.medicine}, Dosage: ${prescription.dosage}`;
        prescriptionUl.appendChild(li);
    });
};
