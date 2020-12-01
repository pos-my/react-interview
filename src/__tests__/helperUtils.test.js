import Utils from '../helper/utils';

it('test calculateTotalPrice function', ()=>{
  const orderList = [
    {price: 12, quantity: 1},
    {price: 10, quantity: 1},
    {price: 15, quantity: 3}
  ];
  expect(Utils.calculateTotalPrice(orderList)).toEqual(67);
})
