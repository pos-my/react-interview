import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findTestAtrr, testStore } from '../../../utilTest';

import Option from './Option';

const setUp = (props={}) => {
    const store = testStore();
    const component = mount(<Provider store={store}> <Option/> </Provider>);
    return component;
}

describe('Menu Component', ()=> {

    const component = setUp();

    it('Should render delivery buttons', ()=> {
        const pickupButton = findTestAtrr(component, 'pickupButton');
        const deliveryButton = findTestAtrr(component, 'deliveryButton');

        expect(pickupButton).toHaveLength(1);
        expect(deliveryButton).toHaveLength(1);
    })
})