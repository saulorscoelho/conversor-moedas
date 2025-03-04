const btn = document.getElementById('botao')
const selectFrom = document.getElementById('local-convert')
const selectTo = document.getElementById('foreign-money')
const valor = document.getElementById('valor')

const result = document.getElementById('span2')
const valorConvert = document.getElementById('span1')
const currency1 = document.getElementById('currency1')
const currency2 = document.getElementById('currency2')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')





const converter = async () => {

  //API COM VALORES DAS MOEDAS

  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high

  const realToDolar = valor.value / dolar
  const realToEuro = valor.value / euro
  const dolarToReal = valor.value * dolar
  const euroToReal = valor.value * euro
  const dolarToEuro = (valor.value * dolar) / euro
  const euroToDolar = (valor.value * euro) / dolar

  //OPÇÕES SELECIONADAS
  const moeda1 = selectFrom.options[selectFrom.selectedIndex].innerText
  const moeda2 = selectTo.options[selectTo.selectedIndex].innerText

  //SRC IMAGENS
  const imgReal = 'http://127.0.0.1:5500/assets/brasil.png'
  const imgDolar = 'http://127.0.0.1:5500/assets/dolar.png'
  const imgEuro = 'http://127.0.0.1:5500/assets/euro.png'


  //REAL TO DOLAR
  if (selectFrom.value === 'real' && selectTo.value === 'dolar') {
    valorConvert.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(valor.value)

    result.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(realToDolar)

    img1.src = imgReal
    img2.src = imgDolar
    currency1.innerText = moeda1
    currency2.innerText = moeda2

  }

  //REAL TO EURO
  else if (selectFrom.value === 'real' && selectTo.value === 'euro') {
    result.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(realToEuro)

    valorConvert.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(valor.value)

    img1.src = imgReal
    img2.src = imgEuro
    currency1.innerText = moeda1
    currency2.innerText = moeda2

  }

  //DOLAR TO REAL
  else if (selectFrom.value === 'dolar' && selectTo.value === 'real') {
    result.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(dolarToReal)

    valorConvert.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(valor.value)

    img1.src = imgDolar
    img2.src = imgReal
    currency1.innerText = moeda1
    currency2.innerText = moeda2
  }

  //EURO TO REAL
  else if (selectFrom.value === 'euro' && selectTo.value === 'real') {
    result.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(euroToReal)

    valorConvert.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(valor.value)

    img1.src = imgEuro
    img2.src = imgReal
    currency1.innerText = moeda1
    currency2.innerText = moeda2
  }

  //DOLAR TO EURO
  else if (selectFrom.value === 'dolar' && selectTo.value === 'euro') {
    result.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(dolarToEuro)

    valorConvert.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(valor.value)

    img1.src = imgDolar
    img2.src = imgEuro
    currency1.innerText = moeda1
    currency2.innerText = moeda2
  }

  //EURO TO DOLAR
  else if (selectFrom.value === 'euro' && selectTo.value === 'dolar') {
    result.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(euroToDolar)

    valorConvert.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(valor.value)

    img1.src = imgEuro
    img2.src = imgDolar
    currency1.innerText = moeda1
    currency2.innerText = moeda2
  }

  //REAL TO REAL
  else if (selectFrom.value === 'real' && selectTo.value === 'real') {
    result.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(valor.value)

    valorConvert.innerText = result.innerText

    img1.src = imgReal
    img2.src = imgReal
    currency1.innerText = moeda1
    currency2.innerText = moeda2
  }

  //DOLAR TO DOLAR
  else if (selectFrom.value === 'dolar' && selectTo.value === 'dolar') {
    result.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(valor.value)

    valorConvert.innerText = result.innerText

    img1.src = imgDolar
    img2.src = imgDolar
    currency1.innerText = moeda1
    currency2.innerText = moeda2
  }
  //EURO TO EURO
  else if (selectFrom.value === 'euro' && selectTo.value === 'euro') {
    result.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(valor.value)

    valorConvert.innerText = result.innerText

    img1.src = imgEuro
    img2.src = imgEuro
    currency1.innerText = moeda1
    currency2.innerText = moeda2

  }

  else {
    alert('Selecione Moedas Diferentes')
  }

}




btn.addEventListener('click', converter)
// selectFrom.addEventListener('change', changeFrom)