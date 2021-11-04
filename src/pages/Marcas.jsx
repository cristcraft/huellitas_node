import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import '../style/cards_comida.css'

function Marcas(){
    const [cards, setCard] = useState([]);
    const loadCards = (url) => {
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data.images);
            setCard(data.results);
        });
    }

    useEffect(() => {
        loadCards('http://localhost:3001/cards')
    }, [])
    return (
        <div className="container-fluid">
            <h2>Comida para perros</h2>
            <div className="d-flex flex-wrap justify-content-around ">
                {cards.map((card)=>{
                return(
                    <Cards class="card card_comida" id={card.id} image={card.image} titulo={card.titulo} precio={card.precio} descripcion={card.descripcion} peso={card.peso} edad={card.edad} presentacion={card.presentacion} raza={card.raza} tipo_alimento={card.tipo_alimento}/>
                )
                })}
            </div>
        </div>
    )
}

export default Marcas;