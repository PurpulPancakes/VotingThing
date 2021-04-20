let face = document.getElementById("face");
// let x = e.clientX / innerWidth;
// let y = e.clientY / innerHeight;
// document.addEventListener('mousemove', findMouse);

function findMouse(e) {
    face.style.position = "fixed";
    face.style.position.top = `${e.clientX / innerWidth}px`;
    face.style.position.left = `${e.clientY / innerHeight}px`;
}

// const root = document.documentElement;
 
// document.addEventListener('mousemove', evt => {
//     let x = evt.clientX / innerWidth;
//     let y = evt.clientY / innerHeight;
 
//     root.style.setProperty('--mouse-x', x);
//     root.style.setProperty('--mouse-y', y);
// });

// document.addEventListener('mousemove', findMouse)

// function findMouse(){
//     face.style.position = "fixed";
//     face.style.position.top = `${x}px`;
//     face.style.position.left = `${y}px`;
// }