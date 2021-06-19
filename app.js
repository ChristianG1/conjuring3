let b1 = document.querySelector('#b1').addEventListener('click', () => { 
  Swal.fire({
    title: 'Woaa, legooo babe!',
    text: '¡La función es a las 7:30pm!',
    imageUrl: 'https://media.giphy.com/media/vzhh40gupx7tPlGMBw/source.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
})


let b2 = document.querySelector('#b2').addEventListener('click', () => {
  Swal.fire({
    title: '¿Estas segura de esta opción?',
    text: "Te puedes ganar unas palomitas caramelizadas babe 😘",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Lo pensare',
    confirmButtonText: 'No quiero ir'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Segunda oportunidad',
        text: "Palomitas caramelizadas y un coffee como tu mamá! 😂",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Bn, tal vez sí',
        confirmButtonText: '¡Que noooo!'
      }).then((result)=>{
        if(result.isConfirmed) {
          Swal.fire({
            title: 'Tercera oportunidad',
            text: "Ponte a pensar, que 'novio' te haría esto, solo para ir al cine ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Tienes razon, vamos!',
            confirmButtonText: '¡Christian, no quiero ir!'
          }).then((result) => { 
            if(result.isConfirmed){ 
              Swal.fire({
                title: 'Última oportunidad',
                text: "Mmmmm yaaaa babe, te invito a cenar saliendo y vemos movies en tu casa y nos quedamos dormidos 😍 ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Okey, si vamos pss!',
                confirmButtonText: 'No babe, mejor nos quedamos aquí'
              })
            }
          })
        }
      })
    }
  })
})
