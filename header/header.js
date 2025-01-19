document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const githubIcon = document.querySelector('.github-icon img');
  const instagramIcon = document.querySelector('.instagram-icon img');
  
  // 检查本地存储中的主题设置
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateIcons('dark');
    themeToggle.checked = true;
  }

  // 更新图标函数
  function updateIcons(theme) {
    if (theme === 'dark') {
      githubIcon.src = '/header/img/github/github_for_dark.svg';
      instagramIcon.src = '/header/img/instagram/instagram_for_dark.svg';
    } else {
      githubIcon.src = '/header/img/github/github_for_light.svg';
      instagramIcon.src = '/header/img/instagram/instagram_for_light.svg';
    }
  }

  // 监听切换事件
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        updateIcons('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        updateIcons('light');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // 处理邮箱复制功能
  const emailLink = document.getElementById('copyEmail');
  const notification = document.getElementById('copyNotification');
  const overlay = document.getElementById('overlay');
  const successSound = new Audio('/header/sound/apple-pay-success.mp3');
  successSound.volume = 0.5;

  if (emailLink) {
    const email = emailLink.dataset.email;
    
    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        overlay.classList.add('show');
        notification.classList.add('show');
        
        setTimeout(() => {
          successSound.play().catch(error => {
            console.log('Audio playback failed:', error);
          });
        }, 1000);
        
        setTimeout(() => {
          overlay.classList.remove('show');
          notification.classList.remove('show');
        }, 2500);
      });
    });
  }
});