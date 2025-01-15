const projectData = [
  {
    title: "Pinned Project",
    description: "This is a pinned project that will always appear at the top.",
    tags: ["React", "Node.js", "MongoDB"],
    projectLink: "#",
    paperLink: "#",
    year: 2024,
    month: 3,
    pinned: true
  },
  {
    title: "Latest Project",
    description: "This is the latest project in 2024.",
    tags: ["Python", "TensorFlow"],
    projectLink: "#",
    paperLink: "#",
    year: 2024,
    month: 2
  },
  {
    title: "Old Project",
    description: "This is an older project from 2023.",
    tags: ["Vue.js", "Firebase"],
    projectLink: "#",
    paperLink: "#",
    year: 2023,
    month: 12
  },
  {
    title: "Old Project",
    description: "This is an older project from 2023.",
    tags: ["Vue.js", "Firebase"],
    projectLink: "#",
    paperLink: "#",
    year: 2022,
    month: 7
  },
  {
    title: "Old Project",
    description: "This is an older project from 2023.",
    tags: ["Vue.js", "Firebase"],
    projectLink: "#",
    paperLink: "#",
    year: 2022,
    month: 10
  },
  {
    title: "Old Project",
    description: "This is an older project from 2023.",
    tags: ["Vue.js", "Firebase"],
    projectLink: "#",
    paperLink: "#",
    year: 2022,
    month: 10
  },
  {
    title: "Old Project",
    description: "This is an older project from 2023.",
    tags: ["Vue.js", "Firebase"],
    projectLink: "#",
    paperLink: "#",
    year: 2019,
    month: 10
  }
];

function createProjectCard(project, showPinned = true) {
  const date = new Date(project.year, project.month - 1);
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  
  return `
    <div class="project-card ${project.pinned && showPinned ? 'pinned' : ''}">
      <div class="project-info">
        <div class="project-header">
          <h2>${project.title}</h2>
          <span class="project-date">${formattedDate}</span>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.projectLink}" class="project-link">View Project →</a>
          <a href="${project.paperLink}" class="project-link paper-link">View Paper →</a>
        </div>
      </div>
    </div>
  `;
}

function renderProjects() {
  const projectGrid = document.querySelector('.project-grid');
  const yearNav = document.querySelector('.year-nav ul');
  
  const years = [...new Set(projectData.map(p => p.year))].sort((a, b) => b - a);
  
  yearNav.innerHTML = `
    <li data-year="pinned">Pinned</li>
    ${years.map(year => `<li data-year="${year}">${year}</li>`).join('')}
  `;

  let html = '';
  
  const pinnedProjects = projectData.filter(p => p.pinned);
  if (pinnedProjects.length > 0) {
    html += `
      <div class="project-year" id="year-pinned">
        <div class="project-grid">
          ${pinnedProjects.map(project => createProjectCard(project, true)).join('')}
        </div>
      </div>
    `;
  }

  years.forEach(year => {
    const yearProjects = projectData.filter(p => p.year === year);
    if (yearProjects.length > 0) {
      html += `
        <div class="project-year" id="year-${year}">
          <h2>${year}</h2>
          <div class="project-grid">
            ${yearProjects.map(project => createProjectCard(project, false)).join('')}
          </div>
        </div>
      `;
    }
  });

  projectGrid.innerHTML = html;

  // 添加滚动监听来更新年份导航的激活状态
  const yearSections = document.querySelectorAll('.project-year');
  const yearLinks = document.querySelectorAll('.year-nav li');

  function updateActiveYear() {
    let currentYear = null;
    const windowHeight = window.innerHeight;
    const middleOfScreen = windowHeight / 2;

    yearSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;
      
      if (Math.abs(sectionMiddle - middleOfScreen) < windowHeight / 2) {
        currentYear = section.id.replace('year-', '');
      }
    });

    // 只更新年份的激活状态
    yearLinks.forEach(link => {
      if (link.dataset.year === currentYear) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveYear);
  updateActiveYear();  // 初始化时调用一次

  // 年份点击事件
  yearLinks.forEach(li => {
    li.addEventListener('click', () => {
      const year = li.dataset.year;
      const yearSection = document.getElementById(`year-${year}`);
      
      // 直接滚动到年份区块的顶部
      yearSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // 设置为 'start' 使其对齐到屏幕顶部
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', renderProjects); 