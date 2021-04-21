let face = document.querySelector('#face');
document.addEventListener('mousemove', logKey);

function logKey(e) {
    face.style.top = `${e.clientY}px`;
    face.style.left = `${e.clientX}px`;
    face.style.transform = "translate(-50%, -50%)";
}
