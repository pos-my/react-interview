import chicken from '../../images/chicken.jpg';
import beef from '../../images/beef.jpg';
import hawking from '../../images/hawking.jpg';
import margeret from '../../images/margeret.jpg';
import vegan from '../../images/vegan.jpg';

const itemList = [
    {
        id: 1,
        name: 'Chonky Chicken',
        price: 10,
        imgurl: 'chicken.jpg',
        import: chicken
    },
    {
        id: 2,
        name: 'Beef Barbeque',
        price: 12,
        imgurl: 'beef.jpg',
        import: beef
    },
    {
        id: 3,
        name: 'Hawking Hawaiian',
        price: 10,
        imgurl: 'hawking.jpg',
        import: hawking
    },
    {
        id: 4,
        name: 'Margeret\'s Margherita',
        price: 8,
        imgurl: 'margeret.jpg',
        import: margeret
    },
    {
        id: 5,
        name: 'Vegan Villa Vista',
        price: 8,
        imgurl: 'vegan.jpg',
        import: vegan
    }
];
const itemReducer = (state = itemList, action) => {
    switch (action.type) {
        default : 
            return state
    }
}

export default itemReducer;