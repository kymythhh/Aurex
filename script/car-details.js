document.addEventListener("DOMContentLoaded", () => {
    // 1. Retrieve the explicit ID saved from your showcase screen
    const savedCarId = localStorage.getItem('selectedCarId');
    
    if (typeof window.cars === 'undefined' || !window.cars || window.cars.length === 0) {
        console.error("The cars.js data script is missing or not loaded yet.");
        document.querySelector(".container").innerHTML = `
            <div class="text-center py-5">
                <h3 class="text-white">Profile Data Missing</h3>
            </div>
        `;
        return;
    }

    let selectedCar = null;

    // Direct ID Parsing validation lookup
    if (savedCarId !== null && savedCarId !== undefined) {
        const targetId = parseInt(savedCarId, 10);
        selectedCar = window.cars.find(item => item.id === targetId);
    }

    // Strict safety fallback ONLY if local storage retrieval yields zero results
    if (!selectedCar) {
        console.warn("Requested Car ID not found in database. Defaulting to index 0.");
        selectedCar = window.cars[0];
    }

    console.log("Details layout loaded for:", selectedCar.name, "with accurate ID:", selectedCar.id);

    // 2. Global Core Setup Assignments (Consolidated targeting selectedCar)
    document.title = `Aurex - ${selectedCar.name}`;
    
    const breadcrumbEl = document.getElementById("breadcrumb-car");
    if (breadcrumbEl) breadcrumbEl.innerText = selectedCar.name;

    const categoryEl = document.getElementById("carCategory");
    if (categoryEl) categoryEl.innerText = selectedCar.category.toUpperCase();

    const ratingEl = document.getElementById("carRating");
    if (ratingEl) ratingEl.innerText = selectedCar.rating.toFixed(1);

    const nameEl = document.getElementById("carName");
    if (nameEl) nameEl.innerText = selectedCar.name;

    const priceEl = document.getElementById("carPrice");
    if (priceEl) priceEl.innerText = `$${selectedCar.price}`;

    const descEl = document.getElementById("carDescription");
    if (descEl) descEl.innerText = selectedCar.description;

    // 3. Set primary showcase layout image gallery
    const mainImage = document.getElementById("mainCarImage");
    const thumbnailGallery = document.getElementById("thumbnailGallery");

    const galleryImages = selectedCar.gallery && selectedCar.gallery.length
        ? selectedCar.gallery
        : [selectedCar.image];

    if (mainImage) mainImage.src = galleryImages[0];

    if (thumbnailGallery) {
        thumbnailGallery.innerHTML = "";
        galleryImages.forEach((image, index) => {
            const thumb = document.createElement("img");
            thumb.src = image;

            if (index === 0) {
                thumb.classList.add("active");
            }

            thumb.addEventListener("click", () => {
                if (mainImage) mainImage.src = image;
                document.querySelectorAll("#thumbnailGallery img")
                    .forEach(img => img.classList.remove("active"));
                thumb.classList.add("active");
            });

            thumbnailGallery.appendChild(thumb);
        });
    }

    // 4. Component Specification Block Processing
    const uniqueCarPhotosPool = (selectedCar.gallery && Array.isArray(selectedCar.gallery)) 
        ? selectedCar.gallery.filter(photo => photo !== selectedCar.image)
        : [];

    const usedImagesTracker = [];

    function findGalleryImageByKeyword(keywords) {
        if (!uniqueCarPhotosPool.length) return null;
        return uniqueCarPhotosPool.find(photo => {
            const lowerPath = photo.toLowerCase();
            const matchesKeyword = keywords.some(keyword => lowerPath.includes(keyword));
            return matchesKeyword && !usedImagesTracker.includes(photo);
        });
    }

    function processImageOrCollapse(specifiedImage, fallbackKeywords, elementId, parentCardId) {
        const imgElement = document.getElementById(elementId);
        const cardElement = document.getElementById(parentCardId);
        
        if (!imgElement || !cardElement) return;

        if (specifiedImage && specifiedImage.trim() !== "") {
            imgElement.src = specifiedImage;
            usedImagesTracker.push(specifiedImage);
            return;
        }

        let matchedPhoto = findGalleryImageByKeyword(fallbackKeywords);

        if (!matchedPhoto) {
            matchedPhoto = uniqueCarPhotosPool.find(photo => !usedImagesTracker.includes(photo));
        }

        if (matchedPhoto) {
            imgElement.src = matchedPhoto;
            usedImagesTracker.push(matchedPhoto);
            return;
        }

        imgElement.removeAttribute('src'); 
        cardElement.classList.add("no-image");
    }

    processImageOrCollapse(selectedCar.specifications?.powertrain?.image, ["engine", "front"], "powertrainImage", "card-powertrain");
    processImageOrCollapse(selectedCar.specifications?.cockpit?.image, ["interior", "dash"], "cockpitImage", "card-cockpit");
    processImageOrCollapse(selectedCar.specifications?.aerodynamics?.image, ["rear", "side"], "aeroImage", "card-aerodynamics");
    processImageOrCollapse(selectedCar.specifications?.chassis?.image, ["brakes", "brake"], "chassisImage", "card-chassis");

    // 5. Specification Tables Generator Functions
    function getDynamicIconClass(label) {
        const lower = label.toLowerCase();
        if (lower.includes('engine')) return 'fas fa-cogs';
        if (lower.includes('horse') || lower.includes('power')) return 'fas fa-bolt';
        if (lower.includes('torque') || lower.includes('redline') || lower.includes('launch')) return 'fas fa-tachometer-alt';
        if (lower.includes('screen') || lower.includes('display')) return 'fas fa-desktop';
        if (lower.includes('graphics') || lower.includes('telemetry')) return 'fas fa-chart-line';
        if (lower.includes('audio') || lower.includes('sound')) return 'fas fa-volume-up';
        if (lower.includes('spoiler') || lower.includes('splitter') || lower.includes('aero') || lower.includes('underbody')) return 'fas fa-wind';
        if (lower.includes('caliper') || lower.includes('rotor') || lower.includes('brake') || lower.includes('suspension')) return 'fas fa-circle-notch';
        return 'fas fa-circle-notch';
    }

    function formatLabel(text) {
        const structuralResult = text.replace(/([A-Z])/g, " $1");
        return structuralResult.charAt(0).toUpperCase() + structuralResult.slice(1);
    }

    function renderPremiumPanel(sectionObj, listId, pillsId = null) {
        const gridContainer = document.getElementById(listId);
        if(!gridContainer) return;
        gridContainer.innerHTML = "";

        let rowsHtml = "";
        let arrayHtml = "";

        Object.keys(sectionObj).forEach(key => {
            if (key !== 'title' && key !== 'subtitle' && key !== 'image' && key !== 'features' && key !== 'performanceModes') {
                rowsHtml += `
                    <div class="col-sm-6">
                        <div class="spec-item-row">
                            <div class="spec-icon-wrapper"><i class="${getDynamicIconClass(key)}"></i></div>
                            <div class="spec-meta-block">
                                <div class="spec-meta-label">${formatLabel(key)}</div>
                                <div class="spec-meta-value">${sectionObj[key]}</div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        gridContainer.innerHTML = rowsHtml;

        if (pillsId) {
            const pillsContainer = document.getElementById(pillsId);
            if(pillsContainer) {
                pillsContainer.innerHTML = "";
                const arrayKeys = ['features', 'performanceModes'];
                arrayKeys.forEach(listKey => {
                    if (sectionObj[listKey] && Array.isArray(sectionObj[listKey])) {
                        sectionObj[listKey].forEach(item => {
                            arrayHtml += `<span class="clean-pill"><i class="fas fa-circle me-1" style="font-size:5px; vertical-align:middle; opacity:0.5;"></i> ${item}</span>`;
                        });
                    }
                });
                pillsContainer.innerHTML = arrayHtml;
            }
        }
    }

    if (selectedCar.specifications) {
        if (selectedCar.specifications.powertrain) {
            const ptTitle = document.getElementById("powertrainTitle");
            const ptSub = document.getElementById("powertrainSubtitle");
            if (ptTitle) ptTitle.innerText = selectedCar.specifications.powertrain.title || "Powertrain & Propulsion";
            if (ptSub) ptSub.innerText = selectedCar.specifications.powertrain.subtitle || "";
            renderPremiumPanel(selectedCar.specifications.powertrain, "powertrainGrid");
        }
        if (selectedCar.specifications.cockpit) {
            const cpTitle = document.getElementById("cockpitTitle");
            const cpSub = document.getElementById("cockpitSubtitle");
            if (cpTitle) cpTitle.innerText = selectedCar.specifications.cockpit.title || "Cockpit & Infotainment";
            if (cpSub) cpSub.innerText = selectedCar.specifications.cockpit.subtitle || "";
            renderPremiumPanel(selectedCar.specifications.cockpit, "cockpitGrid", "cockpitPills");
        }
        if (selectedCar.specifications.aerodynamics) {
            const aeroTitle = document.getElementById("aeroTitle");
            const aeroSub = document.getElementById("aeroSubtitle");
            if (aeroTitle) aeroTitle.innerText = selectedCar.specifications.aerodynamics.title || "Aerodynamics & Body Management";
            if (aeroSub) aeroSub.innerText = selectedCar.specifications.aerodynamics.subtitle || "";
            renderPremiumPanel(selectedCar.specifications.aerodynamics, "aeroGrid", "aeroPills");
        }
        if (selectedCar.specifications.chassis) {
            const chTitle = document.getElementById("chassisTitle");
            const chSub = document.getElementById("chassisSubtitle");
            if (chTitle) chTitle.innerText = selectedCar.specifications.chassis.title || "Chassis & Braking Dynamics";
            if (chSub) chSub.innerText = selectedCar.specifications.chassis.subtitle || "";
            renderPremiumPanel(selectedCar.specifications.chassis, "chassisGrid", "chassisPills");
        }
    }

    // 6. Sidebar Booking Input Injection
    const savedPickup = localStorage.getItem('search_pickup');
    const savedReturn = localStorage.getItem('search_return');

    const bookingPickupInput = document.getElementById('bookingPickup');
    const bookingReturnInput = document.getElementById('bookingReturn');

    if (bookingPickupInput && savedPickup) {
        bookingPickupInput.value = savedPickup;
    }
    if (bookingReturnInput && savedReturn) {
        bookingReturnInput.value = savedReturn;
    }
});