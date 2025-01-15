const projectData = [
  {
    title: "First Project",
    description: "Brief description of the project goes here. This explains what the project does and its main features.",
    tags: ["React", "Node.js", "MongoDB"],
    projectLink: "#",
    paperLink: "#"
  },
  {
    title: "Second Project",
    description: "Description of another interesting project. Highlighting key features and technologies used.",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    projectLink: "#",
    paperLink: "#"
  },
  {
    title: "Third Project",
    description: "A third exciting project showcasing different technologies and innovative solutions.",
    tags: ["Vue.js", "Firebase", "Machine Learning"],
    projectLink: "#",
    paperLink: "#"
  }
];

// 创建项目卡片的函数
function createProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-info">
        <h2>${project.title}</h2>
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

// 渲染所有项目
document.addEventListener('DOMContentLoaded', () => {
  const projectGrid = document.querySelector('.project-grid');
  projectGrid.innerHTML = projectData.map(project => createProjectCard(project)).join('');
});
