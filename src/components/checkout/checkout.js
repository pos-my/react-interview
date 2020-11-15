import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import * as repositoryActions from "../../store/actions/repositoryActions";
import Aux from "../hoc/Auxiliary";

import './checkout.css';

class CheckoutComponent extends React.Component {
  total = 0;
 

  showMessage(){
      var result = window.confirm("you are about to place order. Are you sure?");
      if(result){
        alert('thank you for placing order. you will get information soon.');
        this.props.onProcessOrder();
        this.props.history.push("/");
      }      
  }
  render() {    
    return (      
        <Aux>
            <div className="row">             
              <table  className="table table-bordered table-stripped orderTable">
                  <thead>
                      <tr>
                            <td className="highlight">Pizza</td>
                            <td className="highlight">Quantity</td>
                            <td className="highlight">Price</td>
                      </tr>
                  </thead>
                  <tbody>
                  {                    
                    this.props.orderInformation.pizzas.length>0 ?this.props.orderInformation.pizzas.map((x,index)=>(
                           <tr key={index}>
                               <td><label className="pizzaName">{x.name}</label><label ><span className="highlight">extra cheese :</span>  {x.extraCheese}</label>   </td>
                                <td>{x.quantity}</td>
                               <td>${x.price}</td>
                           </tr> 

                    )):<tr></tr>
                  }
                    <tr>
                        <td colSpan="2">
                            <label className="highlight">Total</label>
                        </td>
                        <td>
                            ${this.props.orderInformation.pizzas.reduce((prevValue, currentValue) => prevValue + (currentValue.price*currentValue.quantity),0)}
                        </td>
                    </tr>
                  </tbody>
              </table>                
            </div>
            <div className="row processRow">            
                <button className="btn btn-process" onClick={this.showMessage.bind(this)}>process</button>
            </div>             
        </Aux>    
                             
    );
  }
}

const mapStateToProps = state => {    
  return{orderInformation:state}  ;
};

const mapDispatchToProps = dispatch => {
    return {
      onProcessOrder: () =>
        dispatch(repositoryActions.processOrder())
    };
  };

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutComponent));
