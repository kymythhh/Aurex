document.addEventListener("DOMContentLoaded", () => {

    const carsContainer = document.getElementById("carsContainer");

    // dropdown elements
    const categoryDropdown = document.getElementById("categoryDropdown");
    const priceDropdown = document.getElementById("priceDropdown");

    const categorySelected = categoryDropdown.querySelector(".dropdown-selected span");
    const priceSelected = priceDropdown.querySelector(".dropdown-selected span");

    let selectedCategory = "All";
    let selectedSort = "default";

    // TOGGLE DROPDOWNS
    function setupDropdown(dropdown, onSelect) {

        const selected = dropdown.querySelector(".dropdown-selected");
        const options = dropdown.querySelector(".dropdown-options");

        selected.addEventListener("click", () => {
            dropdown.classList.toggle("open");
        });

        options.querySelectorAll(".dropdown-option").forEach(option => {
            option.addEventListener("click", () => {

                const value = option.getAttribute("data-value");
                const text = option.textContent.trim();

                dropdown.querySelectorAll(".dropdown-option")
                    .forEach(opt => opt.classList.remove("active"));

                option.classList.add("active");

                dropdown.classList.remove("open");

                onSelect(value, text);
            });
        });
    }

    setupDropdown(categoryDropdown, (value, text) => {
        selectedCategory = value;
        categorySelected.textContent = text;
        filterAndSort();
    });

    setupDropdown(priceDropdown, (value, text) => {
        selectedSort = value;
        priceSelected.textContent = text;
        filterAndSort();
    });

    // RENDER CARS
    function renderCars(list) {

        carsContainer.innerHTML = "";

        list.forEach((car, index) => {

            carsContainer.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">

                <a href="car-details.html?id=${index}" class="car-card-link">

                    <div class="car-card">

                        <img src="${car.image}" class="car-img">

                        <div class="card-info">
                            <div class="car-brand">${car.brand}</div>
                            <div class="car-name">${car.name}</div>

                            <div class="d-flex justify-content-between align-items-center">
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

    // FILTER + SORT
    function filterAndSort() {

        let filtered = [...window.cars];

        // CATEGORY FILTER
        if (selectedCategory !== "All") {
            filtered = filtered.filter(car => car.category === selectedCategory);
        }

        // SORT PRICE
        if (selectedSort === "low-high") {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (selectedSort === "high-low") {
            filtered.sort((a, b) => b.price - a.price);
        }

        renderCars(filtered);
    }

    renderCars(window.cars);

    // close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        document.querySelectorAll(".custom-dropdown").forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    });
});


// FIX LOGO ON SCROLL (CORRECTED)
window.addEventListener("scroll", () => {

    const logo = document.querySelector(".logo");

    if (window.scrollY > 50) {
        logo.classList.add("hide-logo");
    } else {
        logo.classList.remove("hide-logo");
    }
});