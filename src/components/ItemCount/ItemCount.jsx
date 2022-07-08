import './ItemCount.css';
import Button from '../Button/Button';
import Pantalla from '../Pantalla/Pantalla';
import { useState } from 'react';

function ItemCount ({ stock }){
    const [input, setinput] =useState(0);
    const sumarArticulo = () =>{ input < stock ? setinput(input + 1): alert('NO HAY STOCK SUFICIENTE')
    };
    const restarArticulo = () =>{
        if(input > 0){
            setinput(input - 1)
        }
    };
    return (
        <div className="contenedor-botones">
            <Button manejarClick = {sumarArticulo}>
                +
            </Button>
            <Pantalla input = { input }/>
            <Button manejarClick = {restarArticulo}>
                -
            </Button>
        </div>
        
    )
};

export default ItemCount;