
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client';


const prisma= new PrismaClient();

const RutaApiProductos = async(req: NextApiRequest,res: NextApiResponse) => {
   if(req.method === 'GET'){
      console.log('Hice un get'); 
      const productos = await prisma.producto.findMany({});
      res.status(200).json({productos})
   }
};

export default RutaApiProductos;
