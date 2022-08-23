import React from 'react';
import Header from './Header';

class DeliveryMethod extends React.Component {
    selectedMethod = React.createRef();

    goToApp = event => {
        event.preventDefault();
        const methodName = this.selectedMethod.current.value;
        this.props.history.push(`/store/${methodName}`);
  };
    
    render() {
        return (
            <div className="App">
                <Header subheader="How do you want it to be delivered"/>
                <div className='d-flex justify-content-center'>
                    <form className='l-form' onSubmit={this.goToApp}>
                        <div className="c-radio-box animate__animated animate__fadeInUp">
                            <input className="c-radio-box__input" id="pickup" type="radio" name="delivery" value="pickup" ref={this.selectedMethod} defaultChecked />
                            <label className="c-radio-box__label" htmlFor="pickup">
                                <strong className="c-radio-box__title">Self Pickup</strong>
                            </label>
                        </div>
                        <div className="c-radio-box animate__animated animate__fadeInUp animate__delay-250ms">
                            <input className="c-radio-box__input" id="delivery" type="radio" name="delivery" value="delivery" ref={this.selectedMethod} />
                            <label className="c-radio-box__label" htmlFor="delivery">
                            <strong className="c-radio-box__title">Delivery</strong>
                            </label>
                        </div>

                        
                        <button className='c-btn c-btn--large animate__animated animate__fadeInDown' type="submit" value="Submit">Next</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default DeliveryMethod;
