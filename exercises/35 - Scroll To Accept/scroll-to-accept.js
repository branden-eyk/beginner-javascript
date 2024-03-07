const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function scrollToAccept() {
  if (!terms) {
    return; // Quit this, that item is not on the page
  }

  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // Stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
  }
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();
