// Start Navbar
// Call Navbar
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('#nav-link');

// Start Scroll Navbar
window.addEventListener('scroll', () => {
    addColorToNavLink(this.scrollY);
    if(this.scrollY >= 10) {
        navbar.style.cssText = `position: fixed; z-index: 3; width: 100%; background-color: rgba(0, 0, 0, .4);`;
    }
    else {
        navbar.style.cssText = `position: static;`;
    }
});
// Add Function To Add Color #fff
const addColorToNavLink = (scroll) => {
    if(scroll >= 10) {
        navLink.forEach(nav => {
            nav.style.color = `#fff`;
        });
    }
    else {
        navLink.forEach(nav => { 
            nav.style.color = `#555`;
        });
    }
}
// Add Function To Add Color #fff
// End Scroll Navbar
// End Navbar
// Start Content Head
const pContentHead = document.getElementById('p-content-head');
const text = `Best app for your 
modern lifestyle `;
let i = 1;
typeWrite();
function typeWrite() {
    pContentHead.innerText = text.slice(0, i);
    i++;
    if(i >= text.length)
        i = 0;
    setTimeout(typeWrite, 200)
}
// End Content Head
// Start Features
// Start Ultimate Features
const btnShow = document.getElementById('show-all-features');
const showFeatures = document.getElementById('show-features');
btnShow.addEventListener('click', () => {
    showFeatures.classList.toggle('d-none');
});
// End Ultimate Features
// Start Get awesome features
const btnTryForFree = document.getElementById('btn-try-for-free');
const btnAnnually = document.getElementById('annually');
const getAwesomeContainer = document.getElementById('container-get-awesome');
btnPricing();
function btnPricing() {
    tryForFree();
    annually();
}
// Start Try For Free
function tryForFree() {
    btnTryForFree.addEventListener('click', () => {
        btnAnnually.classList.remove('m-c-2', 'rounded-pill', 'btn');
        btnTryForFree.classList.add('btn', 'm-c-2', 'px-3', 'rounded-pill');
        getAwesomeContainer.innerHTML = `
        <div class="row pt-5 d-flex justify-content-round justify-content-center">
            <div class="col-md-4 border border-1 mb-3 mb-lg-0 p-4 rounded-3 column me-lg-5 me-sm-0">
                <div class="header">
                    <span class="one fw-bold fs-1 mb-5 second-color">$0<span class="two fw-normal fs-5">/month</span></span>
                    <h3 class="fw-bold second-color my-2 fs-2">Business Class</h3>
                    <h5 class="text-secondary fs-6">For small teams or office</h5>
                </div>
                <ul class="list-unstyled mt-3">
                    <li class="list-group list-group-flush mb-2">Drag & Drop Builder</li>
                    <li class="list-group list-group-flush mb-2">1,000's of templates</li>
                    <li class="list-group list-group-flush mb-2">Blog Support tools</li>
                    <li class="list-group list-group-flush mb-2">eCommerce Store</li>
                </ul>
                <button class="btn m-c-2 py-2 px-4 rounded-pill">Start Free Trail</button>
            </div>
            <div class="col-md-4 border border-1 text-center p-4 rounded-3 column">
                <div class="header">
                    <span class="two fw-bold fs-1 second-color">$99<span class="two fw-normal fs-5">/month</span></span>
                    <h3 class="fw-bold second-color my-2 fs-2">Pro Master</h3>
                    <h5 class="text-secondary fs-6">For Best opportunities</h5>
                </div>
                <ul class="list-unstyled my-3">
                    <li class="list-group list-group-flush mb-2">Drag & Drop Builder</li>
                    <li class="list-group list-group-flush mb-2">1,000's of templates</li>
                    <li class="list-group list-group-flush mb-2">Blog Support tools</li>
                    <li class="list-group list-group-flush mb-2">eCommerce Store</li>
                </ul>
                <button class="btn m-c-2 py-2 px-4 rounded-pill mb-3">Start Free Trail</button>
                <h4 style="color: #c0b5fd;" class="fs-5">Or start 14 days trail</h4>
            </div>
        </div>
        `;
    });
}
// Start Function Annually
function annually() {
    btnAnnually.addEventListener('click', () => {
        btnTryForFree.classList.remove('btn', 'm-c-2', 'rounded-pill');
        btnAnnually.classList.add('m-c-2', 'rounded-pill', 'btn');
        getAwesomeContainer.innerHTML = `
            <div class="row pt-5 d-flex justify-content-round justify-content-center">
                    <div class="col-md-4 border border-1 mb-3 mb-lg-0 p-4 rounded-3 column me-lg-5 me-sm-0">
                        <div class="header">
                            <span class="one fw-bold fs-1 mb-5 second-color">$29<span class="two fw-normal fs-5">/year</span></span>
                            <h3 class="fw-bold second-color my-2 fs-2">First Class</h3>
                            <h5 class="text-secondary fs-6">For small teams or office</h5>
                        </div>
                        <ul class="list-unstyled my-3">
                            <li class="list-group list-group-flush mb-2">Drag & Drop Builder</li>
                            <li class="list-group list-group-flush mb-2">1,500's of templates</li>
                            <li class="list-group list-group-flush mb-2">Blog Support tools</li>
                            <li class="list-group list-group-flush mb-2">eCommerce Store</li>
                        </ul>
                        <button class="btn m-c-2 py-2 px-4 rounded-pill">Buy Now</button>
                    </div>
                    <div class="col-md-4 border border-1 text-center p-4 rounded-3 column">
                        <div class="header">
                            <span class="two fw-bold fs-1 second-color">$40<span class="two fw-normal fs-5">/year</span></span>
                            <h3 class="fw-bold second-color my-2 fs-2">1st Pro Master</h3>
                            <h5 class="text-secondary fs-6">For Best opportunities</h5>
                        </div>
                        <ul class="list-unstyled my-3">
                            <li class="list-group list-group-flush mb-2">Drag & Drop Builder</li>
                            <li class="list-group list-group-flush mb-2">2,050's of templates</li>
                            <li class="list-group list-group-flush mb-2">Blog Support tools</li>
                            <li class="list-group list-group-flush mb-2">eCommerce Store</li>
                        </ul>
                        <button class="btn m-c-2 py-2 px-4 rounded-pill mb-3">Buy Now</button>
                    </div>
            </div>
        `;
    });
}
// End Function Annually
// End Try For Free
// End Get awesome features
// End Features
// Start Testimonial
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const testimonial = document.querySelector('.testimonials .testimonial').children;
let current = 0;
changeTestimonial();
function changeTestimonial() {
    arrow_right();
    arrow_left();
    if(current <= 0) {
        arrowLeft.style.cssText = `pointer-events: none; color: rgba(0, 0, 0, 0.3);`;
    }
}
// Function Arrow Right
function arrow_right() {
    arrowRight.addEventListener('click', () => {
        current++;
        removeActiveTest();
        testimonial[current].classList.add('active');
        if(current >= testimonial.length - 2) {
            arrowRight.style.cssText = `pointer-events: none; color: rgba(0, 0, 0, 0.3);`;
        }
        else {
            arrowLeft.style.cssText = `cursor: pointer; color: rgb(0, 0, 0);`;
        }
    });
}
// Function Arrow Right
// Function Arrow Left
function arrow_left() {
    arrowLeft.addEventListener('click', () => {
        current--;
        removeActiveTest();
        testimonial[current].classList.add('active');
        if(current <= 0) {
            arrowLeft.style.cssText = `pointer-events: none; color: rgba(0, 0, 0, 0.3);`;
        }
        else {
            arrowRight.style.cssText = `cursor: pointer; color: rgb(0, 0, 0);`;
        }
    });
}
// Function Arrow Left
// Function Remove Class Active Testimonial
function removeActiveTest() {
    for(let test of testimonial) {
        test.classList.remove('active');
    }
}
// Function Remove Class Active Testimonial
// End Testimonial
// Start FAQ
const toggles = document.querySelectorAll('.faq .info');
togglesFaq();
function togglesFaq() {
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('faq-toggle');
        });
    });
}
// End FAQ