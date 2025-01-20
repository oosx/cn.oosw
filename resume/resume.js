// 等待 PDF 加载完成后再设置下载事件
document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll(".pdf-option");
  const viewer = document.getElementById("viewer");
  
  // 加载并显示 PDF
  function loadPDF(path) {
    if (!path && options[0]) {
      path = options[0].dataset.pdf;
    }
    if (path) {
      // 使用完整的 URL 路径
      const fullPath = window.location.origin + path;
      console.log('Loading PDF:', fullPath);  // 调试用
      viewer.src = fullPath;
    }
  }

  // 设置事件监听
  options.forEach((option) => {
    const downloadLink = option.querySelector('.download-link');
    if (downloadLink) {
      // 设置完整的 URL 路径
      const fullPath = window.location.origin + downloadLink.getAttribute('href');
      downloadLink.href = fullPath;
    }

    option.addEventListener("click", function(e) {
      if (e.target.closest('.download-link')) {
        return;
      }
      
      options.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");
      const pdfPath = this.dataset.pdf;
      loadPDF(pdfPath);
    });
  });

  // 初始加载第一个 PDF
  loadPDF();
}); 