document.addEventListener("DOMContentLoaded", () => {

    const carsContainer = document.getElementById("carsContainer");

    const categoryDropdown = document.getElementById("categoryDropdown");
    const priceDropdown = document.getElementById("priceDropdown");

    const categorySelected = categoryDropdown.querySelector(".dropdown-selected span");
    const priceSelected = priceDropdown.querySelector(".dropdown-selected span");

    const rawSearchCategory = localStorage.getItem('search_category');
    let mappedCategory = "All";

    if (rawSearchCategory) {
        const searchLower = rawSearchCategory.toLowerCase().trim();
        if (searchLower === "sports") mappedCategory = "Sports Car";
        else if (searchLower === "suv") mappedCategory = "Luxury SUV";
        else if (searchLower === "luxury") mappedCategory = "Luxury Van";
        else if (searchLower === "sedan" || searchLower === "classic") mappedCategory = "Classic Car";
        else if (searchLower === "limousine") mappedCategory = "Limousine";
    }

    let selectedCategory = mappedCategory;
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

        const currentTargetValue = dropdown === categoryDropdown ? selectedCategory : selectedSort;
        
        dropdown.querySelectorAll(".dropdown-option").forEach(opt => opt.classList.remove("active"));

        const preSelectedOption = options.querySelector(`.dropdown-option[data-value="${dropdown === categoryDropdown ? selectedCategory : selectedSort}"]`);
        if (preSelectedOption) {
            preSelectedOption.classList.add("active");
            dropdown.querySelector(".dropdown-selected span").textContent = preSelectedOption.textContent.trim();
        }
    }

    setupDropdown(categoryDropdown, (value, text) => {
        selectedCategory = value === "" ? "All" : value;
        categorySelected.textContent = text;
        filterAndSort();
    });

    setupDropdown(priceDropdown, (value, text) => {
        selectedSort = value;
        priceSelected.textContent = text;
        filterAndSort();
    });

    // RENDER CARS
    // RENDER CARS (UPDATED WITH LOCALSTORAGE CLICK TRACKING)
    function renderCars(list) {
        carsContainer.innerHTML = "";

        list.forEach((car) => {
            // Create a wrapper column div
            const colDiv = document.createElement("div");
            colDiv.className = "col-12 col-sm-6 col-lg-4 col-xl-3";

            // Build the card internal HTML structure
            colDiv.innerHTML = `
                <a href="car-details.html?id=${car.id}" class="car-card-link" data-id="${car.id}">
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
            `;

            // Intercept click to save selection status explicitly to localStorage
            const linkElement = colDiv.querySelector(".car-card-link");
            linkElement.addEventListener("click", (e) => {
                // Prevent premature standard navigation before writing data
                e.preventDefault(); 
                
                const chosenId = linkElement.getAttribute("data-id");
                localStorage.setItem('selectedCarId', chosenId);
                
                // Now safely proceed to the detail page layout
                window.location.href = linkElement.getAttribute("href");
            });

            carsContainer.appendChild(colDiv);
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

    filterAndSort();

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