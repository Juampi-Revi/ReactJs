import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer';


function ItemListContainer () {
    const productos= [
        {id: 1,
        title: 'Harina Viada 0000',
        price: 2450,
        stock: 200,
        img: require('../assets/HarinaViada0000.png'),
        categoria: 'Harina',
        detalles: 'Esta harina tiene un elevado contenido de gluten y aditivos que aseguran un desarrollo normal en los distintos procesos de panificación logrando productos de elevado volumen específico, corteza crocante y buen color; migas de estructura uniforme que conservan la frescura inicial por más tiempo.'
    },
        {id: 2,
        title: 'Harina Viada 000',
        price: 2100,
        stock: 80,
        img: require('../assets/HarinaViada000.png')
    },
        {id: 3,
        title: 'Margarina Hurricane Hojaldre ',
        price: 3900 ,
        stock: 150,
        img: require('../assets/MargarinaHojaldreHurricane.png')
    },
        {id: 4,
        title: 'Margarina Masa Cordobesa',
        price: 4250,
        stock: 300,
        img: require('../assets/MargarinaMasaLaCordobesa.png') 
    },
        {id: 5,
        title: 'Dulce de Batata Serra',
        price: 960,
        stock: 40,
        img: require('../assets/DulcedeBatataSerra.png')
    },
        {id: 6,
        title: 'Dulce de Leche La Chakra',
        price: 1100,
        stock: 20,
        img: require('../assets/DulcedeLecheLaChakra.png')
    },
        {id: 7,
        title: 'Azucar Bella Vista',
        price: 1250,
        stock: 600,
        img: require('../assets/AzucarBellaVista.png')
    }
    ];
    const [items, setitems] = useState([]);

    useEffect(() => {
        let promises = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            },
            2000);
        });
        promises.then(
            (respuesta)=> {
            setitems(respuesta);
            }
        ).catch(
            (err) => console.error(err)
        );
    },[]
)
    
    return (
        <div className= 'contenedor-body'>
            <div className='titulo'>
                <h1>Mi Tienda</h1>
                <ItemCount stock = '5'/>
            </div>
            <div className='contenedor-items'>
                <ItemList data = { items } />
                <ItemDetailsContainer data = { items } />
            </div>
        </div>
    )
};

export default ItemListContainer;