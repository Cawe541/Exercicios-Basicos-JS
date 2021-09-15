function relogio() {

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-Br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (event) {
        const element = event.target;

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio()
        }
        if (element.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
        if (element.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);;
        }
    });
}

relogio();
