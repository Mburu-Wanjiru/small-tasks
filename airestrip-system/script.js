document.addEventListener("DOMContentLoaded", function () {
    const runwayListContainer = document.getElementById("runwayList");

    const runways = [
        { id: 1, length: 3000, width: 50 },
        { id: 2, length: 3500, width: 60 },
        // Add more runways as needed
    ];

    function displayRunways() {
        runwayListContainer.innerHTML = ""; // Clear existing content

        runways.forEach(runway => {
            const runwayElement = document.createElement("div");
            runwayElement.classList.add("runway");
            runwayElement.innerHTML = `<strong>Runway ${runway.id}</strong><br>Length: ${runway.length}, Width: ${runway.width}`;
            runwayListContainer.appendChild(runwayElement);
        });
    }

    displayRunways();
});
