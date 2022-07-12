import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


function ItemListContainer () {
    const productos= [
        {id: 1,
        title: 'Harina Viada 0000',
        price: 2450,
        stock: 200,
        img: require('./HarinaViada0000.png')},
        {id: 2,
        title: 'Harina Viada 000',
        price: 2100,
        stock: 80,
        img: require('./HarinaViada000.png')},
        {id: 3,
        title: 'Margarina Hurricane Hojaldre ',
        price: 3900 ,
        stock: 150,
        img: require('./HarinaViada000.png')},
        {id: 4,
        title: 'Margarina Margadam Masa',
        price: 2250,
        stock: 300,
        img: require('./HarinaViada000.png')},
        {id: 5,
        title: 'Dulce de Batata Serra',
        price: 960,
        stock: 40,
        img: require('./HarinaViada000.png')},
        {id: 6,
        title: 'Dulce de Membrillo Serra',
        price: 1100,
        stock: 20,
        img: require('./HarinaViada000.png')},
        {id: 7,
        title: 'Coco Rallado',
        price: 1250,
        stock: 600,
        img:require('./HarinaViada000.png') }
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
        <div className='titulo'>
            <h1>Mi Tienda</h1>
            <ItemCount stock = '5'/>
            <ItemList data = { items } />
        </div>
    )
};

export default ItemListContainer;