const carData = [
    {
        brand: "Ford",
        model: "Mustang GT",
        imgSrc: "car.png",
        parts: [
            {
                name: "Coyote V8 Engine",
                subtitle: "Naturally Aspirated Raw Performance",
                bgImg: "https://images.unsplash.com/photo-1611245558573-2a1a3b306f37?auto=format&fit=crop&w=800&q=80",
                specs: { "Displacement": "5.0 Liters", "Horsepower": "486 HP", "Torque": "563 Nm", "Redline": "7,500 RPM" },
                pills: ["Valvetrain: DOHC", "Fuel Injection: Port/Direct", "Exhaust: Active Valve"]
            },
            {
                name: "Digital Cockpit",
                subtitle: "Immersive Jet-Fighter Command Center",
                bgImg: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80",
                specs: { "Cluster Screen": "12.4-inch Panel", "Center Display": "13.2-inch Touch", "Graphics Engine": "Unreal Engine 4", "Sound System": "B&O 12-Speaker" },
                pills: ["Apple CarPlay", "Track Apps™", "Wireless Pad"]
            },
            {
                name: "Performance Aero",
                subtitle: "Sculpted Clean Drag Management",
                bgImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
                specs: { "Rear Spoiler": "Performance Wing", "Front Splitter": "Aggressive Extension", "Underbody": "Shielded Paning", "Air Extractors": "Functional Hood" },
                pills: ["Drag Coeff: 0.34", "High Downforce", "Brake Cooling Ducts"]
            },
            {
                name: "MagneRide System",
                subtitle: "Brembo Anchors & Active Damping",
                bgImg: "https://images.unsplash.com/photo-1600706432502-75a0e2751982?auto=format&fit=crop&w=800&q=80",
                specs: { "Front Calipers": "Brembo 6-Piston", "Rear Calipers": "Brembo 4-Piston", "Rotors": "Two-Piece Ventilated", "Damping Rate": "1,000 times/sec" },
                pills: ["Pirelli P-Zero", "Alloy Diameter: 19\"", "Electronic Drift Brake"]
            }
        ]
    },
    {
        brand: "Porsche",
        model: "Taycan Turbo",
        imgSrc: "car2.png", // Replace with an actual Porsche transparent PNG later if you have one!
        parts: [
            {
                name: "E-Performance Matrix",
                subtitle: "Dual Permanent Magnet Synchronous Motors",
                bgImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
                specs: { "Architecture": "800-Volt System", "Peak Power": "670 HP (Overboost)", "Total Torque": "850 Nm", "Transmission": "2-Speed Rear Box" },
                pills: ["Launch Control", "Water Cooled", "AWD Vectoring"]
            },
            {
                name: "Advanced Cockpit",
                subtitle: "Curved Display Minimalism Architecture",
                bgImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
                specs: { "Driver Display": "16.8-inch Curved", "Central Screen": "10.9-inch Panel", "Console Display": "8.4-inch Haptic", "Material Trim": "Race-Tex Leather-Free" },
                pills: ["Porsche Connect", "OTA Updates", "Quad-Zone Air"]
            },
            {
                name: "Active Aerodynamics",
                subtitle: "Porsche Adaptive Drag Wing Ventilation",
                bgImg: "https://images.unsplash.com/photo-1611245558573-2a1a3b306f37?auto=format&fit=crop&w=800&q=80",
                specs: { "PAA System": "3-Stage Active Air", "Air Curtains": "Vertical Intakes", "Underbody": "Fully Flat Diffuser", "Drag Coeff": "0.22 Cd Economy" },
                pills: ["Air Flaps", "Adaptive Spoiler", "Flush Handles"]
            },
            {
                name: "Chassis Control",
                subtitle: "Adaptive 3-Chamber Air Suspension",
                bgImg: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=80",
                specs: { "Air Suspension": "PASM Electronic Control", "Rear Axle Steering": "Electromechanical", "Stabilization": "PDCC Sport Active", "Brakes": "Surface Coated (PSCB)" },
                pills: ["21\" Aero Wheels", "Smart Lift Location", "Recuperation Setup"]
            }
        ]
    },
    {
        brand: "Audi",
        model: "RS E-Tron GT",
        imgSrc: "car.png",
        parts: [
            {
                name: "Quattro Powertrain",
                subtitle: "Instant Dynamic Torque Displacement",
                bgImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
                specs: { "Front Motor": "175 kW Unit", "Rear Motor": "335 kW Unit", "Boost Power": "637 HP Complete", "Total Torque": "830 Nm Combined" },
                pills: ["Thermal Circuit", "0-100: 3.1s", "Carbon Sleeves"]
            },
            {
                name: "Monoposto Cabin",
                subtitle: "Driver-Centric Premium Workspace Focus",
                bgImg: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80",
                specs: { "Virtual Cockpit": "12.3-inch Screen", "MMI Touch": "10.1-inch Monitor", "Interior Inlays": "Matte Carbon Fiber", "Seats": "18-Way Sport Pro" },
                pills: ["Dinamica Microfiber", "e-tron Sound", "HUD Projector"]
            },
            {
                name: "Light Design",
                subtitle: "Matrix LED with Audi Laser Light Technology",
                bgImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
                specs: { "Laser Range": "Doubles Vision Range", "Animation": "Coming/Leaving Home", "Rear Bar": "Dynamic LED Blade", "Turn Signals": "Sequential Sweeping" },
                pills: ["Anti-Glare Masking", "Blue Laser Core", "Adaptive High-Beam"]
            },
            {
                name: "Tungsten Brakes",
                subtitle: "Carbide Performance Floating Braking Friction",
                bgImg: "https://images.unsplash.com/photo-1600706432502-75a0e2751982?auto=format&fit=crop&w=800&q=80",
                specs: { "Coating": "Tungsten Carbide Layer", "Calipers": "10-Piston Massive Front", "Dust Reduction": "90% Less Brake Dust", "Wheels": "21-inch 5-Twin-Spoke" },
                pills: ["Gloss Orange Finish", "Rear Wheel Steering", "Air Suspension"]
            }
        ]
    },
    {
        brand: "Tesla",
        model: "Model S Plaid",
        imgSrc: "car.png",
        parts: [
            {
                name: "Plaid Tri-Motor",
                subtitle: "Carbon-Sleeved Rotor Propulsion Performance",
                bgImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
                specs: { "Motor Count": "3 High-Performance", "Peak Power": "1,020 HP Output", "Torque Vectoring": "Independent Rear", "0-100 km/h": "2.1 Seconds" },
                pills: ["VMax Track Mode", "Carbon Rotors", "Thermal Radiator"]
            },
            {
                name: "Yoke Minimalist Center",
                subtitle: "Cinematic Workspace Steering Architecture",
                bgImg: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80",
                specs: { "Center Display": "17\" Tilting Screen", "Resolution": "2200 x 1300 Cine", "Gaming Computer": "10 Teraflops Power", "Rear Display": "8\" Passenger Monitor" },
                pills: ["Wireless Controllers", "22-Speaker Audio", "Hidden Air Vents"]
            },
            {
                name: "Autopilot Hardware",
                subtitle: "Full Self-Driving Neural Core Network Computer",
                bgImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
                specs: { "Camera Array": "8 Surround Lenses", "Vision Processing": "250m Sight Range", "FSD Computers": "Dual Redundant FSD Chips", "Ultrasonics": "Advanced Acoustic Processing" },
                pills: ["Neural Net Trained", "360° Visibility", "Real-Time Prediction"]
            },
            {
                name: "Spider Alloy Brakes",
                subtitle: "Track Spec Forged Lightweight Setups",
                bgImg: "https://images.unsplash.com/photo-1600706432502-75a0e2751982?auto=format&fit=crop&w=800&q=80",
                specs: { "Wheel Spec": "21\" Arachnid Forged", "Tire Compound": "Michelin Pilot 4S", "Brake Discs": "High-Thermal Steel", "Calipers": "Performance Monoblock" },
                pills: ["Low Rolling Resistance", "Track Brake Fluid", "Staggered Profile"]
            }
        ]
    }
];

// Global State Indicators
let currentIndex = 0;
let currentExpandedPartIndex = -1;

const carBrandEl = document.getElementById('carBrand');
const carModelEl = document.getElementById('carModel');
const carImgEl = document.getElementById('carImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const detailsBtn = document.getElementById('detailsBtn');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');
const detailsOverlay = document.getElementById('detailsOverlay');
const panelColumnsContainer = document.getElementById('panelColumnsContainer');

const showcaseDots = document.querySelectorAll('.showcase-pagination .dot');

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');
    
    if (window.scrollY > 50) {
        header.style.background = '#0d1520';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)';
        header.style.boxShadow = 'none';
    }

    const scrollPosition = window.scrollY + 150;

    const sections = {
        home: 0,
        showcase: document.getElementById('showcase-section')?.offsetTop || 0,
        about: document.getElementById('features-section')?.offsetTop || 0,
        contact: document.getElementById('contact-section')?.offsetTop || 0
    };

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');

        if (scrollPosition >= sections.contact) {
            if (href === '#contact-section') link.classList.add('active');
        } else if (scrollPosition >= sections.about) {
            if (href === '#features-section') link.classList.add('active');
        } else if (scrollPosition >= sections.showcase) {
            if (href === '#showcase-section') link.classList.add('active');
        } else {
            if (href === '#') link.classList.add('active');
        }
    });
});

function generateDetailsStructure(carIndex) {
    panelColumnsContainer.innerHTML = '';
    const carParts = carData[carIndex].parts;

    carParts.forEach((part, index) => {
        const column = document.createElement('div');
        column.className = "spec-column";
        column.dataset.index = index;
        

        let tableRowsHtml = '';
        for (const [key, val] of Object.entries(part.specs)) {
            tableRowsHtml += `<tr><td>${key}:</td><td>${val}</td></tr>`;
        }

        let pillsHtml = '';
        part.pills.forEach((pillText, pIdx) => {
            const isHighlight = pIdx === part.pills.length - 1 ? 'highlight-pill' : '';
            pillsHtml += `<span class="pill ${isHighlight}">${pillText}</span>`;
        });

        column.innerHTML = `
            <img src="${part.bgImg}" alt="${part.name}" class="spec-column-bg" />
            
            <span class="status-badge"><span class="live-dot"></span> Component Feature</span>
            <div class="parts-title">${part.name}</div>
            
            <div class="spec-main-content">
                <span class="spec-number">0${index + 1}</span>
                <h2>${part.name}</h2>
                <p class="spec-subtitle">${part.subtitle}</p>
                <table class="spec-table">${tableRowsHtml}</table>
                <div class="spec-pills-row">${pillsHtml}</div>
            </div>

            <div class="mini-column-footer">
                <span class="spec-number">0${index + 1}</span>
                <button class="action-circle-btn">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        `;

        column.addEventListener('click', (e) => {
            e.stopPropagation();
            const clickedIdx = parseInt(column.dataset.index);
            currentExpandedPartIndex = (currentExpandedPartIndex === clickedIdx) ? -1 : clickedIdx;
            applyAccordionClasses();
        });

        panelColumnsContainer.appendChild(column);
    });

    applyAccordionClasses();
}

function applyAccordionClasses() {
    const columns = panelColumnsContainer.querySelectorAll('.spec-column');
    columns.forEach((col, idx) => {
        const btn = col.querySelector('.action-circle-btn');
        const icon = col.querySelector('.action-circle-btn i');
        
        if (currentExpandedPartIndex === -1) {
            col.className = "spec-column";
            if(btn) btn.className = "action-circle-btn";
            if(icon) icon.className = "fa-solid fa-chevron-right";
        } else if (currentExpandedPartIndex === idx) {
            col.className = "spec-column expanded";
            if(btn) btn.className = "action-circle-btn minimize-btn";
            if(icon) icon.className = "fa-solid fa-chevron-right";
        } else {
            col.className = "spec-column collapsed";
            if(btn) btn.className = "action-circle-btn";
            if(icon) icon.className = "fa-solid fa-chevron-right";
        }
    });
}

function updateShowcase(index) {
    carImgEl.style.opacity = '0';
    carImgEl.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        carBrandEl.textContent = carData[index].brand;
        carModelEl.textContent = carData[index].model;
        carImgEl.src = carData[index].imgSrc;

        showcaseDots.forEach(dot => dot.classList.remove('active'));
        if (showcaseDots[index]) {
            showcaseDots[index].classList.add('active');
        }

        currentExpandedPartIndex = -1;
        generateDetailsStructure(index);

        carImgEl.style.opacity = '1';
        carImgEl.style.transform = 'scale(1)';
    }, 300);
}

showcaseDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateShowcase(currentIndex);
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carData.length - 1 : currentIndex - 1;
    updateShowcase(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carData.length - 1) ? 0 : currentIndex + 1;
    updateShowcase(currentIndex);
});

detailsBtn.addEventListener('click', () => {
    currentExpandedPartIndex = -1;
    applyAccordionClasses();
    detailsOverlay.classList.add('active');
});

closeDetailsBtn.addEventListener('click', () => detailsOverlay.classList.remove('active'));

updateShowcase(0);