import React from 'react';
import CheckoutItem from '../../components/card/CheckoutItem';
import FormButton from '../../components/button/FormButton';
import ConfirmOrderPopup from '../../components/popup/ConfirmOrderPopup';
import Utils from '../../helper/utils';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    const {
      deliveryType, pizzaList
    } = props.location.state;
    this.state = {
      deliveryType: deliveryType,
      pizzaList: pizzaList,
      showPopup: false
    };
  }

  handleConfirm=()=>{
    this.setState({
      showPopup: true
    });
  }

  handleClosePopup=()=>{
    this.setState({
      showPopup: false
    });
    this.goToMain();
  }

  goToMain=()=>{
    const {
      history
    } = this.props;
    history.push("");
  }

  renderItem=(item, index)=> {
    return (
      <CheckoutItem
        key={index}
        index={index}
        data={item} />
    );
  }

  render() {
    const {
      showPopup, deliveryType, pizzaList
    } = this.state;
    const itemList = pizzaList.map(this.renderItem);
    const totalPrice = Utils.calculateTotalPrice(pizzaList);
    return (
      <div className="container">
        <h3>Checkout Summary</h3>
        <div className="checkoutSummary">
          {itemList}
          <div className="checkoutTableBottom">
            <p className="checkoutItemTxt">Total Price: {totalPrice}$</p>
            <p className="checkoutItemTxt">Delivery Type: {deliveryType}</p>
          </div>
        </div>
        <div className="checkoutButtonRow">
          <FormButton
            title={"Confirm"}
            onClick={this.handleConfirm} />
          <FormButton
            title={"Cancel"}
            onClick={this.goToMain} />
        </div>
        <ConfirmOrderPopup
          isShowing={showPopup}
          handleClose={this.handleClosePopup} />
      </div>
    );
  }
}

export default Checkout;
