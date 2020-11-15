import React from "react";
import { connect } from "react-redux";
import pizzaService from '../../services/pizzaService'; 
import { withRouter } from 'react-router-dom';

import * as repositoryActions from "../../store/actions/repositoryActions";

import "./pizzaType.css";
class PizzaType extends React.Component {
  selectedPizza=null;
  activePizza =null;

  divStyle={
    padding: '30px'
  };

  constructor(){
    super();
    this.state={pizzaTypes:[],activePizza:{}};
  }

  componentDidMount = () => {    
    var selectedPizzas= this.props.orderInformation.pizzas;
    var serverPizzas = pizzaService.getPizzeTypes();  
    var activePizza ={};  
    if(serverPizzas && serverPizzas.length>0){      
      serverPizzas.forEach(x=>{
        var idx= selectedPizzas.findIndex(e=>e.id===x.id);        
        if(idx>-1){          
          x.selected=true;          
          x.extraCheese=selectedPizzas[idx].extraCheese;
          x.size=selectedPizzas[idx].size;
          x.quantity = selectedPizzas[idx].quantity;   
          if(selectedPizzas[idx].active){
            x.active = true;
            activePizza= x;
          }       
        }else{
          x.selected=false;
        }
      });              
    }
   

    this.setState({
      pizzaTypes:serverPizzas,
      activePizza:activePizza
    });   
    
  };

  updateActivePizza=(e)=>{
    var pizzas=this.state.pizzaTypes;          
    var idx =pizzas.indexOf(e);
    pizzas.forEach(x=>{
      x.active=false;
    })

    if(!e.active){
      pizzas[idx].active=true;                              
    }else{
      pizzas[idx].active=false;          
    }
    this.setState({pizzaTypes:pizzas,activePizza:pizzas[idx]});  
  }

  AddPizza= (e)=>{          
      var pizzas=this.state.pizzaTypes;          
      var idx =pizzas.indexOf(e);     
      if(!e.selected){
        pizzas[idx].selected=true;
        console.log('d',pizzas[idx]);                 
        this.props.onAddPizza(e); 
        this.setState({pizzaTypes:pizzas,activePizza:pizzas[idx]});      
      }else{
        pizzas[idx].selected=false;   
        this.props.onDeletePizza(e); 
        this.setState({pizzaTypes:pizzas,activePizza:{}});    
      }
      
            
  }

  updatePizzaSize(e){
      var activePizza = this.state.activePizza;
      console.log('pizza size',e.target.value);
      activePizza.size=e.target.value;
      this.props.onUpdatePizza(e);
  }

  updateExtraCheese(e){
    var activePizza = this.state.activePizza;
    console.log('pizza size',e.target.value);
    activePizza.extraCheese=e.target.value;
    this.props.onUpdatePizza(e);
  }

  updateQuantity(e){
    var activePizza = this.state.activePizza;
    console.log('pizza size',e.target.value);
    activePizza.quantity=e.target.value;
    this.props.onUpdatePizza(e);
  }

  checkOut(path,e) {
    this.props.history.push(path);
  }


 

  render() {
    return (
      <div className="row" style={this.divStyle}>
        <div className="col-md-6 col-sm-6">
        {
            this.state.pizzaTypes.map((x,index)=>(                                          
              <div className={ x.active ? "pizzatype pizzatypefocus":"pizzatype"} 
              onClick={this.updateActivePizza.bind(this,x)}
               key={index} >
                    <input type="checkbox" onChange={this.AddPizza.bind(this,x)}  checked={x.selected} className="pizzaTypecheckbox" id={x.id} readOnly></input>
                    <span>{x.name}</span>
                    <span className="pizzaPrice">${x.price}</span>
              </div>              
            ))
        }
        </div>
          
        <div className="col-md-6 col-sm-6">
            <div className="sizeDiv">
              <span className="header">choose size:</span>
              <label><input type="radio" className="sizeBox" value="small" checked={this.state.activePizza.size ==='small'?true:false} name="size" onChange={this.updatePizzaSize.bind(this)} ></input>small</label>
              <label><input type="radio" className="sizeBox"  value="medium" name="size" checked={this.state.activePizza.size ==='medium'?true:false} onChange={this.updatePizzaSize.bind(this)}></input>medium</label>
              <label><input type="radio" className="sizeBox" value="large" name="size" checked={this.state.activePizza.size ==='large'?true:false} onChange={this.updatePizzaSize.bind(this)}></input>large</label>                
            </div>
            <div className="cheeseDiv">
              <span className="header">Extra cheese:</span>                
              <label><input type="radio" className="sizeBox" name="extraCheese" checked={this.state.activePizza.extraCheese ==='yes'?true:false} value="yes" onChange={this.updateExtraCheese.bind(this)}></input>yes</label>
              <label><input type="radio" className="sizeBox" name="extraCheese" checked={this.state.activePizza.extraCheese ==='no'?true:false} value ="no" onChange={this.updateExtraCheese.bind(this)}></input>no</label>
            </div>  
            <div className="quantityDiv">
            <span className="header">Quantity:</span>                
                <input type="number"  className="form-control quantityBox"  value={this.state.activePizza.quantity && this.state.activePizza.quantity !=="" ? this.state.activePizza.quantity:""}  onChange={this.updateQuantity.bind(this)} id="quantity"></input>              
            </div> 
            <div className="btnDiv">
                <button className="btn btn-next" onClick={this.checkOut.bind(this,"/checkout")}> checkout </button>
            </div>                                               
        </div>
      </div>      
    );
  }
}

const mapStateToProps = state => { 
  return {
    orderInformation: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPizza:(obj) => dispatch(repositoryActions.addPizza(obj)),
    onUpdatePizza:(obj) => dispatch(repositoryActions.updatePizza(obj)),
    onDeletePizza:(obj) => dispatch(repositoryActions.deletePizza(obj)),

  };
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaType));
