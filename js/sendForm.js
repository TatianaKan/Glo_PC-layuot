const sendForm = () => {
  const form = document.querySelector('.modal');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const sendObj = {};

    formData.forEach((name, value) => {
      sendObj[value] = name;
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((json) => alert('Данные отправлены успешно'))
      .catch((error) => alert('Данные отправлены с ошибкой' + error.message))
      .finally(() => form.reset());
  });
};

sendForm();