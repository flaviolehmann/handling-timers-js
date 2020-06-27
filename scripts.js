const speed = 100;
let number = 0;
let shouldPause = true;
let shouldReset = false;

const timer = () => {
  document.getElementById('logger-content').innerHTML = number;
  if (!shouldPause) {
    number = number + 1;
  }

  if (shouldReset) {
    number = 0;
    shouldReset = false;
  }
  setTimeout(() => timer(), speed);
}

[...document.getElementsByTagName('button')].forEach(button => button.addEventListener('click', event => {
  switch(event.target.innerHTML) {
    case 'INICIAR': {
      shouldPause = false;
      break;
    }
    case 'PAUSAR':
      shouldPause = true;
      break;
    case 'RESETAR':
      shouldReset = true;
      break;
  }
}));

document.addEventListener('DOMContentLoaded', () => timer());