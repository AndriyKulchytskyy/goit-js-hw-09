import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let insertedDelay = parseInt(delay.value);
  const insertedStep = parseInt(step.value);
  const insertedAmount = parseInt(amount.value);

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.5;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  for (let i = 1; i <= insertedAmount; i++) {
    createPromise(i, insertedDelay)
      .then(({ position, delay }) =>
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`)
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    insertedDelay += insertedStep;
  }
}
