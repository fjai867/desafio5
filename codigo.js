const xhttp=new XMLHttpRequest();
let datos
xhttp.open('GET','data.json',true);
xhttp.send();
xhttp.onreadystatechange= function(){

    if(this.readyState== 4 && this.status== 200){
           
        datos=JSON.parse(this.responseText);
           
        
        }

        const ides=["b1","b2","b3","b4","b5","b6","b7"]
        const parr=["p1","p2","p3","p4","p5","p6","p7"]


  
        let numId=0
        console.log(datos)
        for (let item of datos) {
            
            boton=document.getElementById(ides[numId]);
            parrafo=document.getElementById(parr[numId]);

            //boton.style.width= toString(parseInt(item.amount)) +"px"
            let pordos=parseInt(item.amount)*3
            boton.style.height= pordos +"px"
            parrafo.innerText=(item.amount).toString()
            console.log(item.amount)
            
                
            numId++; 
                }  

}
let anterior="p1"
//let anteriorb="b1"

function modifica(ident){
    nomb=document.getElementById(ident)
    nombant=document.getElementById(anterior)
    //nombb=document.getElementById(identb)
    //nombantb=document.getElementById(anteriorb)

    nombant.style.visibility="hidden"
    //nombantb.style.backgroundColor="#ec775f"
    nomb.style.visibility="visible"
    //nombb.style.backgroundColor="#76b5bc"
    anterior=ident
    //anteriorb=identb
}

