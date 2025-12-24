const input = document.querySelector('input')
const ul = document.querySelector ('ul')
const li = document.querySelectorAll('li')
const btn = document.querySelector('#bttn')

function adicionou(e) {
  if (e.key === 'Enter') {

    const itens = document.querySelectorAll('li')
    let repetido = false

    for (const item of itens) {
      if (item.firstChild && item.firstChild.textContent === input.value) {
        repetido = true
      } 
    }

    if (!repetido && input.value !== '') {
    const newLi = document.createElement('li')
    
    // 1. Criamos um SPAN para envolver apenas o texto da tarefa
    const spanTexto = document.createElement('span')
    spanTexto.innerText = input.value
    
    // 2. Criamos o botão normalmente
    const button = document.createElement('button')
    button.innerText = 'remover'

    const linha = document.createElement('hr')

    // Adicionamos os dois na LI
    newLi.appendChild(spanTexto)
    newLi.appendChild(button)
    ul.appendChild(newLi)
    ul.appendChild(linha)

    input.value = ''

    
   
    newLi.addEventListener('click', function () {
        if (spanTexto.style.textDecoration === 'line-through') {
            spanTexto.style.textDecoration = ''
            spanTexto.style.color = ''
        } else {
            spanTexto.style.textDecoration = 'line-through'
            spanTexto.style.color = 'darkgrey'
        }
        
    })

    
    button.addEventListener('click', function(e){
        newLi.remove()
        linha.remove()
    })

    btn.addEventListener('click', function(e){
        newLi.remove()
        linha.remove()
    })
}
    
  }
  
}




input.addEventListener('keyup', adicionou)
