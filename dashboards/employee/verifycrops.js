document.addEventListener("DOMContentLoaded", function() {
    const cropTableBody = document.getElementById("cropTableBody");
    const searchBar = document.getElementById("searchBar");
    const statusFilter = document.getElementById("statusFilter");

    // Sample crop verification data
    const crops = [
        { farmer: "Ramesh", crop: "Wheat", area: 2, mandal: "Guntur", village: "Kothapalli", status: "Pending" },
        { farmer: "Sita", crop: "Tomato", area: 1.5, mandal: "Nellore", village: "Pallipadu", status: "Pending" },
        { farmer: "Krishna", crop: "Rice", area: 3, mandal: "Krishna", village: "Vijayawada", status: "Approved" },
        { farmer: "Mahesh", crop: "Corn", area: 4, mandal: "Vizag", village: "Madhurawada", status: "Rejected" }
    ];

    function loadTable() {
        cropTableBody.innerHTML = "";
        crops.forEach((crop, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${crop.farmer}</td>
                <td>${crop.crop}</td>
                <td>${crop.area}</td>
                <td>${crop.mandal}</td>
                <td>${crop.village}</td>
                <td class="${crop.status.toLowerCase()}">${crop.status}</td>
                <td>
                    ${crop.status === "Pending" ? `
                        <button class="approve" onclick="updateStatus(${index}, 'Approved')">Approve</button>
                        <button class="reject" onclick="updateStatus(${index}, 'Rejected')">Reject</button>
                    ` : '✅'}
                </td>
            `;
            cropTableBody.appendChild(row);
        });
    }

    function updateStatus(index, newStatus) {
        crops[index].status = newStatus;
        loadTable();
    }

    // Search & Filter Functionality
    function filterTable() {
        const searchText = searchBar.value.toLowerCase();
        const selectedStatus = statusFilter.value.toLowerCase();

        cropTableBody.innerHTML = "";
        crops.forEach((crop, index) => {
            const cropText = `${crop.farmer} ${crop.crop} ${crop.mandal} ${crop.village}`.toLowerCase();
            if ((cropText.includes(searchText)) &&
                (selectedStatus === "all" || crop.status.toLowerCase() === selectedStatus)) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${crop.farmer}</td>
                    <td>${crop.crop}</td>
                    <td>${crop.area}</td>
                    <td>${crop.mandal}</td>
                    <td>${crop.village}</td>
                    <td class="${crop.status.toLowerCase()}">${crop.status}</td>
                    <td>
                        ${crop.status === "Pending" ? `
                            <button class="approve" onclick="updateStatus(${index}, 'Approved')">Approve</button>
                            <button class="reject" onclick="updateStatus(${index}, 'Rejected')">Reject</button>
                        ` : '✅'}
                    </td>
                `;
                cropTableBody.appendChild(row);
            }
        });
    }

    searchBar.addEventListener("input", filterTable);
    statusFilter.addEventListener("change", filterTable);

    loadTable();
});
