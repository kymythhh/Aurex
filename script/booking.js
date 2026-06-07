/**
 * Aurex Premium Car Rental - Review Booking Stage Orchestration Controller
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Gather transactional database references and selected ID variables from storage
    const targetCarId = localStorage.getItem('selectedCarId');
    const pickupDateVal = localStorage.getItem('search_pickup');
    const returnDateVal = localStorage.getItem('search_return');
    const terminalVal = localStorage.getItem('preferred_terminal');

    // Fail-safe validation framework if system arrays dropped loading connection routines
    if (typeof window.cars === 'undefined' || !window.cars || window.cars.length === 0) {
        console.error("The centralized cars.js data array script asset mapping is missing.");
        return;
    }

    // 2. Identify the matching vehicle entry profile
    let targetVehicle = window.cars.find(car => car.id === parseInt(targetCarId, 10));
    if (!targetVehicle) {
        console.warn("Target Car ID unresolvable in system registry data maps. Reverting down to item zero.");
        targetVehicle = window.cars[0];
    }

    // 3. Document Object Element UI Query Lookups
    const summaryBrandEl = document.getElementById('summaryBrand');
    const summaryNameEl = document.getElementById('summaryName');
    const summaryCarImgEl = document.getElementById('summaryCarImg');
    
    const reviewPickupDateEl = document.getElementById('reviewPickupDate');
    const reviewReturnDateEl = document.getElementById('reviewReturnDate');
    const reviewDurationEl = document.getElementById('reviewDuration');
    const reviewTerminalEl = document.getElementById('reviewTerminal');
    const reviewPricePerDayEl = document.getElementById('reviewPricePerDay');
    const reviewTotalCostEl = document.getElementById('reviewTotalCost');
    const renterFormEl = document.getElementById('renterForm');

    // 4. Hydrate Vehicle Interface Display Properties
    if (summaryBrandEl) summaryBrandEl.innerText = targetVehicle.brand.toUpperCase();
    if (summaryNameEl) summaryNameEl.innerText = targetVehicle.name;
    if (summaryCarImgEl) summaryCarImgEl.src = targetVehicle.image;
    if (reviewPricePerDayEl) reviewPricePerDayEl.innerText = `$${targetVehicle.price} / day`;
    
    // Fallback UI population string indicators if user bypassed options inside details layout steps
    if (reviewPickupDateEl) reviewPickupDateEl.innerText = pickupDateVal || "Not Configured";
    if (reviewReturnDateEl) reviewReturnDateEl.innerText = returnDateVal || "Not Configured";
    if (reviewTerminalEl) reviewTerminalEl.innerText = terminalVal || "Main Head Office Collection / Center Terminal";

    // 5. Compute Mathematical Rental Horizon Durations & Totals
    let computedDays = 1;
    if (pickupDateVal && returnDateVal) {
        const startTimestamp = new Date(pickupDateVal);
        const endTimestamp = new Date(returnDateVal);
        const timeDelta = endTimestamp.getTime() - startTimestamp.getTime();
        computedDays = Math.ceil(timeDelta / (1000 * 3600 * 24));
        
        // Logical alignment boundaries catch constraints
        if (computedDays <= 0) computedDays = 1;
    }

    if (reviewDurationEl) reviewDurationEl.innerText = `${computedDays} Day(s)`;
    
    const totalOrderCostValue = computedDays * targetVehicle.price;
    if (reviewTotalCostEl) reviewTotalCostEl.innerText = `$${totalOrderCostValue.toLocaleString()}`;

    // 6. Monitor Renter Identification Interception & Registration Submissions
    if (renterFormEl) {
        renterFormEl.addEventListener('submit', (event) => {
            event.preventDefault();

            // Construct transactional parameters receipt data payload model framework
            const activeBookingPayload = {
                carId: targetVehicle.id,
                carName: targetVehicle.name,
                carBrand: targetVehicle.brand,
                pricePerDay: targetVehicle.price,
                days: computedDays,
                totalCost: totalOrderCostValue,
                pickupDate: pickupDateVal || new Date().toISOString().split('T')[0],
                returnDate: returnDateVal || new Date().toISOString().split('T')[0],
                terminal: terminalVal || "Main Head Office Collection / Center Terminal",
                clientName: document.getElementById('renterName').value,
                clientEmail: document.getElementById('renterEmail').value,
                clientPhone: document.getElementById('renterPhone').value,
                clientLicense: document.getElementById('renterLicense').value
            };

            // Compress payload mapping variables into localStorage stack architecture strings
            localStorage.setItem('activeBookingSummary', JSON.stringify(activeBookingPayload));

            // Route user window destination tracking context targets to the checkout execution window
            window.location.href = "payment.html";
        });
    }
});