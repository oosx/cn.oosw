document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');
  const projectGrid = document.querySelector('.project-grid');

  // 项目数据
  const projects = {
    python: [
      { 
        title: 'AI Image Generator', 
        link: '#',
        description: 'Using stable diffusion to generate images'
      },
      { 
        title: 'Data Analysis Dashboard', 
        link: '#',
        description: 'Real-time data visualization platform'
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
        title: 'Interactive Portfolio', 
        image: '/projects/portfolio.jpg', 
        link: '#',
        description: 'Personal portfolio website with animations'
      },
      { 
        title: 'Weather App', 
        image: '/projects/weather.jpg', 
        link: '#',
        description: 'Real-time weather forecast application'
      },
      { 
        title: 'Task Manager', 
        image: '/projects/tasks.jpg', 
        link: '#',
        description: 'Drag and drop task management system'
      }
    ],
    css3: [
      { 
        title: 'E-commerce Platform', 
        image: '/projects/ecommerce.jpg', 
        link: '#',
        description: 'Full-stack online shopping platform'
      },
      { 
        title: 'Chat Application', 
        image: '/projects/chat.jpg', 
        link: '#',
        description: 'Real-time messaging system'
      }
    ],
    javascript: [
      { 
        title: 'Game Engine', 
        image: '/projects/game-engine.jpg', 
        link: '#',
        description: '2D game engine with physics simulation'
      }
    ],
    swiftui: [
      { 
        title: 'iOS App', 
        image: '/projects/game-engine.jpg', 
        link: '#',
        description: '2D game engine with physics simulation'
      }
    ],
    mysql: [
      { 
        title: 'Social Media App', 
        image: '/projects/social.jpg', 
        link: '#',
        description: 'Instagram-like photo sharing platform'
      },
      { 
        title: 'Movie Database', 
        image: '/projects/movies.jpg', 
        link: '#',
        description: 'Search and browse movies with TMDB API'
      },
      { 
        title: 'Code Editor', 
        image: '/projects/editor.jpg', 
        link: '#',
        description: 'Online code editor with syntax highlighting'
      }
    ],
    timeseries: [
      { 
        title: 'Blog Platform', 
        image: '/projects/blog.jpg', 
        link: '#',
        description: 'Personal blog with CMS'
      },
      { 
        title: 'E-learning Dashboard', 
        image: '/projects/learning.jpg', 
        link: '#',
        description: 'Online course management system'
      }
    ],
    deeplearning: [
      { 
        title: 'Face Recognition', 
        image: '/projects/face.jpg', 
        link: '#',
        description: 'Real-time face detection and recognition'
      },
      { 
        title: 'Stock Prediction', 
        image: '/projects/stocks.jpg', 
        link: '#',
        description: 'ML-based stock price prediction'
      },
      { 
        title: 'Recommendation System', 
        image: '/projects/recommend.jpg', 
        link: '#',
        description: 'Content-based recommendation engine'
      },
      { 
        title: 'Sentiment Analysis', 
        image: '/projects/sentiment.jpg', 
        link: '#',
        description: 'Real-time social media sentiment analysis'
      },
      { 
        title: 'Image Classification', 
        image: '/projects/classification.jpg', 
        link: '#',
        description: 'Multi-label image classification system'
      }
    ],
    photoshop: [
      { 
        title: 'Neural Style Transfer', 
        image: '/projects/style-transfer.jpg', 
        link: '#',
        description: 'Artistic style transfer using deep learning'
      },
      { 
        title: 'Language Model', 
        image: '/projects/nlp.jpg', 
        link: '#',
        description: 'Natural language processing model'
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
