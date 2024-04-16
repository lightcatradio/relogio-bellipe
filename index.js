function calcularDiferencaDeTempo(dataInicial, dataFinal) {
  const diferenca = Math.abs(dataFinal - dataInicial);
  const segundosTotais = Math.floor(diferenca / 1000);

  const segundosPorMinuto = 60;
  const segundosPorHora = segundosPorMinuto * 60;
  const segundosPorDia = segundosPorHora * 24;
  const segundosPorSemana = segundosPorDia * 7;
  const segundosPorMes = segundosPorDia * 30;
  const segundosPorAno = segundosPorDia * 365;

  const anos = Math.floor(segundosTotais / segundosPorAno);
  const meses = Math.floor(segundosTotais / segundosPorMes);
  const semanas = Math.floor(segundosTotais / segundosPorSemana);
  const dias = Math.floor(segundosTotais / segundosPorDia) % 30;
  const horas = Math.floor((segundosTotais % segundosPorDia) / segundosPorHora);
  const minutos = Math.floor(
    (segundosTotais % segundosPorHora) / segundosPorMinuto
  );
  const segundos = segundosTotais % segundosPorMinuto;

  return {
    anos,
    meses,
    semanas,
    dias,
    horas,
    minutos,
    segundos,
  };
}

function formatarTempo(tempo) {
  const doisDigitos = (valor) => String(valor).padStart(2, "0");
  return `${doisDigitos(tempo.anos)}:${doisDigitos(tempo.meses)}:${doisDigitos(
    tempo.semanas
  )}:${doisDigitos(tempo.dias)}:${doisDigitos(tempo.horas)}:${doisDigitos(
    tempo.minutos
  )}:${doisDigitos(tempo.segundos)}`;
}

function formatarTempoMobile(tempo) {
  const doisDigitos = (valor) => String(valor).padStart(2, "0");
  const anosEMeses = `${doisDigitos(tempo.anos)}:${doisDigitos(tempo.meses)}`;
  const semanasEDias = `${doisDigitos(tempo.semanas)}:${doisDigitos(
    tempo.dias
  )}`;
  const horasEMinutos = `${doisDigitos(tempo.horas)}:${doisDigitos(
    tempo.minutos
  )}`;
  const segundosESegundos = `${doisDigitos(tempo.segundos)}`;

  return {
    anosEMeses,
    semanasEDias,
    horasEMinutos,
    segundosESegundos,
  };
}

function atualizarTempo() {
  const tempoElemento = document.getElementById("tempo");
  const elementoAnosEMeses = document.getElementById("anos-meses");
  const elementoSemanasEDias = document.getElementById("semanas-dias");
  const elementoHorasEMinutos = document.getElementById("horas-minutos");
  const elementoSegundos = document.getElementById("segundos");
  const dataInicial = new Date("2024-03-18T00:00:00");
  const dataAtual = new Date();
  const diferencaDeTempo = calcularDiferencaDeTempo(dataInicial, dataAtual);
  const tempoFormatado = formatarTempo(diferencaDeTempo);
  const tempoFormatadoMobile = formatarTempoMobile(diferencaDeTempo);
  tempoElemento.textContent = tempoFormatado;
  elementoAnosEMeses.textContent = tempoFormatadoMobile.anosEMeses;
  elementoSemanasEDias.textContent = tempoFormatadoMobile.semanasEDias;
  elementoHorasEMinutos.textContent = tempoFormatadoMobile.horasEMinutos;
  elementoSegundos.textContent = tempoFormatadoMobile.segundosESegundos;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
