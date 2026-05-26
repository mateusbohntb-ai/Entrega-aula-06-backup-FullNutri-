import "./style.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCharacters } from "../../api/rickandmorty";
import Card from "../Card";

function Home() {
    const [carregando, setCarregando] = useState(true);
    const [personagens, setPersonagens] = useState([]);


    useEffect(() => {
        async function carregar() {
            const dados = await getCharacters()
            setPersonagens(dados)
            setCarregando(false)
        }

        // variavel =[] epasso na memoria 
        // array = [ 0 | 1 | 2 ]


        carregar()
    }, [])

    if (carregando) {
        return (<> CARREGANDO ... </>)
    }

    return (
        <>
            <div className='home page'>
                <h2 className='titulo-lista'>Personagens -Rick and Morty</h2>

                <div className='lista-personagens'>
                  {personagens.map((personagem) => (
                      <Card personagem={personagem} />

                  ))}
                </div>
            </div>
        </>
    )
}

export default Home 