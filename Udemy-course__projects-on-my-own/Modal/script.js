'use strict';
let showModal = document.getElementsByClassName('show-modal');
let show1 = showModal[0];
let show2 = showModal[1];
let show3 = showModal[2];
const hiddenShow = document.getElementsByClassName('modal hidden')[0];
const hiddenOverlay = document.getElementsByClassName('overlay hidden')[0];
const closeModal = document.getElementsByClassName('close-modal')[0];

show1.addEventListener('click', function () {
  hiddenShow.classList.remove('hidden');
  hiddenOverlay.classList.remove('hidden');
});
show2.addEventListener('click', function () {
  hiddenShow.classList.remove('hidden');
  hiddenOverlay.classList.remove('hidden');
});
show3.addEventListener('click', function () {
  hiddenShow.classList.remove('hidden');
  hiddenOverlay.classList.remove('hidden');
});
closeModal.addEventListener('click', function () {
  hiddenShow.classList.add('hidden');
  hiddenOverlay.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hiddenShow.classList.add('hidden');
    hiddenOverlay.classList.add('hidden');
  }
});
