import { useState, useEffect } from "react";
import { Container } from "../Home/style";
import React from "react";
import { API_URL, API_KEY, API_IMAGE } from "../../config/config";

export default function Details(){

    const [selectedPokemom, setSelectedPokemom] = useState<any>({})
    const { id } = useParams();

    useEffect(() =>{
        fetch(`${API_URL}/${id}?api_key=${API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => setSelectedPokemom(data))
    },[id])

    return(
        <Container>
            <div>
            <img className="backdrop" src={`${API_IMAGE}${selectedPokemom.backdrop_path}`} alt="Texto qualquer" />
                <div className="pokemom">
                <img className="pokemom-poster" src={`${API_IMAGE}${selectedPokemom.poster_path}`} alt="Texto qualquer"/>

                <div className="details">
                
                        <h1>{selectedPokemom.title}</h1> 
                        <span className="span">Descrição: {selectedPokemom.overview}</span>
                        <span className="release-date">Data de nascimento:01/01/2023</span>
                        <Link to="/"><button >Voltar</button></Link>
                    </div> 
                </div>
            </div>

            <Cast></Cast>

        </Container>

    )
}