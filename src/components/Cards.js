
function Cards(props) {
    return (
        <div className={props.class} style={{ width: "18rem;" }} id={props.id} key={props.id}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{props.peso}</li>
                    <li class="list-group-item">{props.edad}</li>
                    <li class="list-group-item">{props.presentacion}</li>
                    <li class="list-group-item">{props.raza}</li>
                    <li class="list-group-item">{props.tipo_alimento}</li>
                </ul>
                <p className="card-text">{props.precio}</p>
                <a href="#" className="btn btn-primary">comprar</a>
            </div>
        </div>
    )
}
export default Cards;