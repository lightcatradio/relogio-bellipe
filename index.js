function calcularDiferencaDeTempo(dataInicial, dataFinal) {
  const diferenca = Math.abs(dataFinal - dataInicial);
  const segundosTotais = Math.floor(diferenca / 1000);

  const segundosPorMinuto = 60;
  const segundosPorHora = segundosPorMinuto * 60;
  const segundosPorDia = segundosPorHora * 24;
  const segundosPorMes = segundosPorDia * 30;
  const segundosPorAno = segundosPorDia * 365;

  const anos = Math.floor(segundosTotais / segundosPorAno);
  const meses = Math.floor(segundosTotais / segundosPorMes);
  const dias = Math.floor(segundosTotais / segundosPorDia) % 30;
  const horas = Math.floor((segundosTotais % segundosPorDia) / segundosPorHora);
  const minutos = Math.floor(
    (segundosTotais % segundosPorHora) / segundosPorMinuto
  );
  const segundos = segundosTotais % segundosPorMinuto;

  return {
    anos,
    meses,
    dias,
    horas,
    minutos,
    segundos,
  };
}

function formatarTempo(tempo) {
  const doisDigitos = (valor) => String(valor).padStart(2, "0");
  return `${doisDigitos(tempo.anos)} : ${doisDigitos(
    tempo.meses
  )} : ${doisDigitos(tempo.dias)} : ${doisDigitos(tempo.horas)} : ${doisDigitos(
    tempo.minutos
  )} : ${doisDigitos(tempo.segundos)}`;
}

function formatarTempoMobile(tempo) {
  const doisDigitos = (valor) => String(valor).padStart(2, "0");
  const anosEMeses = `${doisDigitos(tempo.anos)}:${doisDigitos(tempo.meses)}`;
  const diasEHoras = `${doisDigitos(tempo.dias)}:${doisDigitos(tempo.horas)}`;
  const minutosESegundos = `${doisDigitos(tempo.minutos)}:${doisDigitos(
    tempo.segundos
  )}`;

  return {
    anosEMeses,
    diasEHoras,
    minutosESegundos,
  };
}

function atualizarTempo() {
  const tempoElemento = document.getElementById("tempo");
  const elementoAnosEMeses = document.getElementById("anos-meses");
  const elementoDiasEHoras = document.getElementById("dias-horas");
  const elementoMinutosESegundos = document.getElementById("minutos-segundos");
  const elementoSegundos = document.getElementById("segundos");
  const dataInicial = new Date("2024-03-18T00:00:00");
  const dataAtual = new Date();
  const diferencaDeTempo = calcularDiferencaDeTempo(dataInicial, dataAtual);
  const tempoFormatado = formatarTempo(diferencaDeTempo);
  const tempoFormatadoMobile = formatarTempoMobile(diferencaDeTempo);
  tempoElemento.textContent = tempoFormatado;
  elementoAnosEMeses.textContent = tempoFormatadoMobile.anosEMeses;
  elementoDiasEHoras.textContent = tempoFormatadoMobile.diasEHoras;
  elementoMinutosESegundos.textContent = tempoFormatadoMobile.minutosESegundos;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
