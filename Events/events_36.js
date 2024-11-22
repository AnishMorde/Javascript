//  document.getElementById("camera").onclick = ()=>{
//     alert("it is camera")
// }

// const camera = document.getElementById("camera");

// camera.addEventListener('click', (e)=>{
//     console.log(e)
//       alert("hello anish");
// }, false)

//time , timestamp , defaultPrevented ,
//target , toElement , srcElement
//clientX, clientY screenX, screenY
//altkey , ctrlKey , shiftKey , keyCode 
  

//bubling event propagation id false then it is bubling and dafault also the false args for the event
//it is from the bottom to the up approach (false)

//for capturing the event the top to down approach for this (true)
// const images = document.getElementById("images");
// images.addEventListener( 'click' , ()=>{
//        console.log('clicked inside the ul')
// },false)

// const camera = document.getElementById("camera");
// camera.addEventListener( 'click' , (e)=>{
//        console.log('clicked on the camera')
//        e.stopPropagation()
// },false)

//  document.getElementById('google').addEventListener('click',(e)=>{
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked")
        
//  })



 document.getElementById('images').addEventListener('click',(e)=>{
    //  console.log(e.target.tagName)
     if(e.target.tagName==='IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
     }
    

 }, false)



