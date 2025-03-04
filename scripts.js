const btn = document.querySelector('button')
const local = document.getElementById('local-convert')
const foreign = document.getElementById('foreign-money')
const valor = document.getElementById('value')

const resImg1 = document.getElementById('img1')
const resP1 = document.getElementById('currency1')
const resSpan1 = document.getElementById('span1')

const resImg2 = document.getElementById('img2')
const resP2 = document.getElementById('currency2')
const resSpan2 = document.getElementById('span2')

const dolar = 5.88
const euro = 6.17
const real = 1


const localMoney = () => {
  if (local.value === 'dolar') {
    resImg1.src = "http://127.0.0.1:5500/assets/dolar.png"
    resP1.innerText = "Dolar Americano"
    resSpan1.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(valor.value)
  } else if (local.value === 'euro') {
    resImg1.src = "http://127.0.0.1:5500/assets/euro.png"
    resP1.innerText = "Euro"
    resSpan1.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(valor.value)
  } else {
    resImg1.src = "http://127.0.0.1:5500/assets/brasil.png"
    resP1.innerText = "Real"
    resSpan1.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(valor.value)
  }
}


const foreignMoney = () => {
  if (foreign.value === 'dolar') {
    resImg2.src = "http://127.0.0.1:5500/assets/dolar.png"
    resP2.innerText = "Dolar Americano"
    resSpan2.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(valor.value / dolar)

  } else if (foreign.value === 'euro') {
    resImg2.src = "http://127.0.0.1:5500/assets/euro.png"
    resP2.innerText = "Euro"
    resSpan2.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(valor.value / euro)
  } else {
    resImg2.src = "http://127.0.0.1:5500/assets/brasil.png"
    resP2.innerText = "Real"
    resSpan2.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(valor.value / real)

  }

}

const convert = () => {
  const selectLocal = (local.options[local.selectedIndex].value)
  const selectForeign = (foreign.options[foreign.selectedIndex].value)
  if (selectLocal) {
    resSpan1.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(valor.value)
  }
  if (selectForeign === 'dolar') {
    resSpan2.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(valor.value / dolar)
  }

  if (selectForeign === 'euro') {
    resSpan2.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(valor.value / euro)

  }

  if (selectForeign === 'real') {



    resSpan2.innerText = new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(valor.value / real)

  }

}

btn.addEventListener('click', convert)
local.addEventListener('change', localMoney)
foreign.addEventListener('change', foreignMoney)