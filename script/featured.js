const carData = [
    {
        brand: "Porsche",
        model: "911 GT3 RS 2023",
        imgSrc: "assets/Porsche/sidePorsche.png",
        parts: [
            {
                name: "Powertrain and Propulsion",
                subtitle: "Naturally Aspirated High-Revving Performance",
                bgImg: "assets/Porsche/front.jpg",
                specs: { "Engine Type": "4.0L Naturally Aspirated Flat-6", "Horsepower": "525 HP @ 8,500 RPM", "Torque": "465 Nm @ 6,300 RPM", "Redline": "9,000 RPM" },
                pills: ["Valvetrain: DOHC 24-Valve", "Fuel Injection: Direct Fuel Injection (DFI)", "Exhaust: Lightweight Stainless Steel Sport Exhaust"]
            },
            {
                name: "Cockpit & Infotainment",
                subtitle: "Motorsport-Derived Jet-Fighter Command Center",
                bgImg: "assets/Porsche/interior.jpg",
                specs: { "Cluster Screen": "7.0-inch Dual TFT Displays with Analog Tachometer", "Center Display": "10.9-inch Porsche Communication Management (PCM) Touchscreen", "Graphics Engine": "Advanced Real-Time Telemetry Processing", "Sound System": "Sound Package Plus (Lightweight Audio Optimization)" },
                pills: ["Apple CarPlay & Android Auto", "Porsche Track Precision App", "Steering Wheel Mode Dials"]
            },
            {
                name: "Aerodynamics & Body Management",
                subtitle: "Active Motorsport Drag Management",
                bgImg: "assets/Porsche/rear.jpg",
                specs: { "Rear Spoiler": "Massive Swan-Neck Active Wing with DRS Function", "Front Splitter": "Dynamic Active Front Diffuser", "Underbody": "Shielded Paning", "Air Extractors": "Fully Enclosed Shielded Paning with Fin Extractors" },
                pills: ["Drag Coeff: 0.39 (High Downforce Mode)", "Downforce: 860 kg @ 285 km/h", "Brake Cooling Ducts"]
            },
            {
                name: "Chassis & Braking Dynamics",
                subtitle: "Surgically Precise Active Damping & Anchors",
                bgImg: "assets/Porsche/brakes.jpg",
                specs: { "Front Calipers": "Brembo 6-Piston Aluminum Monobloc Fixed Calipers", "Rear Calipers": "Brembo 4-Piston Aluminum Monobloc Fixed Calipers", "Rotors": "Internally Vented Cross-Drilled Carbon Ceramic (PCCB Option)", "Damping Rate": "PASM Active Damping Management (Adjustable via steering wheel)" },
                pills: ["Michelin Pilot Sport Cup 2 R", "Alloy Diameter: 20\" Front / 21\" Rear ", "Rear-Axle Steering"]
            }
        ]
    },
    {
        brand: "Dodge",
        model: "Charger RT",
        imgSrc: "assets/Dodge/sideDodge.png",
        parts: [
            {
                name: "Powertrain & Propulsion",
                subtitle: "Pure Heavy Mechanical Muscle",
                bgImg: "assets/Dodge/front.jpg",
                specs: { "Engine Type": "7.2L (440 cu-in) \"Big Block\" Magnum V8", "Horsepower": "375 HP", "Total Torque": "650 Nm", "Redline": "5,200 RPM" },
                pills: ["Valvetrain: Overhead Valve (OHV) 16-Valve Pushrod", "Fuel Injection: Carter 4-Barrel Carburetor", "Exhaust: Dual 2.5-Inch Free-Flow H-Pipe Exhaust"]
            },
            {
                name: "Cockpit & Infotainment",
                subtitle: "Timeless Analog Driver Interface",
                bgImg: "assets/Dodge/interior.jpg",
                specs: { "Driver Display": "Classic 150 MPH Mechanical Speedometer and Tic-Toc-Tach Combo", "Central Screen": "Retro-Styled AM/FM Transistor Radio Interface", "Graphics Engine": "100% Analog Needle-and-Gauge Instrumentation", "Sound System": "Dual-Cone Dashboard and Rear Deck Speaker Array" },
                pills: ["Analog Climate Toggles", "Woodgrain Center Console Panel"]
            },
            {
                name: "Aerodynamics & Body Management",
                subtitle: "Raw Brutalist Street Stance Styling",
                bgImg: "assets/Dodge/rear.jpg",
                specs: { "Rear Spoiler": "Flush Integrated Tail-Panel Lip", "Front Splitter": "Deep-Set Under-Bumper Steel Air Deflector", "Underbody": "Exposed Vintage Chassis rails and Oil Pan Geometry", "Air Extractors": "Dual Mechanical Door Scallops and Recessed Rear Window" },
                pills: ["Drag Coeff: 0.51 (Est.)", "Raw High-Speed Wind Profiles", "Hidden Vacuum-Operated Headlight Doors"]
            },
            {
                name: "Chassis & Braking Dynamics",
                subtitle: "Heavy-Duty Classic Longitudinal Muscle Underpinnings",
                bgImg: "assets/Dodge/brakes.jpg",
                specs: { "Front Calipers": "Kelsey-Hayes Single-Piston Heavy-Duty Calipers (Disc Conversion)", "Rear Calipers": "Self-Adjusting Mechanical Hydraulic Duo-Servo Drums", "Rotors": "11-inch Solid Heavy Steel Rotors (Front)", "Damping Rate": "vHeavy-Duty Torsion Bar Front / Leaf Spring Rear Mechanical Shock Damping" },
                pills: ["BFGoodrich Radial T/A White-Letter ", "Alloy Diameter: 15\" Classic Magnum 500 Wheels", "Heavy-Duty Mechanical Slip Differential"]
            }
        ]
    },
    {
        brand: "Lexus",
        model: "LM 350h Ultra",
        imgSrc: "assets/Lexus/sideLexus5.png",
        parts: [
            {
                name: "Powertrain & Propulsion",
                subtitle: "Silent, Self-Charging Hybrid Propulsion",
                bgImg: "assets/Lexus/front.jpg",
                specs: { "Engine Type": "2.5L 4-Cylinder Hybrid Engine with Dual Electric Motors", "Horsepower": "250 HP (Combined System Output)", "Torque": "239 Nm (Engine Only) / High-Instant Electric Torque", "Redline": "6,000 RPM" },
                pills: ["Valvetrain: DOHC 16-Valve VVT-iE", "Fuel Injection: Electronic Port & Direct Injection (D-4S)", "Exhaust: Ultra-Quiet Concealed Single Exit"]
            },
            {
                name: "Cockpit & Infotainment",
                subtitle: "First-Class Mobile Boardroom Command Center",
                bgImg: "assets/Lexus/interior.jpg",
                specs: { "Cluster Screen": "12.3-inch Virtual TFT Instrument Panel", "Center Display": "14-inch Front Screen / 48-inch Rear Partition Display", "Graphics Engine": "Lexus Interface Multitasking Processor", "Sound System": "Mark Levinson Reference 23-Speaker 3D Surround" },
                pills: ["Wireless Smartphone Projection", "Lexus Rear Climate Concierge", "Removable Rear Armrest Touch Controllers"]
            },
            {
                name: "Aerodynamics & Body Management",
                subtitle: "VIP Comfort Cabin Air & Fluid Deflection",
                bgImg: "assets/Lexus/rear.jpg",
                specs: { "Rear Spoiler": "Roof-Integrated Subtle Trailing Edge Spoiler", "Front Splitter": "Spindle-Body Integrated Smooth Lower Chin", "Underbody": "Sound-Dampening Textured Under-Shielding Paneling", "Air Extractors": "Discrete Rear Pillar Air Flow Passages" },
                pills: ["Drag Coeff: 0.34", "Crosswind Stability Management", "Acoustic Laminated Glass Partitioning"]
            },
            {
                name: "Chassis & Braking Dynamics",
                subtitle: "Anti-Pitch Stability & Smooth Passenger Braking",
                bgImg: "assets/Lexus/brakes.jpg",
                specs: { "Front Calipers": "Advics Dual-Piston Floating Calipers", "Rear Calipers": "Advics Single-Piston Electronic Parking Brake Calipers", "Rotors": "Ventilated Anti-Rust Coated Rotors", "Damping Rate": "Adaptive Variable Suspension (AVS) with Frequency-Sensitive Valves" },
                pills: ["Dunlop SP Sport Maxx VIP Comfort", "Alloy Diameter: 19-inch Ultra-Quiet Forged", "Comfort Braking Pitch Control"]
            }
        ]
    },
    {
        brand: "Range Rover",
        model: "SV 2024 Edition",
        imgSrc: "assets/Rover/sideRover.png",
        parts: [
            {
                name: "Powertrain & Propulsion",
                subtitle: "Twin-Turbocharged Effortless Capability",
                bgImg: "assets/Rover/front.jpg",
                specs: { "Engine Type": "4.4L Twin-Turbocharged V8", "Horsepower": "606 HP", "Torque": "750 Nm", "Redline": "6,500 RPM" },
                pills: ["Valvetrain: DOHC with Variable Valve Timing", "Fuel Injection: High-Pressure Direct Injection", "Exhaust: Quad-Acoustic Active Valve Exhaust"]
            },
            {
                name: "Cockpit & Infotainment",
                subtitle: "The Peak of Serene Sanctuary Layouts",
                bgImg: "assets/Rover/interior.jpg",
                specs: { "Cluster Screen": "13.7-inch Interactive Driver Display", "Center Display": "13.1-inch Curved Floating Pivi Pro Touchscreen", "Graphics Engine": "Next-Gen Blackberry QNX Architecture", "Sound System": "Meridian Signature 35-Speaker Audio System" },
                pills: ["Wireless Apple CarPlay", "SV Executive Rear Suite Telemetry", "Rear Seat Wireless Touch Pads"]
            },
            {
                name: "Aerodynamics & Body Management",
                subtitle: "Sculpted Clean Drag Management",
                bgImg: "assets/Rover/rear.jpg",
                specs: { "Rear Spoiler": "Integrated Flush Upper Trailing Edge Wing", "Front Splitter": "Smooth Lower Air Dam with Active Grille Shutters", "Underbody": "Sealed Aerodynamic Belly Pan Optimization", "Air Extractors": "Signature Flush Side Graphic \"Gills\"" },
                pills: ["Drag Coeff: 0.30", "High-Speed Levelling Downforce", "Integrated Wade-Sensing Hardware"]
            },
            {
                name: "Chassis & Braking Dynamics",
                subtitle: "Chassis Isolation & Heavy Duty Anchors",
                bgImg: "assets/Rover/brakes.jpg",
                specs: { "Front Calipers": "Brembo 6-Piston Heavy-Duty Calipers", "Rear Calipers": "Brembo 4-Piston Floating Calipers", "Rotors": "Two-Piece Ventilated High-Thermal Discs", "Damping Rate": "Dynamic Response Pro Electronic Air Suspension (500 times/sec)"},
                pills: ["Pirelli Scorpion Zero All-Season", "Alloy Diameter: 23\" SV Forged", "Electronic Active Differential"]
            }
        ]
    },
    {
        brand: "Rolls-Royce",
        model: "Phantom Extended",
        imgSrc: "assets/Rolls/sideRolls.png",
        parts: [
            {
                name: "Powertrain & Propulsion",
                subtitle: "The Silent, Sovereign Twin-Turbo V12",
                bgImg: "assets/Rolls/front.jpg",
                specs: { "Engine Type": "6.75L Twin-Turbocharged V12", "Horsepower": "563 HP", "Torque": "900 Nm @ 1,700 RPM", "Redline": "5,500 RPM" },
                pills: ["VMax Track Mode", "Carbon Rotors", "Thermal Radiator"]
            },
            {
                name: "Cockpit & Infotainment",
                subtitle: "Cinematic Workspace Steering Architecture",
                bgImg: "assets/Rolls/interior.jpg",
                specs: { "Cluster Screen": "Virtual Glass-Enclosed Dashboard Instrument Cluster", "Center Display": "12.3-inch Motorized Hideaway Central Infotainment Screen", "Graphics Engine": "Custom BMW iDrive-Derived Luxury Architecture", "Sound System": "Bespoke Rolls-Royce 18-Speaker Studio System" },
                pills: ["Wireless Apple CarPlay", "Whisper-Channel Telemetry System", "Rear C-Pillar Integrated Theatre Displays"]
            },
            {
                name: "Aerodynamics & Body Management",
                subtitle: "Effortless High-Speed Fluid Isolation",
                bgImg: "assets/Rolls/rear.jpg",
                specs: { "Rear Spoiler": "Clean, Seamless Decklid Trailing Edge Flow", "Front Splitter": "Majestic Pantheon-Grille Integrated Base Damper", "Underbody": "Double-Insulated, Flat-Bottom Acoustic Underbody Shields", "Air Extractors": "Hidden Engine Bay Side Vent Relief Ducts" },
                pills: ["Drag Coeff: 0.32", "Zero-Lift High-Speed Profiling", "Sound-Insulating Foam-Filled Tire Management"]
            },
            {
                name: "Chassis & Braking Dynamics",
                subtitle: "The Flagship Camera-Guided Magic Carpet Ride",
                bgImg: "assets/Rolls/brakes.jpg",
                specs: { "Front Calipers": "Brembo Heavy-Duty 6-Piston Calipers", "Rear Calipers": "Brembo Heavy-Duty 4-Piston Calipers", "Rotors": "Over-Sized Composite Ventilated Quiet-Brake Rotors", "Damping Rate": "Magic Carpet Air Suspension with Flagbearer Camera-Scanning System" },
                pills: ["Goodyear SoundComfort Custom Seal", "Alloy Diameter: 22\" Fully-Polished Part-Faceted", "Active Rear-Wheel Steer Stability"]
            }
        ]
    }
];

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

function prepareInitialShowcase() {
    if (carImgEl) {
        carImgEl.style.transition = 'none';
        carImgEl.style.opacity = '0';
        carImgEl.style.transform = 'translate(150px, 10px) scale(0.95) rotate(1deg)';
    }
    if (carBrandEl) carBrandEl.classList.add('text-stage-top');
    if (carModelEl) carModelEl.classList.add('text-stage-top');
}
prepareInitialShowcase();

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');
    
    if (window.scrollY > 50) {
        header.style.background = '#1A1A1A';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = '#111110';
        header.style.boxShadow = 'none';
    }

    const scrollPosition = window.scrollY + 150;

    const sections = {
        home: 0,
        showcase: document.getElementById('showcase-section')?.offsetTop || 0,
        why: document.getElementById('features-section')?.offsetTop || 0,
        contact: document.getElementById('contact-section')?.offsetTop || 0,
        ins: document.getElementById('ins-section')?.offsetTop || 0,
        about: document.getElementById('about-section')?.offsetTop || 0
    };

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');

        if (scrollPosition >= sections.contact) {
            if (href === '#contact-section') link.classList.add('active');
        } else if (scrollPosition >= sections.why) {
            if (href === '#features-section') link.classList.add('active');
        } else if (scrollPosition >= sections.ins) {
            if (href === '#ins-section') link.classList.add('active');
        } else if (scrollPosition >= sections.showcase) {
            if (href === '#showcase-section') link.classList.add('active');
        } else if (scrollPosition >= sections.about) {
            if (href === '#about-section') link.classList.add('active');
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

function updateShowcase(index, direction = 'next') {
    const travelDistance = direction === 'next' ? '150px' : '-150px';
    const initialRotation = direction === 'next' ? '1deg' : '-1deg';

    if (carImgEl) {
        carImgEl.style.transition = 'none';
        carImgEl.style.opacity = '0';
        carImgEl.style.transform = `translate(${travelDistance}, 10px) scale(0.95) rotate(${initialRotation})`;
    }

    if (carBrandEl) carBrandEl.classList.remove('text-stage-center', 'text-stage-top');
    if (carModelEl) carModelEl.classList.remove('text-stage-center', 'text-stage-top');
    if (carBrandEl) carBrandEl.classList.add('text-stage-top');
    if (carModelEl) carModelEl.classList.add('text-stage-top');

    if (carImgEl) void carImgEl.offsetWidth;

    setTimeout(() => {
        if (carBrandEl) carBrandEl.textContent = carData[index].brand;
        if (carModelEl) carModelEl.textContent = carData[index].model;
        if (carImgEl) carImgEl.src = carData[index].imgSrc;

        showcaseDots.forEach(dot => dot.classList.remove('active'));
        if (showcaseDots[index]) {
            showcaseDots[index].classList.add('active');
        }

        currentExpandedPartIndex = -1;
        generateDetailsStructure(index);

        if (carBrandEl) {
            carBrandEl.classList.remove('text-stage-top');
            carBrandEl.classList.add('text-stage-center');
        }
        if (carModelEl) {
            carModelEl.classList.remove('text-stage-top');
            carModelEl.classList.add('text-stage-center');
        }

        if (carImgEl) {
            carImgEl.style.transition = 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, opacity 0.5s ease 0.25s';
            carImgEl.style.opacity = '1';
            carImgEl.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
        }
    }, 300);
}

showcaseDots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        if (dotIndex === currentIndex) return;

        const direction = dotIndex > currentIndex ? 'next' : 'prev';
        currentIndex = dotIndex;
        
        updateShowcase(currentIndex, direction);
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carData.length - 1 : currentIndex - 1;
    updateShowcase(currentIndex, 'prev');
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carData.length - 1) ? 0 : currentIndex + 1;
    updateShowcase(currentIndex, 'next');
});

detailsBtn.addEventListener('click', () => {
    currentExpandedPartIndex = -1;
    applyAccordionClasses();
    detailsOverlay.classList.add('active');
});

if (closeDetailsBtn) {
    closeDetailsBtn.addEventListener('click', () => {
        if (detailsOverlay) detailsOverlay.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        updateShowcase(0, 'next');
    }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('loading-active');

    const loaderNumEl = document.getElementById('loader-number');
    const loaderBarFill = document.getElementById('loader-bar-fill');
    const preloaderEl = document.getElementById('site-preloader');

    const counterContainer = document.querySelector('.loader-counter');

    let currentPercent = 0;
    const targetInterval = 25;

    const countEngine = setInterval(() => {
        currentPercent += Math.floor(Math.random() * 4) + 1;

        if (currentPercent >= 100) {
            currentPercent = 100;
            clearInterval(countEngine);

            if (loaderNumEl) loaderNumEl.textContent = currentPercent;
            if (loaderBarFill) loaderBarFill.style.width = `${currentPercent}%`;

            setTimeout(() => {
                if (preloaderEl) preloaderEl.classList.add('show-brand');
                if (counterContainer) {
                    counterContainer.textContent = 'Aurex';
                }

                setTimeout(() => {
                    if (preloaderEl) {
                        preloaderEl.style.opacity = '0';
                        preloaderEl.style.visibility = 'hidden';
                    }

                    document.body.classList.remove('loading-active');
                    document.body.classList.add('loading-complete');

                    if (carBrandEl) carBrandEl.textContent = carData[0].brand;
                    if (carModelEl) carModelEl.textContent = carData[0].model;
                    if (carImgEl) carImgEl.src = carData[0].imgSrc;

                }, 1200);
            }, 250);
        } else {
            if (loaderNumEl) loaderNumEl.textContent = currentPercent;
            if (loaderBarFill) loaderBarFill.style.width = `${currentPercent}%`;
        }
    }, targetInterval);
});

document.addEventListener("DOMContentLoaded", () => {
    
    const targetedSelectors = [
        // Hero
        '.hero-content > *',
        '.search-container',
        
        // About Content
        '.about-content > *',
        '.about-image-wrapper',
        
        //Showcase
        '#showcase-section .sidebar-social',
        '#showcase-section .arrow-btn',
        '.text-bg-wrapper > *',
        '.cta-container > *',
        '.showcase-pagination',
        '#panelColumnsContainer .spec-column',
        
        // How It Works
        '.steps-header',
        '.steps-grid .step-card',
        
        // Why Choose Us
        '.stat-item-box',
        '.features-heading-block > *',
        '.features-grid-cards .feature-card',
        
        // Contact Us
        '.contact-heading-block > *',
        '.contact-info-card',
        '.contact-form-card'
    ];

    targetedSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.classList.add('reveal-element'));
    });

    const applyStagger = (gridSelector, itemSelector) => {
        const grids = document.querySelectorAll(gridSelector);
        grids.forEach(grid => {
            const items = grid.querySelectorAll(itemSelector);
            items.forEach((item, index) => {
                if (index < 4) {
                    item.classList.add(`stagger-${index + 1}`);
                }
            });
        });
    };

    applyStagger('.steps-grid', '.step-card');
    applyStagger('.stats-grid-row', '.stat-item-box');
    applyStagger('.features-grid-cards', '.feature-card');
    
    applyStagger('#panelColumnsContainer', ':scope > *');

    const revealObserverOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
    };

    const elementRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    const itemsToWatch = document.querySelectorAll('.reveal-element');
    
    const initializationDelay = document.body.classList.contains('loading-active') ? 600 : 0;
    
    setTimeout(() => {
        itemsToWatch.forEach(item => {
            elementRevealObserver.observe(item);
        });
    }, initializationDelay);
});

    const showcaseObserverOptions = {
        root: null,
        threshold: 0.25
    };

    let showcaseAnimated = false;

    const showcaseTriggerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !showcaseAnimated) {
                showcaseAnimated = true;
                
                updateShowcase(0, 'next');

                observer.unobserve(entry.target);
            }
        });
    }, showcaseObserverOptions);

    const showcaseSection = document.getElementById('showcase-section');
    if (showcaseSection) {
        const obsDelay = document.body.classList.contains('loading-active') ? 1600 : 0;
        setTimeout(() => {
            showcaseTriggerObserver.observe(showcaseSection);
        }, obsDelay);
    }