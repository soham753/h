// Sample data for the Lab Dashboard
const labData = {
    pendingTests: [
        { testName: "Blood Test", patient: "John Doe", dueDate: "2024-10-04" },
        { testName: "X-Ray", patient: "Alice Johnson", dueDate: "2024-10-05" }
    ],
    deliveredTests: [
        { testName: "Urine Test", patient: "Michael Brown", deliveryDate: "2024-10-02" },
        { testName: "MRI", patient: "Emily Davis", deliveryDate: "2024-10-03" }
    ]
};

// Load Lab Dashboard
window.onload = function() {
    // Load Pending Tests
    const pendingUl = document.getElementById("pendingTests");
    labData.pendingTests.forEach(test => {
        const li = document.createElement("li");
        li.textContent = `Test: ${test.testName}, Patient: ${test.patient}, Due: ${test.dueDate}`;
        pendingUl.appendChild(li);
    });

    // Load Delivered Tests
    const deliveredUl = document.getElementById("deliveredTests");
    labData.deliveredTests.forEach(test => {
        const li = document.createElement("li");
        li.textContent = `Test: ${test.testName}, Patient: ${test.patient}, Delivered: ${test.deliveryDate}`;
        deliveredUl.appendChild(li);
    });
};
