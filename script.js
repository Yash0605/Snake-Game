const canvas = document.getElementById('snakeCanvas');
const score = document.getElementById('score_value');
const ctx = canvas.getContext("2d");
const scale = 10;

const row = canvas.width / scale;
const col = canvas.height / scale;

let snake;

(function setUp() {
    snake = new Snake();
    fruit = new Fruit();
    snake.draw();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        score.textContent = snake.total;

        if(snake.eat(fruit)){
            fruit.pickLocation();
        }

        snake.checkCollision();
    }, 250)
})();

window.addEventListener('keydown', (event) => {
    const direction = event.key.replace('Arrow','');
    snake.changeDirection(direction);
})

