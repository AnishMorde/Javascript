const image = document.getElementById('image')
const btn = document.getElementById('btn')


btn.addEventListener('click', async ()=>{
    fetch('https://cataas.com/cat/orange,cute')
    .then((Response)=>{
       return Response;
    }).then((data)=>{
        console.log(data)
        image.src = data.url;
    }).catch((error) => {
        console.log(error)
    })
})