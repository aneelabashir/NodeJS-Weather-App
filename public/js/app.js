


const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const messgaeone = document.querySelector('#message-1')

const messgaetwo = document.querySelector('#message-2');




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    console.log('testinggg!' + location);
    messgaeone.textContent = 'Loading...';
    messgaetwo.textContent = '';
    
    fetch('http://localhost:3000/weather?city=' + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                messgaeone.textContent = data.error;
            }
            else {
                messgaeone.textContent = 'Lahore temprate: ' +  data.temperature;
                messgaetwo.textContent =  'Wind speed: ' + data.wind_speed;
                console.log(data);
            }
        })

    });
})

