import React, {useState} from 'react'

const Card = (props) => {

    let cantidad = 0
    const [quantity, setQuantity] = useState(props.cantidad)
    const [items, setItems] = useState(1)

    function agregar(){
        console.log("Agregar")
        // quantity++
        setQuantity(quantity+items)
    }


    
    return (
        <>
            <h1>Card</h1>
            <h4>{quantity}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
            </h4>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => setItems(items-1)}>-</button>
                    <input type="number" value={items} />
                    <button onClick={() => setItems(items+1)}>+</button>
                    <a href="#" className="btn btn-primary" onClick={() => agregar()}>Agregar</a>
                </div>
            </div>
            <a href="#" className="btn btn-danger" onClick={() => {setQuantity(0)}}>Limpiar Carrito</a>
        </>
    )
}

export default Card;