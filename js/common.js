const box = document.querySelector('.box');
const body = document.querySelector('.wrap');
body.addEventListener('mousemove',position);
body.addEventListener('mouseleave',resetBox)
box.addEventListener('mouseenter',boxStop)
let rect;
function position(e) {
  rect = box.getBoundingClientRect();
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  calc(mouseX,mouseY);
}
function calc(mouseX,mouseY) {
  let centerX = rect.top + rect.height/2;
  let centerY = rect.left + rect.width/2;
  let x = (mouseX - centerY)/(body.clientWidth/2);
  let y = (mouseY - centerX)/(body.clientHeight/2);
  boxMove(x,y);
}
function boxMove(x,y) {
  let rX = y * -5;
  let rY = x * 5;
  let translateItem =  (rY/360)*100+'%,'+(rX/360)*-100+'%';
  box.style.transform = 'perspective(1000px) rotateX('+rX+'deg) rotateY('+rY+'deg) translate('+translateItem+')';
  box.style.transition = 'all 80ms';
}
function boxStop() {
  box.style.transform = 'perspective(1000px) scale(1.05)';
  box.style.transition = 'all 240ms';
}
function resetBox() {
  box.style.transform = 'perspective(1000px) scale(1)';
  box.style.transition = 'all 240ms';
}