import React from "react";

class PizzaService extends React.Component {
  getPizzeTypes(){
      return  [
        {id:1,pizzatype:'ChonkyChicken',name:'Chonky Chicken',price:10},
        {id:2,pizzatype:'BeefBarbeque',name:'Beef Barbeque ',price:12},
        {id:3,pizzatype:'HawkingHawaiian',name:'Hawking Hawaiian',price:10},
        {id:4,pizzatype:'MargeretsMargherita',name:'Margeret\'s Margherita',price:10},
        {id:5,pizzatype:'VeganVillaVista',name:'Vegan Villa Vista',price:10}        
      ]
  }

  
}

export default new PizzaService();