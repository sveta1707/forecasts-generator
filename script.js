/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector('.forecast-btn');

function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
            }

button.addEventListener('click', function() {
    let predictionText = "";

    const randomNumber = generateRandomNumber(0, 6);
    const probability = generateRandomNumber(0, 101);

if (randomNumber == 1) {
    predictionText = "Ваше сердце скоро вспыхнет от любви.";
    } else if (randomNumber == 2) {
    predictionText = "Вы скоро найдете новую работу, которая принесет вам успех.";
    } else if (randomNumber == 3) {
    predictionText = "На этой неделе вас ожидает приятное событие, которое долго будет радовать вас.";
    } else if (randomNumber == 4) {
    predictionText = "Ваше здоровье улучшится, если начнете заниматься спортом и правильно питаться.";
    } else if (randomNumber == 5) {
    predictionText = "Возможен финансовый успех, если вы проявите настойчивость.";
    }

    const newPrediction = document.querySelector('h1');
    newPrediction.textContent = predictionText;

    const newProbability = document.querySelector('p');
    newProbability.textContent = probability;

    const forecasts = document.querySelector('.forecasts');
    const template = document.getElementById('forecast-item');

    const item = template.content.cloneNode(true);

    item.querySelector('h3').textContent = predictionText;
    item.querySelector('p').textContent = probability;

    forecasts.append(item);


});





    

    
   














 