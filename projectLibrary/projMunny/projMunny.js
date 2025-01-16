document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const galleryImages = document.querySelectorAll('.gallery-img');
    let currentImageIndex = 0;
  
    // 打开模态框并显示点击的图片
    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        currentImageIndex = index;
        updateNavigationButtons();
      });
    });
  
    // 上一张图片
    prevButton.addEventListener('click', () => {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        modalImg.src = galleryImages[currentImageIndex].src;
        updateNavigationButtons();
      }
    });
  
    // 下一张图片
    nextButton.addEventListener('click', () => {
      if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        modalImg.src = galleryImages[currentImageIndex].src;
        updateNavigationButtons();
      }
    });
  
    // 更新导航按钮状态
    function updateNavigationButtons() {
      prevButton.style.display = currentImageIndex === 0 ? 'none' : 'block';
      nextButton.style.display = currentImageIndex === galleryImages.length - 1 ? 'none' : 'block';
    }
  
    // 键盘导航
    document.addEventListener('keydown', (e) => {
      if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
          currentImageIndex--;
          modalImg.src = galleryImages[currentImageIndex].src;
          updateNavigationButtons();
        } else if (e.key === 'ArrowRight' && currentImageIndex < galleryImages.length - 1) {
          currentImageIndex++;
          modalImg.src = galleryImages[currentImageIndex].src;
          updateNavigationButtons();
        } else if (e.key === 'Escape') {
          modal.style.display = 'none';
        }
      }
    });
  
    // 关闭模态框
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }); 