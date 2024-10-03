// Sample data for the Hospital Admin Dashboard
const hospitalData = {
    staff: [
        { name: "Dr. Smith", role: "Doctor", status: "Active" },
        { name: "Alice Johnson", role: "Nurse", status: "Active" },
        { name: "Michael Brown", role: "Receptionist", status: "Inactive" }
    ],
    inventory: [
        { item: "Syringe", quantity: 150 },
        { item: "Bandage", quantity: 200 },
        { item: "Gloves", quantity: 100 }
    ]
};

// Load Hospital Admin Dashboard
window.onload = function() {
    // Load Staff Overview
    const staffUl = document.getElementById("staffList");
    hospitalData.staff.forEach(member => {
        const li = document.createElement("li");
        li.textContent = `Name: ${member.name}, Role: ${member.role}, Status: ${member.status}`;
        staffUl.appendChild(li);
    });

    // Load Inventory Summary
    const inventoryUl = document.getElementById("inventorySummary");
    hospitalData.inventory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Item: ${item.item}, Quantity: ${item.quantity}`;
        inventoryUl.appendChild(li);
    });
};

