import { pickup, delivery, sumTotal, removeFromSummary, addCart, addFromSummary, emptyCart } from "../actions/index";
import cartReducer from "./cart";
import itemReducer from './index';

describe('Cart Reducer', () => {

    let defaultState = {};
    let selectedMenuNoTotal = {};
    let newOrder = {};
    let createNewOrder = {};
    
    beforeEach(()=>{
        defaultState = {
            deliveryType: "-",
            total: 0,
            cart: [],
          };
      
        selectedMenuNoTotal = {
            deliveryType: "delivery",
            total: 0,
            cart: [
              {
                itemId: 3,
                size: "small",
                extraCheese: false,
                quantity: 1,
                id: 0,
              },
              {
                itemId: 1,
                size: "small",
                extraCheese: false,
                quantity: 3,
                id: 1,
              },
              {
                itemId: 5,
                size: "small",
                extraCheese: false,
                quantity: 1,
                id: 2,
              },
            ],
          };

        newOrder = {
            extraCheese: false,
            itemId: 3,
            size: "small",
            quantity: 100
        };

        createNewOrder = {
            itemId: 0,
            size: "large",
            extraCheese: true,
            quantity: 10
        };
    });

    describe('Delivery Status', ()=> {
        it('Should return default state', () => {
            const newState = cartReducer(defaultState, {});
            expect(newState).toEqual(defaultState);
        });
    
        it('Should change delivery status', ()=> {
            const deliveryState = cartReducer(defaultState, delivery());
            const pickupState   = cartReducer(defaultState, pickup());
            expect(deliveryState).toEqual({...defaultState, deliveryType:'delivery'});
            expect(pickupState).toEqual({...defaultState, deliveryType:'pickup'});
        });
    });

    describe('Cart Transaction', ()=> {
        it ('Should add new item into summary', ()=> {
            const newState = cartReducer(selectedMenuNoTotal, addCart(newOrder));
            const createNewState = cartReducer(selectedMenuNoTotal, addCart(createNewOrder));
            const addOneMenu = cartReducer(selectedMenuNoTotal, addFromSummary(0));

            const filterExisting = newState.cart.filter(item => item.itemId === 3);
            const filterNewExisting = createNewState.cart.filter(item => item.itemId === 0);
            expect(filterExisting[0].quantity).toEqual(101);
            expect(filterNewExisting[0].quantity).toEqual(10);
            expect(addOneMenu.cart[0].quantity).toEqual(2);
        });

        it('Should remove an item by quantity (-1)', ()=> {
            const newStateWithoutRemove = cartReducer(selectedMenuNoTotal, removeFromSummary(1));
            const newStateWithRemove    = cartReducer(selectedMenuNoTotal, removeFromSummary(2));

            let filterWithoutRemove = newStateWithoutRemove.cart.filter(item => item.id === 1);
            let filterWithRemove = newStateWithRemove.cart.filter(item => item.id === 2);
            expect(filterWithoutRemove[0].quantity).toEqual(2);
            expect(filterWithRemove.length).toEqual(0);
        });

        it('Should return total selected cost', ()=> {
            const itemList = itemReducer({}, {});
            const totalAll = cartReducer(selectedMenuNoTotal, sumTotal(itemList.itemReducer));
            expect(totalAll.total).toEqual(48);
        })

        it('Should empty selection, clear delivery method, and change total to 0',()=>{
            const newStateClear = cartReducer({...selectedMenuNoTotal, total:48}, emptyCart());

            expect(newStateClear.deliveryType).toEqual('-');
            expect(newStateClear.total).toEqual(0);
            expect(newStateClear.cart.length).toEqual(0);
        });
    });

});