import './ItemCount.css';
import Button from '../Button/Button';
import Pantalla from '../Pantalla/Pantalla';
import { useState } from 'react';

function ItemCount (){
    let stock = 5;
    const [input, setinput] =useState(0);
    const sumarArticulo = () =>{
        if(input < stock){
            setinput(input + 1);
        }
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