function closenav() {
    document.getElementById("mysidebar").style.width = "0";
}

function opennav() {
    document.getElementById("mysidebar").style.width = "15%";
}


    // essas 2 funções irão recuperar seus valores do backend futuramente
    function limiteMaximo() {
        return 130;
    }

    function limiteMinimo() {
        return 0;
    }

	// esse "sortearTemperatura()" será desnecessário quando usarmos o backend futuramente
	function sortearTemperatura() {
        var minimoAbsoluto = Math.abs(limiteMinimo());
		return (Math.random() * (minimoAbsoluto+limiteMaximo()) - minimoAbsoluto).toFixed(1);
	}

    function receberNovasLeituras() {
		setTimeout(() => {

            // jogando o "max" e "min" para a página
            b_max.innerHTML = limiteMaximo();
            b_min.innerHTML = limiteMinimo();

            var ajusteLimiteMin = Math.abs(limiteMinimo());

			// esse "novoRegistro" será recuperado do backend futuramente
			var novoRegistro = {
				momento: '00:00:00', // tanto faz
				leitura: Number(sortearTemperatura())
			};

            // calculo de uma posição de 0 a 100 "entre" os limites min e max
            var posicao = (novoRegistro.leitura + ajusteLimiteMin) / (limiteMaximo()+ajusteLimiteMin) * 100;

            // tipo está "baixa" (<25), "ok" (>=25 && <=75) ou "ok" (>75) ?
            var tipo = (posicao < 40 ? 'fraco' : posicao <=88 ? 'ok' : 'deus');

            // trocando a imagem e o estilo do valor da leitura
            i_status.src = `./img/santo-${tipo}.png`;
			s_leitura.className = `leitura-${tipo}`;       
            
            // atualizando o valor da leitura na página
            b_leitura.innerHTML = novoRegistro.leitura;

		    // função que agenda a recuperação da última leitura para daqui a 3 segundos
			receberNovasLeituras();	

		}, 5000); // 3000 ms -> 3 segundos
	}

	// indicando que a função "receberNovasLeituras" será invocada assim que a página carregar
    window.onload = receberNovasLeituras;