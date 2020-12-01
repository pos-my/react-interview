import React from 'react';
import DeliveryButton from '../../components/button/DeliveryButton';

class Main extends React.Component {
  openSelection=(deliveryType)=>{
    const {
      history
    } = this.props;
    history.push("selection", {
      deliveryType: deliveryType
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Method of Delivery</h3>
        <div className="buttonRow">
          <DeliveryButton
            title={"PICK UP"}
            value={"Pick Up"}
            onClick={this.openSelection} />
          <DeliveryButton
            title={"DELIVERY"}
            value={"Delivery"}
            onClick={this.openSelection} />
        </div>
      </div>
    );
  }
}

export default Main;
