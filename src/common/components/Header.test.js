import { shallow } from 'enzyme';
import { findTestAtrr } from '../../utilTest';
import Header from './Header';


describe('Header Component', ()=> {
    it('Should render header', () => {
        const component = shallow(<Header />);

        expect(findTestAtrr(component, 'navbar')).toHaveLength(1);
        expect(findTestAtrr(component, 'navbar-content')).toHaveLength(1);
    })
});