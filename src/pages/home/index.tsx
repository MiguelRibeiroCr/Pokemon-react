import { useState, useEffect } from "react";
import React from "react";
import { Container, PokemomList } from "./style";


export default function Home(){
    const [pokemom, setpokemom] = useState<any[]>([])

    useEffect(() => ){
        fetch (`https://pokeapi.co/api/v2/pokemon`)
        .then(response.response.json())
        .then(data => setpokemom(data.results) )
    },[])

    return(
        <Container>


            <h1>Pokemom</h1>

            <PokemomList>

                    {
                        pokemom.map(pokemom => {
                            const pokeId=pokemom.url.split('/')
                            return(
                                <Pokemom>
                                    
                                        <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId[6]}.svg`} alt={pokemom.name} />
                                   
                                    <span>{pokemom.name}</span>
                                </Pokemom>
                            )
                        })
                    }

        </Container>
    )

}
