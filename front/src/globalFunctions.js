
export function scrollToSection(selector, event) {
    event.preventDefault();
    const element = document.querySelector(selector);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        history.pushState({}, '', selector);
    }
}
export function handlePopstate() {
    const sectionId = window.location.hash || "#home";

    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
  