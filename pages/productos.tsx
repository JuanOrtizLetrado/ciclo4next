import React from 'react'


import { PrismaClient } from '.prisma/client';


const prisma= new PrismaClient();

export async function getServerSideProps(){
    const productos = await prisma.producto.findMany({});
    
    return{
        props:{productos},

    };
}

const Productos = ({productos}) => {
    console.log('Esta es la variable en el fornt', productos)
    return (
        <div>
            estos son mis productos
            <div>tabla Productos</div>
            <div>Ya envie los datos mire en nspeccionar y en consola</div>
        </div>
    )
}

export default Productos
