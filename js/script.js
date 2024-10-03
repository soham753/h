// Sample data for demonstration
let sampleAppointments = [
    { id: 1, date: '2024-10-05', time: '10:00 AM', doctor: 'Dr. Smith' },
    { id: 2, date: '2024-10-10', time: '02:00 PM', doctor: 'Dr. Johnson' }
];

let sampleHealthRecords = [
    { date: '2024-10-01', bp: '120/80', sugar: '90', heartRate: '72' },
    { date: '2024-09-28', bp: '118/76', sugar: '88', heartRate: '75' }
];

let sampleInventory = [
    { item: 'Aspirin', quantity: 100 },
    { item: 'Ibuprofen', quantity: 50 }
];

let samplePrescriptions = [];

// Login Function
function login() {
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;

    // Redirect based on role
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);

    window.location.href = "dashboard.html";
}

// On Dashboard Load
window.onload = function() {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    document.getElementById("userName").innerText = username;
    document.getElementById("userRole").innerText = role;

    // Show data based on user role
    if (role === "patient") {
        document.getElementById("appointment-list").style.display = "block";
        document.getElementById("health-records").style.display = "block";
        loadAppointments();
        loadHealthRecords();
    } else if (role === "hospital") {
        document.getElementById("inventory-summary").style.display = "block";
        loadInventory();
    } else if (role === "doctor") {
        document.getElementById("prescription-history").style.display = "block";
        loadPrescriptions();
    }

    // Basic Analytics
    document.getElementById("totalAppointments").innerText = sampleAppointments.length;
    document.getElementById("totalPrescriptions").innerText = samplePrescriptions.length;
}

// Load Appointments
function loadAppointments() {
    const appointmentUl = document.getElementById("appointments");
    appointmentUl.innerHTML = ''; // Clear existing appointments
    sampleAppointments.forEach(appointment => {
        const li = document.createElement("li");
        li.textContent = `Date: ${appointment.date}, Time: ${appointment.time}, Doctor: ${appointment.doctor}`;
        
        // Cancel button for each appointment
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.onclick = () => cancelAppointment(appointment.id);
        
        li.appendChild(cancelBtn);
        appointmentUl.appendChild(li);
    });
}

// Cancel Appointment
function cancelAppointment(id) {
    sampleAppointments = sampleAppointments.filter(appointment => appointment.id !== id);
    loadAppointments();
    alert("Appointment canceled successfully!");
}

// Load Health Records
function loadHealthRecords() {
    const healthUl = document.getElementById("healthRecords");
    healthUl.innerHTML = ''; // Clear existing health records
    sampleHealthRecords.forEach(record => {
        const li = document.createElement("li");
        li.textContent = `Date: ${record.date}, BP: ${record.bp}, Sugar: ${record.sugar}, Heart Rate: ${record.heartRate}`;
        healthUl.appendChild(li);
    });
}

// Load Inventory
function loadInventory() {
    const inventoryUl = document.getElementById("inventorySummary");
    inventoryUl.innerHTML = ''; // Clear existing inventory
    sampleInventory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Item: ${item.item}, Quantity: ${item.quantity}`;
        inventoryUl.appendChild(li);
    });
}

// Load Prescriptions
function loadPrescriptions() {
    const prescriptionUl = document.getElementById("prescriptionHistory");
    prescriptionUl.innerHTML = ''; // Clear existing prescriptions
    samplePrescriptions.forEach((prescription, index) => {
        const li = document.createElement("li");
        li.textContent = `Patient: ${prescription.patientName}, Medicine: ${prescription.medicine}, Dosage: ${prescription.dosage}`;
        
        // Delete button for each prescription
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deletePrescription(index);
        
        li.appendChild(deleteBtn);
        prescriptionUl.appendChild(li);
    });
}

// Save Prescription Function
function savePrescription() {
    const patientName = document.getElementById("patientName").value;
    const medicine = document.getElementById("medicine").value;
    const dosage = document.getElementById("dosage").value;

    if (patientName && medicine && dosage) {
        alert("Prescription saved successfully!");
        samplePrescriptions.push({ patientName, medicine, dosage });
        loadPrescriptions();

        // Clear form fields
        document.getElementById("patientName").value = '';
        document.getElementById("medicine").value = '';
        document.getElementById("dosage").value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

// Delete Prescription
function deletePrescription(index) {
    samplePrescriptions.splice(index, 1); // Remove the prescription from the array
    loadPrescriptions(); // Refresh the list
    alert("Prescription deleted successfully!");
}

// Search Appointments
function searchAppointments() {
    const searchTerm = document.getElementById("appointmentSearch").value.toLowerCase();
    const appointmentUl = document.getElementById("appointments");
    appointmentUl.innerHTML = '';
    const filteredAppointments = sampleAppointments.filter(appointment => 
        appointment.date.toLowerCase().includes(searchTerm) || 
        appointment.doctor.toLowerCase().includes(searchTerm)
    );
    filteredAppointments.forEach(appointment => {
        const li = document.createElement("li");
        li.textContent = `Date: ${appointment.date}, Time: ${appointment.time}, Doctor: ${appointment.doctor}`;
        
        // Cancel button for each appointment
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.onclick = () => cancelAppointment(appointment.id);
        
        li.appendChild(cancelBtn);
        appointmentUl.appendChild(li);
    });
}

// Search Inventory
function searchInventory() {
    const searchTerm = document.getElementById("inventorySearch").value.toLowerCase();
    const inventoryUl = document.getElementById("inventorySummary");
    inventoryUl.innerHTML = '';
    const filteredInventory = sampleInventory.filter(item => 
        item.item.toLowerCase().includes(searchTerm)
    );
    filteredInventory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Item: ${item.item}, Quantity: ${item.quantity}`;
        inventoryUl.appendChild(li);
    });
}

// Track Health Data Function (for Patients)
function trackHealth() {
    const bp = document.getElementById("bp").value;
    const sugar = document.getElementById("sugar").value;
    const heartRate = document.getElementById("heartRate").value;

    if (bp && sugar && heartRate) {
        alert("Health data recorded successfully!");

        // For demonstration, add new data to health records
        sampleHealthRecords.push({ date: new Date().toISOString().split('T')[0], bp, sugar, heartRate });
        loadHealthRecords(); // Refresh the health records list

        // Clear form fields
        document.getElementById("bp").value = '';
        document.getElementById("sugar").value = '';
        document.getElementById("heartRate").value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

// Add Inventory Item Function (for Hospital Admin)
function addInventoryItem() {
    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value;

    if (item && quantity) {
        alert("Inventory item added successfully!");
        sampleInventory.push({ item, quantity });
        loadInventory(); // Refresh the inventory list

        // Clear form fields
        document.getElementById("item").value = '';
        document.getElementById("quantity").value = '';
    } else {
        alert("Please fill in all fields.");
    }
}
