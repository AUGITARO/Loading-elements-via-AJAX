const buttonElement = document.querySelector(".load");
const containerElement = document.querySelector(".container");

buttonElement.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './server.php');

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            const jsonData = xhr.response;
            const objectData = JSON.parse(jsonData);

            let delay = 200;

            objectData.forEach((item, i) => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.textContent = item.property;

                containerElement.append(cardElement);
                cardElement.style.transitionDelay = `${delay * i}ms`;

                setTimeout(() => {
                    cardElement.style.opacity = '1';
                    cardElement.style.top = '0';
                }, 100);

                cardElement.scrollIntoView(0);

                // containerElement.insertAdjacentHTML(
                //     'beforeend',
                //     `<div class="card">${item.property}</div>`
                // );
            });

            // for (const item of objectData) {
            //     containerElement.insertAdjacentHTML(
            //         'beforeend',
            //         `<div class="card">${item.property}</div>`
            //     );
            // }
        }
    });

    xhr.send();
});

// setInterval(() => {
//     buttonElement.click();
// }, 1000);
