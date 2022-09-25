import img0 from "./assets/forca0.png"
import palavras from "./palavras"
import { useState } from "react"



export default function App(){
    const word = palavras[Math.floor(Math.random() * palavras.length)]

    const [botaoI,setBotaoI] = useState(0)
    const [classeL, setClasseL] = useState("letraI")
    const [letras , setLetras] = useState([])
    const [letraE, setLetraE] = useState("")
    const [contaErros, setContaErros] = useState(0)
    console.log("numero de erros: " +contaErros)
    const[p,setP]= useState("")
    const [splitword,setSplitword ]= useState(word.split(""))
    const [contaacertos, setContaAcertos] = useState(0)
    console.log("PALAVRA DO JOGO: " + splitword)
    console.log(contaacertos)
    const [alfabeto,setAlfabeto] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
    console.log("CONTEM " + letras)
    console.log(" ACERTOU: "+contaacertos)

    
    

    function letraclicada(letra){
        if(splitword.includes(letra) && letras.includes(letra) === false){
            const novoarray = [...letras]
            setLetras([...novoarray, letra])
            setContaAcertos(contaacertos+1)
        }
        else{
            setContaErros(contaErros+1)
        }
    }


    
    function Teclas(props){
        return botaoI===1 ? props.letras.map((l,index) => <div key={index} 
        onClick={() => console.log(l) & letraclicada(l,index) & removertecla(l) & mostrarletra(l) &jogando()} class={classeL}>{l.toUpperCase()}</div>):
        props.letras.map((l,index) => <div key={index} onClick={() => alert("clique em ESCOLHER PALAVRA para iniciar o jogo")} class={classeL}>{l.toUpperCase()}</div>)
    }

    

    function removertecla(letraDeletar){
        const novoarray = alfabeto.filter((l,index)=> l !== letraDeletar)
        setAlfabeto(novoarray)
        console.log(alfabeto)
    }

    function chutarpalavra(letra){
        
    }

    function mostrarletra(letra){    
        const novoarray = [...letraE, letra]
        setLetraE(novoarray)
        console.log("LETRA PARA APARECER: " + letraE)
    }

    function jogando(){
        const filteredArray = splitword.filter( (ele,pos)=>splitword.indexOf(ele) == pos);
        console.log("The filtered array",filteredArray);

        if(contaErros > 4){
            alert("PERDEU")
        }
        else if((filteredArray.length-1) === contaacertos){
            alert('GANHOU')
        }
    }
    
    
    function Mostrarletras(props){

        function esconder(){
            return 
        }

        function mostrar(){
            return
        }

        return<>
        <img src={props.img}/>
        <div class="topR"><button onClick={botaoI ===0 ? 
            ()=>setP(splitword.map((w,index)=> <div key={index} class="sublinhado">{letraE}</div>)) & setClasseL("letraF") & setBotaoI(1) : 
           ()=> alert('termine o jogo para poder mudar a palavra')}>Escolher palavra</button>
        <div class="sublinhados">{p}</div></div>
        </>
    }
    return<>
    <div class="top"><Mostrarletras img={img0} letra = {"w"}/>
    </div>
    <div class="bot"> 
    <div class="letras"><Teclas letras = {alfabeto}/></div>
    <div class="texto"> Ja sei a palavra <input placeholder=""/> <button>chutar</button> </div>
    </div>
    </>
}