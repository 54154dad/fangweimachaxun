const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let radius = 20; // 初始半径
let direction = 1; // 方向：1表示放大，-1表示缩小
const maxRadius = 100; // 最大半径
const minRadius = 20; // 最小半径
const speed = 1; // 放大/缩小的速度

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除之前的绘制
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2); // 绘制圆形
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    // 更新半径
    if (radius >= maxRadius || radius <= minRadius) {
        direction *= -1; // 改变方向
    }
    radius += direction * speed;

    requestAnimationFrame(drawCircle); // 递归调用以创建动画
}

drawCircle(); // 开始动画
