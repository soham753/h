// Sample data for the Medical Staff Dashboard
const medicalData = {
    billingOverview: [
        { invoice: "INV001", amount: "$200", status: "Paid" },
        { invoice: "INV002", amount: "$150", status: "Pending" }
    ],
    inventoryStatus: [
        { item: "Syringe", quantity: 150 },
        { item: "Bandage", quantity: 200 },
        { item: "Gloves", quantity: 100 }
    ]
};

// Load Medical Staff Dashboard
window.onload = function() {
    // Load Billing Overview
    const billingUl = document.getElementById("billingOverview");
    medicalData.billingOverview.forEach(billing => {
        const li = document.createElement("li");
        li.textContent = `Invoice: ${billing.invoice}, Amount: ${billing.amount}, Status: ${billing.status}`;
        billingUl.appendChild(li);
    });

    // Load Inventory Status
    const inventoryUl = document.getElementById("inventoryStatus");
    medicalData.inventoryStatus.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Item: ${item.item}, Quantity: ${item.quantity}`;
        inventoryUl.appendChild(li);
    });
};
