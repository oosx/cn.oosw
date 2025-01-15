document.addEventListener('DOMContentLoaded', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  function checkScroll() {
    // 获取文档总高度
    const documentHeight = document.documentElement.scrollHeight;
    // 获取视口高度
    const viewportHeight = window.innerHeight;
    // 获取当前滚动位置
    const scrollPosition = window.scrollY;
    
    // 如果文档高度大于视口高度（有可滚动内容）
    if (documentHeight > viewportHeight) {
      // 计算滚动百分比
      const scrollPercent = (scrollPosition + viewportHeight) / documentHeight * 100;
      
      if (scrollPercent > 90) {
        scrollIndicator.classList.add('hidden');
      } else {
        scrollIndicator.classList.remove('hidden');
      }
    } else {
      // 如果没有可滚动内容，显示箭头
      scrollIndicator.classList.remove('hidden');
    }
  }

  // 监听滚动事件
  window.addEventListener('scroll', checkScroll);
  // 监听窗口大小变化
  window.addEventListener('resize', checkScroll);
  // 初始检查
  checkScroll();
}); 