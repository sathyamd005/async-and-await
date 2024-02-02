try{
    async function foo(){
        var res=await fetch("https://api.chucknorris.io/jokes/random")
        res= await res.json();
        fun(res)
        // console.log(res)
    }
function fun(res){
        var container=document.createElement("div");
        container.setAttribute("class","container");
        container.style.marginTop = "150px"        
        container.style.marginLeft = "500px"        
         container.innerHTML=`
        <div class="card  bg-light mb-3 text-center" style="max-width: 20rem;">
      <div class="card-header">JOKES</div>
      <div class="card-body">
     <h6 class="card-title">${res.value}</h6>
      </div>
    </div>
        `
    document.body.append(container)
    }
    foo()
}
catch(error){
    console.log(error);
}