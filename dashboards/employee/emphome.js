document.addEventListener("DOMContentLoaded", function () {
    // Set employee name dynamically
    document.getElementById("employeeName").textContent = "Rajesh Kumar";

    // Example data for pending verifications
    const pendingTasks = [
        { farmer: "Ramesh", crop: "Wheat", land: "2", mandal: "Guntur", village: "Kothapalli", status: "Pending" },
        { farmer: "Suresh", crop: "Tomato", land: "1.5", mandal: "Nellore", village: "Pallipadu", status: "Pending" },
        { farmer: "Mahesh", crop: "Rice", land: "3", mandal: "Krishna", village: "Machilipatnam", status: "Pending" }
    ];

    // Load pending verifications into the table
    const tasksTable = document.getElementById("tasksTable");
    pendingTasks.forEach(task => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.farmer}</td>
            <td>${task.crop}</td>
            <td>${task.land}</td>
            <td>${task.mandal}</td>
            <td>${task.village}</td>
            <td class="pending">${task.status}</td>
            <td><button class="verify-btn">Verify</button></td>
        `;
        tasksTable.appendChild(row);
    });

    // Example data for recent verifications
    const recentVerifications = [
        "Approved Wheat for Ramesh (Guntur)",
        "Rejected Corn for Suresh (Warangal)",
        "Approved Rice for Mahesh (Krishna)"
    ];

    // Load recent verifications
    const recentList = document.getElementById("recentList");
    recentVerifications.forEach(activity => {
        const listItem = document.createElement("li");
        listItem.textContent = activity;
        recentList.appendChild(listItem);
    });
});
