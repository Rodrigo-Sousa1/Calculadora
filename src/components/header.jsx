import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react";



    
const HeaderStyled = styled.header`
    width:100%;
    height:97vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:black;`

const Setor1 = styled.section`
    border:solid 5px black;
    height:93vh;
    width: 30%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color:#361E5C;
@media (max-width:390px){
    width:85%;
    height:80vh;} 
@media (max-width:490px) {
    width:85%;
    height:95vh;}
`

const Setor2 = styled.section`
    border:solid;
    height:70vh;
    margin-top:10px;
    display:flex;
    width:96%;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    background-color:#5D4B7F;
@media (max-width:390px ) {
    width:95%}
@media (max-width:490px ) {
    width:94%;}`

const Display = styled.h1`
    border:solid;
    height:15vh;
    width: 95% ;
    font-size:30px;
    font-weight:50px;
    display:flex;
    align-items:center; 
    background-color: gray;
@media (max-width:490px) {
    height:110px ;}

@media(max-width:700px) {
    height: 120px }
`

const Botao = styled.button`
    height:55px;
    width:61px;
    border-radius: 100px;
    margin:15px;
    font-size:22px;
@media (max-width:390px ) {
    height:45px;
    width:51px;
    margin:5px ;}
@media (max-width:490px) {
    margin: 5px;}

`
const Botao2 = styled.button`
    height:55px;
    width:150px;
    border-radius: 100px;
    margin:15px;
    font-size:22px;
    background-color:#FFFF31;
@media (max-width: 390px)  {
    height:45px;
    width:100px;}

@media (max-width:490px) {
    height:45px;
    width:100px;
}


`




export default function Header() {

    const [num, setNum] = useState("")
    const [oldnum, setOldnum] = useState("")
    const [resultado, setResultado] = useState("")
    const [operador1, setOperador1] = useState("")
    const [sinal, setSinal] = useState("")

    const addNumero = (item) => {
        if (operador1 === "") { setNum(num + item.target.value) }
        else { setOldnum(oldnum + item.target.value) }
    }

    const operador = (item) => {
        setOperador1(item.target.value)
    }

    const igual = () => {
        if (operador1 === "/") { setResultado(Number(oldnum) / Number(num)) }
        else if (operador1 === "x") { setResultado(Number(oldnum) * Number(num)) }
        else if (operador1 === "-") { setResultado(Number(oldnum) - Number(num)) }
        else if (operador1 === "+") { setResultado(Number(oldnum) + Number(num)) }
        setSinal("=")
    }

    const MudarValor = () => {
        if (num > 0) {
            setNum(-num);
        }
        else {
            setNum(Math.abs(num));
        }
    }

    const porcentage = () => {
        setNum(num / 100);
    }

    const clear = () => {
        setNum("")
        setOldnum("")
        setOperador1("")
        setResultado("")
        setSinal("")
    }

    return (
        <HeaderStyled>

            <Setor1>
                <Display>{num} {operador1} {oldnum} {sinal} {resultado}</Display>

                <Setor2>

                    <Botao className={"orange"} onClick={clear}>AC</Botao>
                    <Botao className={"orange"} onClick={porcentage}>%</Botao>
                    <Botao className={"orange"} onClick={MudarValor}>+/-</Botao>
                    <Botao className={"orange"} onClick={operador} value={"/"}>/</Botao>
                    <Botao onClick={addNumero} value={7}>7</Botao>
                    <Botao onClick={addNumero} value={8}>8</Botao>
                    <Botao onClick={addNumero} value={9}>9</Botao>
                    <Botao className={"orange"} onClick={operador} value={"x"} >X</Botao>
                    <Botao onClick={addNumero} value={4}>4</Botao>
                    <Botao onClick={addNumero} value={5}>5</Botao>
                    <Botao onClick={addNumero} value={6}>6</Botao>
                    <Botao className={"orange"} onClick={operador} value={"-"}>-</Botao>
                    <Botao onClick={addNumero} value={1}>1</Botao>
                    <Botao onClick={addNumero} value={2}>2</Botao>
                    <Botao onClick={addNumero} value={3}>3</Botao>
                    <Botao className={"orange"} onClick={operador} value={"+"} >+</Botao>
                    <Botao onClick={addNumero} value={0}>0</Botao>
                    <Botao>,</Botao>
                    <Botao2 onClick={igual}>=</Botao2>


                </Setor2>

            </Setor1>


        </HeaderStyled>
    );
}