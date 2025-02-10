document.querySelectorAll('.card').forEach(card => {
    const glow = card.querySelector('.glow');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glow.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
        
        // Calculate the percentage of mouse position
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        
        // Update the gradient position
        card.style.setProperty('--x', `${percentX}%`);
        card.style.setProperty('--y', `${percentY}%`);
    });
});