const selectBtn=document.querySelectorAll('.btn')
const selectBody=document.querySelector('body')

selectBtn.forEach((button)=>{

  button.addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target)

    if(e.target.id==="red"){

      selectBody.style.backgroundColor=e.target.id
    }else if(e.target.id==="blue"){
      selectBody.style.backgroundColor=e.target.id
    }else if(e.target.id==="green"){
      selectBody.style.backgroundColor=e.target.id
    }else if(e.target.id==="yellow"){
      selectBody.style.backgroundColor=e.target.id
    }else if(e.target.id==="pink"){
      selectBody.style.backgroundColor=e.target.id
    }
    
  })
})