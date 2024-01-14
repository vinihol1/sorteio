add = document.getElementsByClassName('add')
quantidade = document.getElementById('quantidade')

minus = quantidade.children[0]
input = quantidade.children[1]
plus = quantidade.children[2]

input.value = 1

for (el of add[0].children) {
    const value = +el.innerHTML
    el.innerHTML = '+'+el.innerHTML
    el.onclick = (ev) => {
        ev.preventDefault()
        input.value -= -value
    }
}
minus.onclick = (ev) => {
    ev.preventDefault()
    input.value -= 1
}
plus.onclick = (ev) => {
    ev.preventDefault()
    input.value -= -1
}


function myFunction(x) {
    const b = document.getElementById('noheader')
    const children = b.children.length
    for (let i = 0; i<children; i++) {
        console.log(i)
        b.removeChild(b.children[0])
    }
    const valor = x.elements['quantidade'].value
    console.log(valor)
    const form = b.appendChild(document.createElement('form'))
    form.style.backgroundColor = '#54428e';
    const quantidade = form.appendChild(document.createElement('h1'))
    quantidade.innerHTML = valor+' cota'+' s'[valor>1?1:0]
    const inputNameLabel = form.appendChild(document.createElement('h1'))
    inputNameLabel.innerHTML = 'Nome completo'
    const inputName = form.appendChild(document.createElement('input'))
    const inputEmailLabel = form.appendChild(document.createElement('h1'))
    inputEmailLabel.innerHTML = 'Email'
    const inputEmail = form.appendChild(document.createElement('input'))
    const inputTelefoneLabel = form.appendChild(document.createElement('h1'))
    inputTelefoneLabel.innerHTML = 'Telefone'
    const inputTelefone= form.appendChild(document.createElement('input'))
    const button =  form.appendChild(document.createElement('button'))
    button.innerHTML = 'Comprar cotas'
    form.setAttribute('action', 'oi')
    form.onsubmit = () => {console.log('oi')}
}
