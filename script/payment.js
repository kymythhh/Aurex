document.addEventListener("DOMContentLoaded", () => {
    const activeBooking = JSON.parse(localStorage.getItem('activeBookingSummary'));

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
     * @param {string} channelMode
     */
    window.togglePaymentGatewayMode = function(channelMode) {
        document.getElementById('selectorCard').classList.remove('active');
        document.getElementById('selectorWallet').classList.remove('active');

        if (channelMode === 'wallet') {
            document.getElementById('selectorWallet').classList.add('active');
            
            inputGatewayContainer.innerHTML = `
                <div class="form-input-group">
                    <label>Select Digital Wallet Provider</label>
                    <select id="walletProvider" class="form-input-custom" required>
                        <option value="" disabled selected hidden>Choose your wallet...</option>
                        <option value="GCash">GCash</option>
                        <option value="Maya">Maya</option>
                        <option value="GrabPay">GrabPay</option>
                        <option value="PayPal">PayPal Wallet</option>
                    </select>
                </div>
                <div class="form-input-group">
                    <label>Account Mobile Number</label>
                    <!-- Pre-loaded with standard 09 PH validation value string -->
                    <input type="text" id="walletPhone" value="09" placeholder="09XXXXXXXXX" inputmode="numeric" maxlength="11" pattern="09[0-9]{9}" title="Please provide a valid 11-digit Philippine mobile phone number starting with 09." required />
                    <small id="walletLengthHint" style="color: #e74c3c; font-size: 11px; margin-top: 4px; transition: color 0.3s;">Must be exactly 11 digits (2/11).</small>
                </div>
            `;

            const walletPhoneInput = document.getElementById('walletPhone');
            const lengthHint = document.getElementById('walletLengthHint');
            
            if (walletPhoneInput) {
                walletPhoneInput.addEventListener('input', (e) => {
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
                        lengthHint.style.color = '#2ecc71';
                        lengthHint.innerText = "✓ Valid 11-digit mobile configuration locked.";
                    } else {
                        lengthHint.style.color = '#e74c3c';
                        lengthHint.innerText = `Must be exactly 11 digits (${cleanNum.length}/11).`;
                    }
                });

                walletPhoneInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && walletPhoneInput.value.length <= 2) {
                        e.preventDefault();
                    }
                });
            }
        } else {
            document.getElementById('selectorCard').classList.add('active');
            inputGatewayContainer.innerHTML = `
                <div class="form-input-group">
                    <label>Cardholder Full Name</label>
                    <input type="text" placeholder="Name exactly as printed" required />
                </div>
                <div class="form-input-group">
                    <label>Credit Card Number</label>
                    <input type="text" id="ccNumber" placeholder="XXXX XXXX XXXX XXXX" maxlength="19" inputmode="numeric" required />
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

            const ccInput = document.getElementById('ccNumber');
            if (ccInput) {
                ccInput.addEventListener('input', (e) => {
                    let textValue = e.target.value.replace(/\D/g, ''); 
                    let groupedValue = textValue.match(/.{1,4}/g); 
                    
                    if (groupedValue) {
                        e.target.value = groupedValue.join(' '); 
                    } else {
                        e.target.value = textValue;
                    }
                });
            }

            const expiryInput = document.getElementById('ccExpiry');
            if (expiryInput) {
                expiryInput.addEventListener('input', (e) => {
                    let rawValue = e.target.value.replace(/\D/g, '');
                    if (rawValue.length >= 2) {
                        e.target.value = rawValue.slice(0, 2) + '/' + rawValue.slice(2, 4);
                    } else {
                        e.target.value = rawValue;
                    }
                });

                expiryInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && expiryInput.value.length === 3) {
                        expiryInput.value = expiryInput.value.slice(0, 2);
                        e.preventDefault();
                    }
                });
            }
        }
    };

    togglePaymentGatewayMode('card');

    const securePaymentFormEl = document.getElementById('securePaymentForm');
    if (securePaymentFormEl) {
        securePaymentFormEl.addEventListener('submit', (e) => {
            e.preventDefault();

            const walletPhoneInput = document.getElementById('walletPhone');
            if (walletPhoneInput && walletPhoneInput.value.length !== 11) {
                alert("Transaction denied: Your mobile digital wallet identification must be exactly 11 digits starting with 09.");
                walletPhoneInput.focus();
                return;
            }

            const authorizeBtn = document.getElementById('submitPaymentBtn');
            if (authorizeBtn) {
                authorizeBtn.disabled = true;
                authorizeBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin me-2"></i> Verifying Secured Asset Tokens...`;
            }

            setTimeout(() => {
                const generatedReceiptNumber = Math.floor(100000 + Math.random() * 900000);
                
                document.getElementById('successReceiptCode').innerText = `RECEIPT: AX-${generatedReceiptNumber}`;
                document.getElementById('successClientName').innerText = activeBooking ? activeBooking.clientName : "Juan Dela Cruz";
                document.getElementById('successCarName').innerText = activeBooking ? activeBooking.carName : "Premium Fleet Asset";
                document.getElementById('successTotalCost').innerText = activeBooking ? `$${activeBooking.totalCost.toLocaleString()}` : "$0";

                document.getElementById('successLayerModal').classList.add('active');
            }, 2000);
        });
    }

    window.clearCacheAndReturnHome = function() {
        localStorage.removeItem('activeBookingSummary');
        window.location.href = "featured.html";
    };
});