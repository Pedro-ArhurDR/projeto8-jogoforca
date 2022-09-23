import img0 from "./assets/forca0.png"
import palavras from "./palavras"
import { useState } from "react"
export default function App(){
    const word = palavras[Math.floor(Math.random() * palavras.length)]
    const wordL = word.length
    const[p,letP]= useState("")
    const splitword = word.split("")
    console.log(word)
    console.log(splitword)
    console.log(wordL)
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return<>
    <div class="top">
        <img src={img0}/>
        <div class="topR"><button onClick={()=>letP(splitword.map((w,index)=> <div key={index} class="sublinhado"></div>))}>Escolher palavra</button>
        <div class="sublinhados">{p}</div></div>
    </div>
    <div class="bot"> 
    <div class="letras">{alfabeto.map((l,index) => <div key={index} onClick={() => console.log(l)} class="letra">{l.toUpperCase()}</div>)}</div>
    <div class="texto"> Ja sei a palavra <input placeholder=""/> <button>chutar</button> </div>
    </div>
    </>
}