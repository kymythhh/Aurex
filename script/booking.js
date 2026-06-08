document.addEventListener("DOMContentLoaded", () => {
    const targetCarId = localStorage.getItem('selectedCarId');
    const pickupDateVal = localStorage.getItem('search_pickup');
    const returnDateVal = localStorage.getItem('search_return');
    const terminalVal = localStorage.getItem('preferred_terminal');

    if (typeof window.cars === 'undefined' || !window.cars || window.cars.length === 0) {
        console.error("The centralized cars.js data array script asset mapping is missing.");
        return;
    }

    let targetVehicle = window.cars.find(car => car.id === parseInt(targetCarId, 10));
    if (!targetVehicle) {
        console.warn("Target Car ID unresolvable in system registry data maps. Reverting down to item zero.");
        targetVehicle = window.cars[0];
    }

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

    if (summaryBrandEl) summaryBrandEl.innerText = targetVehicle.brand.toUpperCase();
    if (summaryNameEl) summaryNameEl.innerText = targetVehicle.name;
    if (summaryCarImgEl) summaryCarImgEl.src = targetVehicle.image;
    if (reviewPricePerDayEl) reviewPricePerDayEl.innerText = `$${targetVehicle.price} / day`;

    if (reviewPickupDateEl) reviewPickupDateEl.innerText = pickupDateVal || "Not Configured";
    if (reviewReturnDateEl) reviewReturnDateEl.innerText = returnDateVal || "Not Configured";
    if (reviewTerminalEl) reviewTerminalEl.innerText = terminalVal || "Main Head Office Collection / Center Terminal";

    let computedDays = 1;
    if (pickupDateVal && returnDateVal) {
        const startTimestamp = new Date(pickupDateVal);
        const endTimestamp = new Date(returnDateVal);
        const timeDelta = endTimestamp.getTime() - startTimestamp.getTime();
        computedDays = Math.ceil(timeDelta / (1000 * 3600 * 24));

        if (computedDays <= 0) computedDays = 1;
    }

    if (reviewDurationEl) reviewDurationEl.innerText = `${computedDays} Day(s)`;
    
    const totalOrderCostValue = computedDays * targetVehicle.price;
    if (reviewTotalCostEl) reviewTotalCostEl.innerText = `$${totalOrderCostValue.toLocaleString()}`;

    const phoneInput = document.getElementById('renterPhone');
    if (phoneInput) {
        if (!phoneInput.value.startsWith('09')) {
            phoneInput.value = "09";
        }

        const hintEl = document.createElement('small');
        hintEl.id = "bookingPhoneHint";
        hintEl.style.cssText = "color: #e74c3c; font-size: 11px; margin-top: 4px; display: block; transition: color 0.3s;";
        hintEl.innerText = "Must be exactly 11 digits (2/11).";
        phoneInput.parentNode.appendChild(hintEl);

        phoneInput.addEventListener('input', (e) => {
            let cleanNum = e.target.value.replace(/\D/g, '');

            if (!cleanNum.startsWith('09')) {
                if (cleanNum.startsWith('9')) {
                    cleanNum = '09' + cleanNum.slice(1);
                } else {
                    cleanNum = '09' + cleanNum;
                }
            }
            
            if (cleanNum.length > 11) {
                cleanNum = cleanNum.slice(0, 11);
            }
            
            e.target.value = cleanNum;

            if (cleanNum.length === 11) {
                hintEl.style.color = '#2ecc71';
                hintEl.innerText = "✓ Valid 11-digit mobile configuration locked.";
            } else {
                hintEl.style.color = '#e74c3c';
                hintEl.innerText = `Must be exactly 11 digits (${cleanNum.length}/11).`;
            }
        });

        phoneInput.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && phoneInput.value.length <= 2) {
                e.preventDefault();
            }
        });
    }

    if (renterFormEl) {
        renterFormEl.addEventListener('submit', (event) => {
            event.preventDefault();

            if (phoneInput && phoneInput.value.length !== 11) {
                alert("Transaction denied: Your mobile number configuration must be exactly 11 digits starting with 09.");
                phoneInput.focus();
                return;
            }

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
                clientPhone: phoneInput.value,
                clientLicense: document.getElementById('renterLicense').value
            };

            localStorage.setItem('activeBookingSummary', JSON.stringify(activeBookingPayload));

            window.location.href = "payment.html";
        });
    }
});