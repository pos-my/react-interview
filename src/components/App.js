import React from 'react';
import Header from './Header';
import '../style/App.css';

function App() {

    const menu = [
        {   
            id: 1,
            className: '',
            name: 'Chonky Chicken',
            price: 10,
            description: 'Chicken, lettuce, tomato, onion, pickles, and cheese'
        },
        {
            id: 2,
            className: 'animate__delay-250ms',
            name: 'Beef Barbeque',
            price: 12,
            description: 'Beef, lettuce, tomato, onion, pickles, and cheese'
        },
        {
            id: 3,
            className: 'animate__delay-350ms',
            name: 'Hawking Hawaiian',
            price: 10,
            description: 'Ham, pineapple, and cheese'
        },
        {
            id: 4,
            className: 'animate__delay-450ms',
            name: 'Margeret\'s Margherita',
            price: 8,
            description: 'Tomato, basil, and cheese'
        },
        {
            id: 5,
            className: 'animate__delay-550ms',
            name: 'Vegan Villa Vista',
            price: 8,
            description: 'Vegan cheese, tomato, and basil'
        }
    ];

  return (
    <div className="App">
      <Header subheader="Which one?"/>
      <div className='d-flex justify-content-center flex-row'>
        <form className='l-form'>
            {/* TODO: Restructure. This will do for now */}
            {menu.map(item => (
                <div key={item.id} className={`c-radio-box animate__animated animate__fadeInUp ${ item.className }`}>
                    {/* unique id */}
                    <input className="c-radio-box__input" id={item.id} type="checkbox" name="pizza" value={item.id} />
                    <label className="c-radio-box__label" htmlFor={item.id}>
                        <span className="c-radio-box__price">${item.price}</span>
                        <br/>
                        <strong className="c-radio-box__title">{item.name}</strong>
                        <br/>
                        <small className="c-radio-box__description text-fade">{item.description}</small>
                    </label>
                </div>
            ))}
            <button className='c-btn c-btn--large animate__animated animate__fadeInDown animate__delay-450ms' type="submit" value="Submit">Next</button>

        </form>
     </div>
        
    
    </div>
  );
}

export default App;
