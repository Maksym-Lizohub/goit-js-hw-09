import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', createManyPromises);

function createManyPromises(e) {
  e.preventDefault();
  const inputNumber = e.target;

  let delay = Number(inputNumber.delay.value);
  const step = Number(inputNumber.step.value);
  const amount = Number(inputNumber.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ i, delay }) => {
        Notify.success(`Fulfilled promise ${i} in ${delay}ms`);
      }, delay)
      .catch(({ i, delay }) => {
        Notify.failure(`Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
