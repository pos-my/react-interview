const Utils = {
  calculateTotalPrice(orderList) {
    let amount = 0;
    for (let i=0; i<orderList.length; i++) {
      amount += (orderList[i].price * orderList[i].quantity);
    }
    return amount;
  }
};

export default Utils;
