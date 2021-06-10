
const input = document.querySelector('.input-quantity')

document.getElementById('decrease-btn').addEventListener('click', function () {
  if (input.value > 1) {
    input.value = parseInt(input.value) - 1
  }
})
document.getElementById('increase-btn').addEventListener('click', function () {
  if (input.value < 10) {
    input.value = parseInt(input.value) + 1
  }
})