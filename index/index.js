// 删除整个文件内容

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded'); // 調試信息

    // 創建 tooltip 元素
    const tooltip = document.createElement('div');
    tooltip.className = 'hover-tooltip';
    document.body.appendChild(tooltip);

    const links = document.querySelectorAll('.skill-link');
    console.log('Found skill links:', links.length); // 調試信息

    // 處理所有技能圖標
    links.forEach(link => {
        link.addEventListener('mouseenter', e => {
            const skillName = e.currentTarget.dataset.skillName;
            console.log('Hover on:', skillName); // 調試信息
            const rect = e.currentTarget.getBoundingClientRect();
            
            tooltip.textContent = skillName;
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
            
            const tooltipRect = tooltip.getBoundingClientRect();
            const left = rect.left + (rect.width / 2);
            const top = rect.bottom + 10;

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        });

        link.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
    });

    // 滾動處理
    const triangles = document.querySelectorAll('.scroll-hint');
    let isScrolling;

    window.addEventListener('scroll', () => {
        triangles.forEach(triangle => {
            triangle.style.opacity = '0';
        });

        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            triangles.forEach(triangle => {
                triangle.style.opacity = '1';
            });
        }, 500);
    });
});
