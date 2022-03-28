import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from '@reduxjs/toolkit';
import {setCartmethod} from '../actions/index';
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

class Home extends Component {
  render(){
    return(
      <div className='Center'>
        <h2 className='mt-4 mb-4 Center-align'>Delivery Type</h2>
        <Link to="/menu"><Button className='delivery_btn' size="lg" onClick={()=>{this.props.setCartmethod(0);}}>Delivery</Button></Link>
        <Link to="/menu"><Button className='pickup_btn' size="lg" onClick={()=>{this.props.setCartmethod(1);}}>Pick-up</Button></Link>
      </div>
      )
  }
};

function mapStateToProps(state){
  return{
    pizzas:state.pizzas,
    cart:state.cart
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({setCartmethod:setCartmethod},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Home)