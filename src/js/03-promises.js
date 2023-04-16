import Notiflix from 'notiflix';

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, onSubmit);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      rej(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

function onSubmit(event) {
  event.preventDefault();
  const submitFirstDelay = Number(form.elements.delay.value);
  const submitDelay = Number(form.elements.step.value);
  let submitPosition = Number(form.elements.amount.value);

  setTimeout(() => {
    for (let index = 0; index < submitPosition; index++) {
      setTimeout(() => {
        createPromise(index + 1, submitDelay * (index + 1))
          .then(value => {
            Notiflix.Notify.success(value);
          })
          .catch(value => {
            Notiflix.Notify.failure(value);
          });
      }, submitDelay * (index));
    }
  }, submitFirstDelay);
}
