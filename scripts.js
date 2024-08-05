document.getElementById('toggleTheme').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
});

const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = chatInput.value;
        chatBox.appendChild(message);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

const canvas = document.getElementById('whiteboardCanvas');
const ctx = canvas.getContext('2d');
let painting = false;

canvas.addEventListener('mousedown', () => {
    painting = true;
});

canvas.addEventListener('mouseup', () => {
    painting = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', (e) => {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});
