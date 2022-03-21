import {Request, Response} from 'express';
import {createMenuObject}  from '../helpers/createMenuObject'
import {Pet} from "../models/pet";


export const home = (req:Request,res:Response)=>{
    let list = Pet.getAllAnimals();
      res.render('pages/page',{
          menu: createMenuObject('all'),
          banner: {
              title:"Todos os animais",
              background: "allanimals.jpg"
          },
          list
      });  
}

export const dogs = (req:Request,res:Response)=>{
    let list = Pet.filterType('dog');
        res.render('pages/page',{
        cards:  Pet.filterType('dog'),    
        menu: createMenuObject('dog'),
         banner: {
            title:"Cães",
              background: "banner_dog.jpg"
          },
          list
    }); 
}

export const cats = (req:Request,res:Response)=>{
    let list = Pet.filterType('cat');
     res.render('pages/page',{
        cards:  Pet.filterType('cat'), 
        menu: createMenuObject('cat'),
         banner: {
              title:"Gatos",
              background: "banner_cat.jpg"
          },
          list
    }); 
}

export const fishes = (req:Request,res:Response)=>{
      let list =   Pet.filterType('fish');
     res.render('pages/page',{
        menu: createMenuObject('fish'),
        banner: {
              title:"Peixes",
              background: "banner_fish.jpg"
          },
          list
    }); 
}


