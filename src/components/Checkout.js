import React, { Component }  from 'react';
import {reducerCart,clearCart} from '../actions/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit';
import ConfirmModal from '../modals/ConfirmModal';

class Checkout extends Component {
  constructor(props) {
    super(props);
    let total_cost=0;
    let total_quantity=0;
    this.props.cart.map((item,index)=>{
      if(index>0 && item){
        item.map((item2,index2)=>{
          let price=this.selected_pizza(index).price;
          if(parseInt(item2.size)===2){
            price+=2;
          }
          else if(parseInt(item2.size)===3){
            price+=4;
          }
          if(parseInt(item2.cheese)===1){
            price+=1;
          }
          price*=item2.quantity;
          total_cost+=price;
          total_quantity+=item2.quantity;
          return false;
        })
      }
      return false;
    })
    this.state = {
      show: false,
      show2:false,
      total:total_cost,
      quantity:total_quantity
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    
  }
  showModal = (e) => {
    this.setState({ show: true});
  };
  showModal2 = (e) => {
    this.setState({ show2: true});
  };
  hideModal = () => {
    this.setState({ show: false});
  };
  hideModal2 = () => {
    this.setState({ show2: false});
  };
  createSummary2(items,pizza_id){
    return items.map((item,index)=>{
      let size;
      let cheese="No Extra Cheese";
      let price=this.selected_pizza(pizza_id).price;
      if(parseInt(item.size)===1){
        size="Small";
      }
      else if(parseInt(item.size)===2){
        size="Medium";
        price+=2;
      }
      else if(parseInt(item.size)===3){
        size="Big"
        price+=4;
      }
      if(parseInt(item.cheese)===1){
        cheese="Extra Cheese"
        price+=1
      }
      price*=item.quantity;
      return(
        <Row key={pizza_id.toString()+"_"+index.toString()} id={pizza_id.toString()+"_"+index.toString()}>
          <Col lg="8"><div>{size}, {cheese}</div></Col>
          <Col lg="1"><div>{item.quantity}</div></Col>
          <Col lg="2"><div>${price}</div></Col>
        </Row>
      );
    })
  }
  selected_pizza(id){
    return this.props.pizzas.find(function(pizza, index) {
      if(pizza.id === id)
        return true;
      return false;
    });
  }
  createSummary(){
    return this.props.cart.map((item,index)=>{
      if(index>0 && item){
        return([
          <Row key={index} id={index}>
            <Col>
              <div className="fw-bold">{this.selected_pizza(index).name}</div>
            </Col>
          </Row>,this.createSummary2(item,index),
          <hr key={"break_"+index.toString()}/>
        ]);
      }
      return false;
    })
  }
  getOrderMethod(){
    if(this.props.cart[0]===0)
    {
      return "Delivery";
    }
    else if(this.props.cart[0]===1)
    {
      return "Pick-up";
    }
  }
  
  render(){
    return(
      <div>
        <ConfirmModal show={this.state.show} onHide={this.hideModal} title="Order Confirm" body="Are you sure you want to submit this order?" button_cnt="Submit Order" button_color="primary" action={this.props.clearCart} redirect="/success" />
        <ConfirmModal show={this.state.show2} onHide={this.hideModal2} title="Remove" body="Are you sure you want to remove this order?" button_cnt="Remove Order" button_color="danger" action={this.props.clearCart} redirect="/" />
        <Container>
          <h1 className='mt-4 mb-4 Center-align'>Order Summary</h1>
          <Row>
            <Col lg="8">Items</Col>
            <Col lg="1">Quantity</Col>
            <Col lg="2">Price</Col>
          </Row>
          <hr />
          {this.createSummary()}
          <Row>
            <Col lg="8"></Col>
            <Col lg="1"><p className="fw-bold total_quantity">{this.state.quantity}</p></Col>
            <Col lg="2"><p className="fw-bold total_price">Total Price: ${this.state.total}</p></Col>
          </Row>
          <Row>
            <Col lg="8"></Col>
            <Col lg="1"></Col>
            <Col lg="2"><p>Delivery Type: {this.getOrderMethod()}</p></Col>
          </Row>
          <Row>
            <Col lg="8"></Col>
            <Col lg="1"></Col>
            <Col lg="2">
              <Button variant="danger" onClick={this.showModal2}>
              Cancel
              </Button>
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col lg="8"></Col>
            <Col lg="1"></Col>
            <Col lg="2">
              <Button variant="primary" onClick={this.showModal}>
              Proceed
              </Button>
            </Col>
          </Row>
        </Container>
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
  return bindActionCreators({reducerCart:reducerCart,clearCart:clearCart},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Checkout)