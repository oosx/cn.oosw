document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');
  const projectGrid = document.querySelector('.project-grid');

  // 项目数据
  const projects = {
    python: [
      { 
        title: 'Research on Quasi-Biweekly to Intraseasonal Extreme Events in Hong Kong from 1885 to 2022', 
        link: '/projectLibrary/projQBIE/projQBIE.html',
        description: 'Master\'s Thesis Project'
      }
    ],
    wechatminiprogram: [
      { 
        title: 'Munny', 
        link: '/projectLibrary/projMunny/projMunny.html',
        description: 'Multi-currency Accounting WeChat Mini Program'
      }
    ],
    html5: [
      { 
        title: 'OSUN', 
        link: '/projectLibrary/projOSUN/projOSUN.html',
        description: 'Personal Website: http://www.oosw.cn/'
      },
      { 
        title: 'Munny', 
        link: '/projectLibrary/projMunny/projMunny.html',
        description: 'Multi-currency Accounting WeChat Mini Program'
      }
    ],
    css3: [
      { 
        title: 'OSUN', 
        link: '/projectLibrary/projOSUN/projOSUN.html',
        description: 'Personal Website: http://www.oosw.cn/'
      },
      { 
        title: 'Munny', 
        link: '/projectLibrary/projMunny/projMunny.html',
        description: 'Multi-currency Accounting WeChat Mini Program'
      }
    ],
    javascript: [
      { 
        title: 'OSUN', 
        link: '/projectLibrary/projOSUN/projOSUN.html',
        description: 'Personal Website: http://www.oosw.cn/'
      },
      { 
        title: 'Munny', 
        link: '/projectLibrary/projMunny/projMunny.html',
        description: 'Multi-currency Accounting WeChat Mini Program'
      }
    ],
    swiftui: [
  
    ],
    mysql: [

    ],
    timeseries: [
      { 
        title: 'Research on Quasi-Biweekly to Intraseasonal Extreme Events in Hong Kong from 1885 to 2022', 
        link: '/projectLibrary/projQBIE/projQBIE.html',
        description: 'Master\'s Thesis Project'
      }
    ],
    machinelearning: [

    ],
    deeplearning: [

    ],
    photoshop: [
      { 
        title: 'X-Plane 11 Aircraft Repaint', 
        link: '/projectLibrary/projX-Plane11AircraftRepaint/projX-Plane11AircraftRepaint.html',
        description: 'Flight Simulator Aircraft Repaint'
      }
    ]
  };

  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // 如果有链接，添加点击事件
    if (project.link) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = project.link;
        });
    }
    
    card.innerHTML = `
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;
    return card;
  }

  // 處理技能卡片點擊
  function handleSkillCardClick(skillCard) {
    const skillId = skillCard.dataset.skill;
    
    // 更新卡片狀態
    document.querySelectorAll('.skill-card').forEach(card => {
      card.classList.remove('active');
      // 恢復為淺色圖標
      const img = card.querySelector('img');
      const src = img.src;
      img.src = src.replace('_for_dark', '_for_light');
    });
    
    skillCard.classList.add('active');
    // 切換為深色圖標
    const img = skillCard.querySelector('img');
    const src = img.src;
    img.src = src.replace('_for_light', '_for_dark');

    // 更新項目顯示
    updateProjects(skillId);
  }

  // 更新項目顯示
  function updateProjects(skillId) {
    projectGrid.innerHTML = ''; // 清空現有項目

    // 根據技能篩選並顯示項目
    const filteredProjects = projects[skillId] || [];
    filteredProjects.forEach(project => {
      const projectCard = createProjectCard(project);
      projectGrid.appendChild(projectCard);
    });
  }

  // 處理 URL 錨點
  function handleHashChange() {
    const hash = window.location.hash;
    if (hash) {
      const skillId = hash.substring(1); // 移除 # 符號
      const skillCard = document.querySelector(`.skill-card[data-skill="${skillId}"]`);
      if (skillCard) {
        // 更新卡片和項目
        handleSkillCardClick(skillCard);
        // 平滑滾動到該卡片
        skillCard.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // 為所有技能卡片添加點擊事件
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => handleSkillCardClick(card));
  });

  // 監聽 URL 變化
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange(); // 初始加載時處理
});
