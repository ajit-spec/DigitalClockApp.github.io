let clock = document.querySelector('.clock');

let tick = () => {

    let now = new Date();
    console.log(now.getHours(), now.getMinutes(), now.getSeconds());
    clock.innerHTML = `<h1>${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}</h1>`;
};

setInterval(tick, 1000);