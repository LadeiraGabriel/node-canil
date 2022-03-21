import {Request, Response} from 'express';
import {Pet} from '../models/pet';
type PetType = 'dog' | 'cat' | 'fish';

export const search = (req:Request,res: Response)=>{
     let pesquisa: string = req.query.q  as string
     if(!pesquisa){
         res.redirect('/');
         return;
     }
    let list = Pet.getFromName(pesquisa);
    
       res.render('pages/page',{
          list
      })  
}