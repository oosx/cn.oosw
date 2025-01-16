document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');
  const projectGrid = document.querySelector('.project-grid');

  // 项目数据
  const projects = {
    python: [

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
        title: 'Munny', 
        link: '/projectLibrary/projMunny/projMunny.html',
        description: 'Multi-currency Accounting WeChat Mini Program'
      }
    ],
    css3: [
      { 
        title: 'Munny', 
        link: '/projectLibrary/projMunny/projMunny.html',
        description: 'Multi-currency Accounting WeChat Mini Program'
      }
    ],
    javascript: [
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

  function updateProjects(skill) {
    projectGrid.innerHTML = ''; // 清空现有项目
    const skillProjects = projects[skill] || [];
    
    // 如果没有项目，隐藏容器
    if (skillProjects.length === 0) {
      projectGrid.style.display = 'none';
      return;
    }

    // 显示项目卡片
    projectGrid.style.display = 'grid';
    skillProjects.forEach(project => {
      projectGrid.appendChild(createProjectCard(project));
    });

    // 处理不满三个的情况
    if (skillProjects.length < 3) {
      projectGrid.style.gridTemplateColumns = `repeat(${skillProjects.length}, 1fr)`;
    } else {
      projectGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
  }

  // 处理技能卡片点击
  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      // 移除其他卡片的激活状态并恢复原始图标
      skillCards.forEach(c => {
        c.classList.remove('active');
        const img = c.querySelector('img');
        if (img.src.includes('_for_dark')) {
          img.src = img.src.replace('_for_dark', '_for_light');
        }
      });

      // 激活当前卡片并切换图标
      card.classList.add('active');
      const img = card.querySelector('img');
      if (img.src.includes('_for_light')) {
        img.src = img.src.replace('_for_light', '_for_dark');
      }

      // 更新相关项目显示
      const skill = card.dataset.skill;
      updateProjects(skill);
    });
  });

  // 初始化激活状态的卡片图标
  const initialActive = document.querySelector('.skill-card.active');
  if (initialActive) {
    const img = initialActive.querySelector('img');
    if (img.src.includes('_for_light')) {
      img.src = img.src.replace('_for_light', '_for_dark');
    }
    updateProjects(initialActive.dataset.skill);
  }
});
