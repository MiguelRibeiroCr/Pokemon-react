import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
       
    }
`

export const PokemomList = styled.ul`
    list-style: nome;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 200px,1fr));
    column-gap: 3rem;
    row-gap: 4rem
`

export const Pokemom = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 180px;
        border-radius: 1rem;
        margim-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a:hover {
        transform: scale(1.1);
    }

    a {
        transition: all 0.3s;
    }
`