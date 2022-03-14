import SumContent from './SumContent';
import SumEmpty from './SumEmpty';
import { useSelector } from 'react-redux';

function Summary() {
  const cartStatus = useSelector( (state) => state.cartReducer );
  // console.log(cartStatus);
  return (
    <div style={{backgroundColor:'#b4b8b5', height:'100%'}}>
      <h5>{cartStatus.deliveryType.toUpperCase()}</h5>
      {cartStatus.cart.length === 0 ? <SumEmpty/> : <SumContent/>}
    </div>
  )
}

export default Summary