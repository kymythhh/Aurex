/**
 * Aurex Premium Car Rental - Payment Processing Pipeline Controller
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Recover un-marshaled client booking summary state from localStorage cache
    const activeBooking = JSON.parse(localStorage.getItem('activeBookingSummary'));

    // 2. Safely populate manifest display values if storage data exists
    if (activeBooking) {
        document.getElementById('manifestBrand').innerText = activeBooking.carBrand.toUpperCase();
        document.getElementById('manifestCarName').innerText = activeBooking.carName;
        document.getElementById('manifestClientName').innerText = activeBooking.clientName;
        document.getElementById('manifestClientEmail').innerText = activeBooking.clientEmail;
        document.getElementById('manifestClientPhone').innerText = activeBooking.clientPhone;
        document.getElementById('manifestClientLicense').innerText = activeBooking.clientLicense;
        document.getElementById('manifestPickupDate').innerText = activeBooking.pickupDate;
        document.getElementById('manifestReturnDate').innerText = activeBooking.returnDate;
        document.getElementById('manifestDuration').innerText = `${activeBooking.days} Day(s)`;
        document.getElementById('manifestTerminal').innerText = activeBooking.terminal;
        document.getElementById('manifestTotalCost').innerText = `$${activeBooking.totalCost.toLocaleString()}`;
    }

    const inputGatewayContainer = document.getElementById('dynamicInputGatewayFields');

    /**
     * Alternates input form structures depending on chosen payment method channels
     * @param {string} channelMode - Token parameter string ('card' or 'wallet')
     */
    window.togglePaymentGatewayMode = function(channelMode) {
        document.getElementById('selectorCard').classList.remove('active');
        document.getElementById('selectorWallet').classList.remove('active');

        if (channelMode === 'wallet') {
            document.getElementById('selectorWallet').classList.add('active');
            inputGatewayContainer.innerHTML = `
                <div class="form-input-group">
                    <label>Select E-Wallet Provider</label>
                    <input type="text" placeholder="e.g., GCash, Maya, PayPal" required />
                </div>
                <div class="form-input-group">
                    <label>Account Mobile Number / ID</label>
                    <input type="text" placeholder="e.g., 0917XXXXXXX" required />
                </div>
            `;
        } else {
            document.getElementById('selectorCard').classList.add('active');
            inputGatewayContainer.innerHTML = `
                <div class="form-input-group">
                    <label>Cardholder Full Name</label>
                    <input type="text" placeholder="Name exactly as printed" required />
                </div>
                <div class="form-input-group">
                    <label>Credit Card Number</label>
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" maxlength="19" required />
                </div>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-input-group">
                            <label>Expiration Date</label>
                            <input type="text" id="ccExpiry" placeholder="MM/YY" maxlength="5" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-input-group">
                            <label>CVV Security Code</label>
                            <input type="password" placeholder="•••" maxlength="3" required />
                        </div>
                    </div>
                </div>
            `;

            // ==========================================================================
            // SMART EXPIRATION DATE AUTOMATIC "/" INJECTION FORMATTER
            // ==========================================================================
            const expiryInput = document.getElementById('ccExpiry');
            if (expiryInput) {
                expiryInput.addEventListener('input', (e) => {
                    let rawValue = e.target.value.replace(/\D/g, ''); // Strip all non-numerical entries
                    
                    if (rawValue.length >= 2) {
                        // Automatically inject slash if two numbers for month are typed
                        e.target.value = rawValue.slice(0, 2) + '/' + rawValue.slice(2, 4);
                    } else {
                        e.target.value = rawValue;
                    }
                });

                expiryInput.addEventListener('keydown', (e) => {
                    // Smooth backspacing: cleanly drops character flags if deleting back into month side
                    if (e.key === 'Backspace' && expiryInput.value.length === 3) {
                        expiryInput.value = expiryInput.value.slice(0, 2);
                        e.preventDefault();
                    }
                });
            }
        }
    };

    // 3. Initialize default checkout card grid field layout footprint
    togglePaymentGatewayMode('card');

    // 4. Intercept submission form pipelines to execute receipt simulation overlays
    const securePaymentFormEl = document.getElementById('securePaymentForm');
    if (securePaymentFormEl) {
        securePaymentFormEl.addEventListener('submit', (e) => {
            e.preventDefault();

            const authorizeBtn = document.getElementById('submitPaymentBtn');
            if (authorizeBtn) {
                authorizeBtn.disabled = true;
                authorizeBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin me-2"></i> Verifying Secured Asset Tokens...`;
            }

            // Simulate financial gateway verification checks delay
            setTimeout(() => {
                const generatedReceiptNumber = Math.floor(100000 + Math.random() * 900000);
                
                // Hydrate live text attributes into complete overlay view panel frames
                document.getElementById('successReceiptCode').innerText = `RECEIPT: AX-${generatedReceiptNumber}`;
                document.getElementById('successClientName').innerText = activeBooking ? activeBooking.clientName : "Juan Dela Cruz";
                document.getElementById('successCarName').innerText = activeBooking ? activeBooking.carName : "Premium Fleet Asset";
                document.getElementById('successTotalCost').innerText = activeBooking ? `$${activeBooking.totalCost.toLocaleString()}` : "$0";

                // Turn on modal container view properties
                document.getElementById('successLayerModal').classList.add('active');
            }, 2000);
        });
    }

    /**
     * Clears temporary local state memory variables and performs graceful redirect back to landing module
     */
    window.clearCacheAndReturnHome = function() {
        localStorage.removeItem('activeBookingSummary');
        window.location.href = "featured.html";
    };
});