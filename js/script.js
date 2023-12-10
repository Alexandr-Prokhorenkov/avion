let heart = document.querySelector('.heart');
let heart2 = document.querySelector('.heart2');
let likesNumer = document.querySelector('.likes-number');
let likesNumer2 = document.querySelector('.likes-number2');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumer.textContent--;} else {likesNumer.textContent++;}
  heart.classList.toggle('added');
}

heart2.onclick = function () {
  if (heart2.classList.contains('added')) {
    likesNumer2.textContent--;} else {likesNumer2.textContent++;}
  heart2.classList.toggle('added');
}


