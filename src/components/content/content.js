import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import * as repositoryActions from "../../store/actions/repositoryActions";

import Aux from '../hoc/Auxiliary';

import PizzaType from '../pizzaType/pizzatype';


import './content.css';

class ContentComponent extends React.Component {
  
  constructor() {
    super(); 
    this.state ={deliveryType:'',showPizzas:false};
  }

  
  componentDidMount(){
    this.setState({deliveryType:this.props.orderInformation.deliveryType});
  }

  handleChange = e => { 
    this.setState({ deliveryType: e.target.value,showPizzas:true });   
    this.props.onChangeType(e.target.value);    

  };


  render() {    
    return (    
      <Aux>
          <div className="row deliveryType">      
          <div className="col-md-6 col-sm-1">
            <label className="card">
                <input name="deliveryType" onChange={this.handleChange}               
                className="radio" value="delivery" checked={this.props.orderInformation.deliveryType==="delivery"} type="radio" readOnly></input>
                <span>
                  Delivery          
                </span>
            </label>
          </div>  
          <div className="col-md-6 col-sm-1">
            <label className="card">
              <input name="deliveryType" 
              onChange={this.handleChange}               
              className="radio" value="pickup" checked={this.props.orderInformation.deliveryType==="pickup"} type="radio" readOnly></input>              
                <span >
                    Pick Up           
                </span>
              </label>
          </div>            
        </div> 
        {
            this.props.orderInformation.deliveryType !== ""? <PizzaType></PizzaType> :null                          
        }
        
      </Aux>                  
    );
  }
}

const mapStateToProps = state => {    
  return{orderInformation:state}  ;
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeType: (obj) =>
      dispatch(repositoryActions.updateDeliveryType(obj))
  };
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentComponent));
