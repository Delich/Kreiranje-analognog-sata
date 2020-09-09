var watch = new Image();
watch.src = "watch1.png";
watch.addEventListener("load",() => setInterval(postaviVreme, 1000));
var myCanvas = document.getElementById("my-canvas");
var ctx = myCanvas.getContext('2d');
var radius = myCanvas.height / 2;
var mpi = Math.PI / 6;
function postaviVreme() {
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
    radius = myCanvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    ctx.drawImage(watch, -100, -100, 200, 200);
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    nacrtajSatnicu(ctx, (hour % 12 + minute / 60 + second / 3600) * mpi);
    nacrtajMinutaru(ctx, (minute + second  / 60) * mpi / 5);
    nacrtajSekundaru(ctx, second * mpi / 5);
}
function nacrtajSatnicu(ctx, h) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(h);
    ctx.lineTo(0, -radius * 0.3);
    ctx.strokeStyle = "white";
    ctx.closePath();
    ctx.stroke();
    ctx.rotate(-h);
}
function nacrtajMinutaru(ctx, m) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(m);
    ctx.lineTo(0, -radius * 0.45);
    ctx.strokeStyle = "gray";
    ctx.closePath();
    ctx.stroke();
    ctx.rotate(-m);
}
function nacrtajSekundaru(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(s);
    ctx.lineTo(0, -radius * 0.5);
    ctx.strokeStyle = "yellow";
    ctx.closePath();
    ctx.stroke();
    ctx.rotate(-s);
}