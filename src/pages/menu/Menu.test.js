import { shallow } from 'enzyme';
import Item from './item/Item';

import Menu from './Menu';

const setUp = (props={}) => {
    const component = shallow(<Item {...props} />);
    return component;
}

describe('Menu Component', ()=> {

    let wrapper;
    // beforeEach(() => {
    //     const props = {
    //         menu: 'test'
    //     };
    //     wrapper = setUp(props);
    // });
    it('Should render menu', ()=> {
        
    })
})