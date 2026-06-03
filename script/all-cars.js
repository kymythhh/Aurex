document.addEventListener("DOMContentLoaded", () => {

    const carsContainer = document.getElementById("carsContainer");
    const categoryFilter = document.getElementById("categoryFilter");
    const priceSort = document.getElementById("priceSort");

    function renderCars(list) {
        carsContainer.innerHTML = "";

        list.forEach((car, index) => {
            carsContainer.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">

                <a href="car-details.html?id=${index}" class="car-card-link">

                    <div class="car-card">

                        <img src="${car.image}" class="car-img">

                        <div class="card-info">
                            <h6 class="car-brand">${car.brand}</h6>
                            <h5 class="car-name">${car.name}</h5>

                            <div class="d-flex justify-content-between">
                                <span>⭐ ${car.rating}</span>
                                <span class="price">$${car.price}/day</span>
                            </div>
                        </div>

                        <div class="hover-overlay">
                            <span>View Details</span>
                        </div>

                    </div>

                </a>

            </div>`;
        });
    }

    function filterAndSort() {

        let filtered = [...window.cars];

        if (categoryFilter.value !== "All") {
            filtered = filtered.filter(c => c.category === categoryFilter.value);
        }

        if (priceSort.value === "low-high") {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (priceSort.value === "high-low") {
            filtered.sort((a, b) => b.price - a.price);
        }

        renderCars(filtered);
    }

    categoryFilter.addEventListener("change", filterAndSort);
    priceSort.addEventListener("change", filterAndSort);

    renderCars(window.cars);
});