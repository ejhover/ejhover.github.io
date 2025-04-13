function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you for your message!');
}

document.addEventListener("DOMContentLoaded", () => {
  new Typed('#typed', {
    strings: ["Welcome to my website", "Emmet Hoversten."],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 800,
    loop: false
  });
});

function resizeTextToFit(selector, minFontSize = 8, maxFontSize = 20) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    let fontSize = maxFontSize;

    // Create a temporary clone to measure text size
    const clone = el.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.height = 'auto';
    clone.style.width = el.offsetWidth + 'px';
    clone.style.fontSize = fontSize + 'px';
    clone.style.whiteSpace = 'normal';
    clone.style.lineHeight = getComputedStyle(el).lineHeight;
    document.body.appendChild(clone);

    while (clone.scrollHeight > el.offsetHeight && fontSize > minFontSize) {
      fontSize--;
      clone.style.fontSize = fontSize + 'px';
    }

    el.style.fontSize = fontSize + 'px';
    document.body.removeChild(clone);
  });
}

window.addEventListener('load', () => resizeTextToFit('.resize-text'));

window.addEventListener('resize', () => resizeTextToFit('.resize-text'));
