document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const carIndex = urlParams.get('id');

    if (carIndex === null || !window.cars || window.cars.length === 0) {
        document.querySelector(".container").innerHTML = `
            <div class="text-center py-5">
                <h3 class="text-white">Profile Data Missing</h3>
            </div>
        `;
        return;
    }

    // Find car ONLY by its unique ID
const car = window.cars.find(
    c => String(c.id) === String(carIndex).trim()
);

    // Global Core Setup Assignments
    document.title = `Aurex - ${car.name}`;
    document.getElementById("breadcrumb-car").innerText = car.name;
    document.getElementById("carCategory").innerText = car.category.toUpperCase();
    document.getElementById("carRating").innerText = car.rating.toFixed(1);
    document.getElementById("carName").innerText = car.name;
    document.getElementById("carPrice").innerText = `$${car.price}`;
    document.getElementById("carDescription").innerText = car.description;

    // Set primary showcase layout image
    const mainImage = document.getElementById("mainCarImage");
const thumbnailGallery = document.getElementById("thumbnailGallery");

const galleryImages =
    car.gallery && car.gallery.length
        ? car.gallery
        : [car.image];

mainImage.src = galleryImages[0];

thumbnailGallery.innerHTML = "";

galleryImages.forEach((image, index) => {

    const thumb = document.createElement("img");

    thumb.src = image;

    if (index === 0) {
        thumb.classList.add("active");
    }

    thumb.addEventListener("click", () => {

    if (mainImage.src.includes(image)) return;

    mainImage.style.opacity = "0";

    setTimeout(() => {

        mainImage.src = image;

        mainImage.onload = () => {
            mainImage.style.opacity = "1";
        };

    }, 200);

    document
        .querySelectorAll("#thumbnailGallery img")
        .forEach(img => img.classList.remove("active"));

    thumb.classList.add("active");
});
    thumbnailGallery.appendChild(thumb);
});

    // --- gallery ---
    const uniqueCarPhotosPool = (car.gallery && Array.isArray(car.gallery)) 
        ? car.gallery.filter(photo => photo !== car.image)
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

    processImageOrCollapse(car.specifications?.powertrain?.image, ["engine", "front"], "powertrainImage", "card-powertrain");
    processImageOrCollapse(car.specifications?.cockpit?.image, ["interior", "dash"], "cockpitImage", "card-cockpit");
    processImageOrCollapse(car.specifications?.aerodynamics?.image, ["rear", "side"], "aeroImage", "card-aerodynamics");
    processImageOrCollapse(car.specifications?.chassis?.image, ["brakes", "brake"], "chassisImage", "card-chassis");
    // --------------------------------------------------

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
        
        // 1. Add the new class to the container
        gridContainer.classList.add("specs-grid-container");
        gridContainer.innerHTML = "";

        let rowsHtml = "";
        let arrayHtml = "";

        Object.keys(sectionObj).forEach(key => {
            if (key !== 'title' && key !== 'subtitle' && key !== 'image' && key !== 'features' && key !== 'performanceModes') {
                // 2. Use the new class structure: spec-item-box
                rowsHtml += `
                    <div class="spec-item-box">
                        <div class="spec-icon-wrapper">
                            <i class="${getDynamicIconClass(key)}"></i>
                        </div>
                        <div class="spec-meta-block">
                            <div class="spec-meta-label">${formatLabel(key)}</div>
                            <div class="spec-meta-value">${sectionObj[key]}</div>
                        </div>
                    </div>
                `;
            }
        });
        gridContainer.innerHTML = rowsHtml;

        // Pills logic remains the same
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

    if (car.specifications) {
        if (car.specifications.powertrain) {
            document.getElementById("powertrainTitle").innerText = car.specifications.powertrain.title || "Powertrain & Propulsion";
            document.getElementById("powertrainSubtitle").innerText = car.specifications.powertrain.subtitle || "";
            renderPremiumPanel(car.specifications.powertrain, "powertrainGrid");
        }
        if (car.specifications.cockpit) {
            document.getElementById("cockpitTitle").innerText = car.specifications.cockpit.title || "Cockpit & Infotainment";
            document.getElementById("cockpitSubtitle").innerText = car.specifications.cockpit.subtitle || "";
            renderPremiumPanel(car.specifications.cockpit, "cockpitGrid", "cockpitPills");
        }
        if (car.specifications.aerodynamics) {
            document.getElementById("aeroTitle").innerText = car.specifications.aerodynamics.title || "Aerodynamics & Body Management";
            document.getElementById("aeroSubtitle").innerText = car.specifications.aerodynamics.subtitle || "";
            renderPremiumPanel(car.specifications.aerodynamics, "aeroGrid", "aeroPills");
        }
        if (car.specifications.chassis) {
            document.getElementById("chassisTitle").innerText = car.specifications.chassis.title || "Chassis & Braking Dynamics";
            document.getElementById("chassisSubtitle").innerText = car.specifications.chassis.subtitle || "";
            renderPremiumPanel(car.specifications.chassis, "chassisGrid", "chassisPills");
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
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