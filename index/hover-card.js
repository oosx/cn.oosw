document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.avatar');
  let hoverCard = null;
  let hoverText = 'Loading...';

  // 读取文本文件
  fetch('/index/hover-text.txt')
    .then(response => response.text())
    .then(text => {
      // 将文本分成数组
      const lines = text.trim().split('\n');
      // 在第二行前添加位置图标
      if (lines.length > 1) {
        const locationIcon = '<img src="/index/img/location.svg" class="location-icon" alt="location">';
        lines[1] = locationIcon + lines[1];
      }
      // 重新组合文本
      hoverText = lines.join('<br>');
    })
    .catch(error => {
      console.error('Error loading hover text:', error);
      hoverText = 'Shot in Singapore';
    });

  // 创建悬浮卡片
  function createHoverCard() {
    const card = document.createElement('div');
    card.className = 'hover-card';
    card.innerHTML = hoverText; // 使用 innerHTML 而不是 textContent
    document.body.appendChild(card);
    return card;
  }

  // 更新卡片位置
  function updateCardPosition(e) {
    if (hoverCard) {
      hoverCard.style.left = `${e.clientX}px`;
      hoverCard.style.top = `${e.clientY}px`;
    }
  }

  // 鼠标进入头像
  avatar.addEventListener('mouseenter', () => {
    if (!hoverCard) {
      hoverCard = createHoverCard();
      setTimeout(() => {
        hoverCard.style.opacity = '1';
      }, 10);
    }
  });

  // 鼠标在头像上移动
  avatar.addEventListener('mousemove', updateCardPosition);

  // 鼠标离开头像
  avatar.addEventListener('mouseleave', () => {
    if (hoverCard) {
      hoverCard.style.opacity = '0';
      setTimeout(() => {
        hoverCard.remove();
        hoverCard = null;
      }, 200);
    }
  });
}); 