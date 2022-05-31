const bannerCookies = document.getElementById('banner-cookies');
const consentCookies = document.getElementById('banner-button-accept');
const declineCookies = document.getElementById('banner-button-decline');
const prefCookies = document.getElementById('banner-button-pref');
const cookiesPrefBanner = document.getElementById('cookies-preferences');
const validatePref = document.getElementById('validate-pref');
const checkBoxStat = document.getElementById('checkbox-stat');

visibilityCookiesBox();
visibilityCheckBox();

function visibilityCookiesBox() {
    if(localStorage.getItem('consent-cookies')) {
        bannerCookies.classList.add('hidden-consent');
    };
};

consentCookies.addEventListener('click', () => {
    localStorage.setItem('consent-cookies', 'yes');
    visibilityCookiesBox();
});
declineCookies.addEventListener('click', () => {
    localStorage.setItem('consent-cookies', 'no');
    visibilityCookiesBox();
});


prefCookies.addEventListener('click', () => {
    bannerCookies.classList.add('hidden-consent');
    cookiesPrefBanner.classList.replace('hidden-consent', 'visible-consent');
})

validatePref.addEventListener('click', () => {
    if(checkBoxStat.checked == true) {
        localStorage.setItem('consent-cookies', 'yes');
        cookiesPrefBanner.classList.replace('visible-consent', 'hidden-consent');
    }
    if(checkBoxStat.checked == false) {
        localStorage.setItem('consent-cookies', 'no');
        cookiesPrefBanner.classList.replace('visible-consent', 'hidden-consent');
    }
})

function visibilityCheckBox() {
    if(!localStorage.getItem('consent-cookies')) {
        checkBoxStat.checked = false;
    }
    if(localStorage.getItem('consent-cookies') &&  localStorage.getItem('consent-cookies') === 'no') {
        checkBoxStat.checked = false;
    }
    if(localStorage.getItem('consent-cookies') &&  localStorage.getItem('consent-cookies') === 'yes') {
        checkBoxStat.checked = true;
    }
}