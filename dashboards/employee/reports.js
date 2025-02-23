document.addEventListener("DOMContentLoaded", function() {
    const reportTableBody = document.getElementById("reportTableBody");
    const searchBar = document.getElementById("searchBar");
    const statusFilter = document.getElementById("statusFilter");

    // Sample Reports Data
    const reports = [
        { farmer: "Ramesh", crop: "Wheat", area: 2, mandal: "Guntur", village: "Kothapalli", status: "Approved" },
        { farmer: "Sita", crop: "Tomato", area: 1.5, mandal: "Nellore", village: "Pallipadu", status: "Rejected" },
        { farmer: "Krishna", crop: "Rice", area: 3, mandal: "Krishna", village: "Vijayawada", status: "Approved" },
        { farmer: "Mahesh", crop: "Corn", area: 4, mandal: "Vizag", village: "Madhurawada", status: "Approved" },
        { farmer: "Pooja", crop: "Sugarcane", area: 2.5, mandal: "Chittoor", village: "Punganur", status: "Rejected" }
    ];

    function loadTable() {
        reportTableBody.innerHTML = "";
        reports.forEach(report => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${report.farmer}</td>
                <td>${report.crop}</td>
                <td>${report.area}</td>
                <td>${report.mandal}</td>
                <td>${report.village}</td>
                <td class="${report.status.toLowerCase()}">${report.status}</td>
            `;
            reportTableBody.appendChild(row);
        });

        updateChart();
    }

    // Search & Filter Functionality
    function filterTable() {
        const searchText = searchBar.value.toLowerCase();
        const selectedStatus = statusFilter.value.toLowerCase();

        reportTableBody.innerHTML = "";
        reports.forEach(report => {
            const reportText = `${report.farmer} ${report.crop} ${report.mandal} ${report.village}`.toLowerCase();
            if ((reportText.includes(searchText)) &&
                (selectedStatus === "all" || report.status.toLowerCase() === selectedStatus)) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${report.farmer}</td>
                    <td>${report.crop}</td>
                    <td>${report.area}</td>
                    <td>${report.mandal}</td>
                    <td>${report.village}</td>
                    <td class="${report.status.toLowerCase()}">${report.status}</td>
                `;
                reportTableBody.appendChild(row);
            }
        });

        updateChart();
    }

    searchBar.addEventListener("input", filterTable);
    statusFilter.addEventListener("change", filterTable);

    // Crop Analysis Chart (Pie Chart)
    function updateChart() {
        const cropCounts = {};
        reports.forEach(report => {
            if (!cropCounts[report.crop]) {
                cropCounts[report.crop] = 0;
            }
            cropCounts[report.crop] += 1;
        });

        const cropLabels = Object.keys(cropCounts);
        const cropData = Object.values(cropCounts);

        const ctx = document.getElementById("cropChart").getContext("2d");
        if (window.cropChartInstance) {
            window.cropChartInstance.destroy(); // Destroy previous chart instance
        }
        window.cropChartInstance = new Chart(ctx, {
            type: "pie",
            data: {
                labels: cropLabels,
                datasets: [{
                    data: cropData,
                    backgroundColor: ["#4caf50", "#ff9800", "#2196f3", "#f44336", "#9c27b0"]
                }]
            }
        });
    }

    loadTable();
});
