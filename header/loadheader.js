// 加载 header
async function loadHeader() {
    try {
      const response = await fetch('/header/header.html');
      const html = await response.text();
      document.body.insertAdjacentHTML('afterbegin', html);
    } catch (error) {
      console.error('Error loading header:', error);
    }
}