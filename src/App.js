import img0 from "./assets/forca0.png"
import img1 from "./assets/forca1.png"
import img2 from "./assets/forca2.png"
import img3 from "./assets/forca3.png"
import img4 from "./assets/forca4.png"
import img5 from "./assets/forca5.png"
import img6 from "./assets/forca6.png"
import palavras from "./palavras"
import { useState } from "react"



export default function App(){
    const [word,setWord] = useState(palavras[Math.floor(Math.random() * palavras.length)])
    const word2 =  retira_acentos(word)
    const [botaoI,setBotaoI] = useState(0)
    const [botaoI2,setBotaoI2] = useState(0)
    const [classeL, setClasseL] = useState("letraI")
    const [letras , setLetras] = useState([])
    const [letraE, setLetraE] = useState("")
    const [contaErros, setContaErros] = useState(0)
    console.log("numero de erros: " +contaErros)
    const[p,setP]= useState([])
    const [splitword,setSplitword ]= useState(word2.split(""))
    const [contaacertos, setContaAcertos] = useState(0)
    console.log("PALAVRA DO JOGO: " + splitword)
    console.log(contaacertos)
    const [alfabeto,setAlfabeto] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
    console.log("CONTEM " + letras)
    console.log(" ACERTOS: "+contaacertos)
    const[teste,setTeste]= useState("")
    const[disable, setDisable] = useState(false)
    const imagens = [img0,img1,img2,img3,img4,img5,img6]
    const [jogo1, setJogo1] = useState(0)


    function letraclicada(letra,idx){
        if(splitword.includes(letra) && letras.includes(letra) === false){
            const novoarray = [...letras, letra]
            setLetras([...novoarray, letra])
            setContaAcertos(contaacertos+1)
            console.log("POSIÇÃO DA LETRA: " + splitword.indexOf(letra))
            setP([splitword.map((l,index)=> <div key={index} class={novoarray.includes(l) ?"sublinhado":"esconder"}>{l.toUpperCase()}</div> )])
        }
        else{
            setContaErros(contaErros+1)
        }
    }
    function retira_acentos(str) 
    {
    
        const com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    
    const sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
        let novastr="";
        for(let i=0; i<str.length; i++) {
            let troca=false;
            for (let a=0; a<com_acento.length; a++) {
                if (str.substr(i,1)==com_acento.substr(a,1)) {
                     novastr+=sem_acento.substr(a,1);
                    troca=true;
                    break;
                }
            }
            if (troca==false) {
                novastr+=str.substr(i,1);
            }
        }
        return(novastr)
    }


    function Teclas(props){
        return botaoI2===1 ? props.letras.map((l,index) => <button disabled={teste.includes(l) ?true:false} key={index}onClick={() =>console.log("TESTES"+teste)
        & letraclicada(l,index) & removertecla(l)&
        jogando()} class={teste.includes(l) ?"letraI":"letraF"}>
            {l.toUpperCase()}</button>):
        props.letras.map((l,index) => <div key={index} class={classeL}>{l.toUpperCase()}</div>)
    }

    

    

    function removertecla(letra){
        setTeste([...teste,letra])
    }

    function chutarpalavra(letra){
        
    }


    function jogando(){
        const filteredArray = splitword.filter( (ele,pos)=>splitword.indexOf(ele) === pos);
        console.log("The filtered array",filteredArray);

        if(contaErros > 4){
            setP([splitword.map((l,index)=> <div key={index} class={"perdeu"}>{l.toUpperCase()}</div> )])
            setTeste(alfabeto)
            setBotaoI(0)
            setContaAcertos(0)
        }
        else if((filteredArray.length-1) === contaacertos){
            setP([splitword.map((l,index)=> <div key={index} class={"ganhou"}>{l.toUpperCase()}</div> )])
            setTeste(alfabeto)
            setBotaoI(0)
            setContaAcertos(0)
            setContaErros(0)
            
            
        }
    }



    function Botao(){
        return <button disabled={botaoI===1} onClick={()=>jogo1===0 && botaoI ===0 ?  
            setP(()=>splitword.map((l,index)=> <div key={index} class={letras.includes(l)?"sublinhado":"esconder"}></div> ))& 
        setClasseL("letraF") & setBotaoI(1)& setJogo1(1) & setBotaoI2(1): window.location.reload()}>Escolher palavra</button>
    }

    function Mostrarletras(props){
        console.log(props)
        return<>
        <img src={props.img}/>
        <div className="topR"><Botao/>
        <div className="sublinhados">{props.letra}</div></div>
        {console.log(p)}
        </>
    }
    return<>
    <div class="top"><Mostrarletras img={imagens[contaErros]} letra={p} />
    </div>
    <div class="bot"> 
    <div class="letras"><Teclas letras = {alfabeto}/></div>
    <div class="texto"> Ja sei a palavra <input placeholder=""/> <button>chutar</button> </div>
    </div>
    </>
}