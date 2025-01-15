document.addEventListener('DOMContentLoaded', () => {
    const texts = ['WU Kechen', 'NG Kheuzen', 'NG Or Sun','Osun'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 150;
    const erasingDelay = 30;
    const newTextDelay = 3000;
  
    function type() {
      const currentText = texts[textIndex];
      const typingElement = document.getElementById('typing-text');
  
      if (isDeleting) {
        // 删除文字
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // 输入文字
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
  
      // 处理删除/输入循环
      if (!isDeleting && charIndex === currentText.length) {
        // 完成输入，等待后开始删除
        isDeleting = true;
        setTimeout(type, newTextDelay);
      } else if (isDeleting && charIndex === 0) {
        // 完成删除，切换到下一个文本
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingDelay);
      } else {
        // 继续删除或输入
        setTimeout(type, isDeleting ? erasingDelay : typingDelay);
      }
    }
  
    // 开始打字效果
    type();
  });