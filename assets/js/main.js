function show(){
  const btnClose = document.querySelector('.btn-close')
  const btnOpen = document.querySelector('.btn-open-360')
  const imagem = document.querySelector('.product-image > img')

  if(btnClose){
    btnClose.addEventListener('click', () => {
      imagem.src = "./assets/image/sofa.png"
      btnOpen.style.display = 'block'
      btnClose.style.display = 'none'
    })
  }

  if(btnOpen){
    btnOpen.addEventListener('click', () => {
      imagem.src = "./assets/image/sofa.gif"
      btnClose.style.display = 'block'
      btnOpen.style.display = 'none'
    })
  }
}

function addCard(){
  const btnAdd = document.querySelector('.product-details button')

  if(btnAdd){
    btnAdd.addEventListener('click', (e) =>{
      e.preventDefault()
      btnAdd.innerText = 'ADICIONANDO...'

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Parabéns',
          text: 'Obrigado por comprar conosco!'
        })
        btnAdd.innerText = 'ADICIONAR À CESTA'
      }, 2000)

    })
  }
}

show()
addCard()