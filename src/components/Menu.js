import React, { Component }  from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { connect } from 'react-redux'
import {reducerCart} from '../actions/index';
import { bindActionCreators } from '@reduxjs/toolkit';
import {Link } from "react-router-dom";
import {RiDeleteBinLine} from 'react-icons/ri';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {setCartmethod} from '../actions/index';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected:{},
      temp_cart:[]
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  showModal = (e) => {
    this.setState({ show: true ,selected:this.selected_pizza(e.target.id),temp_cart:(this.props.cart[e.target.id]||[])});
  };

  hideModal = () => {
    this.setState({ show: false ,temp_cart:[]});
  };
  get_quantity(id){
      if(id in this.props.cart && this.props.cart[id]){
        const sum=this.props.cart[id].reduce((total,num)=>{return total+=num.quantity},0)
        return sum;
      }else{
        return 0;
      }
  }
  selected_pizza(id){
    return this.props.pizzas.find(function(pizza, index) {
      if(parseInt(pizza.id) === parseInt(id))
        return true;
      return false;
    });
  }
  add_pizza=(e)=>{
    e.preventDefault();
    let temp_cart=JSON.parse(JSON.stringify(this.state.temp_cart));
    let exists= temp_cart.findIndex(function(item, index) {
      if(item.size === e.target.size.value && item.cheese === e.target.cheese.value)
        return true;
      return false;
    });
    if(exists>=0){
      if(temp_cart[exists].quantity>=99)
      {
        return;
      }
      temp_cart[exists].quantity+=1;
    }
    else
    {
      temp_cart.push({size:e.target.size.value,cheese:e.target.cheese.value,quantity:1});
    }
    this.setState({ temp_cart:temp_cart});
    this.refresh_button();
  }
  createPizzaLists(){
    return this.props.pizzas.map((pizza)=>{
      return(
        <ListGroup.Item action className={"d-flex justify-content-between align-items-start pizza_"+pizza.id.toString()} key={pizza.id} id={pizza.id} onClick={this.showModal}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{pizza.name}</div>
            <p>${pizza.price}</p>
          </div>
          <Badge bg="primary" key={pizza.id} id={pizza.id} onClick={this.showModal}>
            {this.get_quantity(pizza.id)}
          </Badge>
        </ListGroup.Item>
      );
    })
  }
  quantity_check(e,that){
    e.target.value=e.target.value.replace(/\D/g,'');
    // if(!e.target.value){
    //   e.target.value=e.target.defaultValue;
    // }
    let temp_cart=JSON.parse(JSON.stringify(that.state.temp_cart));
    if(e.target.value==='0'){
      if (window.confirm("Are you sure you want to remove this item?") === true) {
        temp_cart.splice(e.target.id, 1);
      } else {
        e.target.value=e.target.defaultValue;
      }
    }
    else
    {
      if(e.target.value==="")
      {
        temp_cart[e.target.id].quantity="";
      }
      else
      {
        temp_cart[e.target.id].quantity=parseInt(e.target.value);
      }
    }
    that.setState({ temp_cart: temp_cart});
  }
  quantity_change(e,that,amount){
    let temp_cart=JSON.parse(JSON.stringify(that.state.temp_cart));
    let temp_amount=temp_cart[e.target.id].quantity;
    if(!temp_amount){
      temp_amount=0;
    }
    temp_amount+=amount;
    if(temp_amount<=0){
      if (window.confirm("Are you sure you want to remove this item?") === true) {
        temp_cart.splice(e.target.id, 1);
        that.setState({ temp_cart: temp_cart});
        return;
      } else {
        return
      }
    }
    else if(temp_amount>99){
      temp_amount=99;
    }
    temp_cart[e.target.id].quantity=temp_amount;
    that.setState({ temp_cart: temp_cart});
  }
  remove_pizza(e,that){
    let temp_cart=JSON.parse(JSON.stringify(that.state.temp_cart));
    if (window.confirm("Are you sure you want to remove this item?") === true) {
      temp_cart.splice(e.target.id, 1);
    } else {
      return;
    }
    that.setState({ temp_cart: temp_cart});
  }
  createtempcart(){
    const temp_cart=this.state.temp_cart;
    return temp_cart.map((item,index)=>{
      let size;
      let cheese="No Extra Cheese";
      let price=this.state.selected.price;
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
      return(
        <ListGroup.Item className="d-flex justify-content-between align-items-start" key={index} id={index}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{size}</div>
            <div>{cheese}</div>
            <div className="fw-bold text-primary temp_price">${price*item.quantity}</div>
          </div>
          <div>
            <InputGroup>
              <Button variant="outline-danger" id={index} onClick={(e)=>{this.remove_pizza(e,this)}}><RiDeleteBinLine /></Button>
              <Button variant="danger" id={index} onClick={(e)=>{this.quantity_change(e,this,-1)}}>-</Button>
              <input onChange={(e)=>{this.quantity_check(e,this)}} id={index} name="quantity" className='quantity_input' size='3' maxLength='2' value={item.quantity} />
              <Button variant="success" id={index} onClick={(e)=>{this.quantity_change(e,this,1)}}>+</Button>
            </InputGroup>
          </div>
        </ListGroup.Item>
      );
    })
  }
  save_temp_cart(id){
    let temp_cart=this.state.temp_cart;
    temp_cart = temp_cart.filter(function( obj ) {
      return parseInt(obj.quantity);
    });
    this.props.reducerCart(id,temp_cart);
    this.hideModal();
  }
  refresh_button(){
    const cart = this.props.cart;
    let cart_empty=true;
    for (var i = 0; i < cart.length; i++)
    {
      if(i>0 && cart[i]){
        if(cart[i].length>0)
        {
          cart_empty=false;
          break;
        }
      }
    }
    return cart_empty;
  }
  change_delivery(e,that)
  {
    if(e.target.id==="Delivery" && e.target.checked)
    {
      that.props.setCartmethod(0);
    }
    else if(e.target.id==="Pick-up" && e.target.checked)
    {
      that.props.setCartmethod(1);
    }
  }
  render(){
    return(
      <div>
        <h1 style={{textAlign:"center"}} className='mt-4 mb-4'>Menu</h1>
        <Modal size="lg" show={this.state.show} onHide={this.hideModal} backdrop="static" centered>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selected.name||""}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="temp_cart" onSubmit={this.add_pizza} >
              <input type="hidden" name="pizza" value={this.state.selected.id||""}/>
              <ListGroup>
                {this.createtempcart()}
              </ListGroup>
              <div className='input-group mt-4'>
                <Form.Select name="size" aria-label="size" size="sm">
                  <option value="1">Small Size</option>
                  <option value="2">Medium Size(+$2)</option>
                  <option value="3">Large Size(+$4)</option>
                </Form.Select>
                <Form.Select name="cheese" aria-label="cheese" size="sm">
                  <option value="1">Extra Cheese(+$1)</option>
                  <option value="0">No Extra Cheese</option>
                </Form.Select>
                <Button variant="primary" type="submit" className="float-end add_button" size='sm'>
                  Add
                </Button>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button className="save_button" variant="primary" onClick={()=>{this.save_temp_cart(this.state.selected.id)}}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <ListGroup>
          {this.createPizzaLists()}
        </ListGroup>
        <Container fluid>
          <Row>
            <Col>
              <Form className="float-end mt-4">
                <Form.Label>Delivery Type:</Form.Label>
                <Form.Check
                  label="Delivery"
                  id="Delivery"
                  name="Delivery"
                  type="radio"
                  onChange={(e)=>{this.change_delivery(e,this)}}
                  checked={!this.props.cart[0]}
                />
                <Form.Check
                  label="Pick-up"
                  id="Pick-up"
                  name="Delivery"
                  type="radio"
                  onChange={(e)=>{this.change_delivery(e,this)}}
                  checked={this.props.cart[0]}
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className='mt-4'>
              <Link to="/checkout">
                <Button disabled={this.refresh_button()} className="float-end" variant="primary">
                  Check Out
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
};

function mapStateToProps(state){
  return{
    pizzas:state.pizzas,
    cart:state.cart
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({reducerCart:reducerCart,setCartmethod:setCartmethod},dispatch)
}

// export default Menu;
export default connect(mapStateToProps,matchDispatchToProps)(Menu)