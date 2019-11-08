import React from 'react';
import { shallow } from 'enzyme';
import Cart from './cart';

describe('<cart/>', () => {
    it('should fetch a list of items', done => {
      const shallowCart = shallow(<Cart />);
  
      setImmediate(() => {
        expect(shallowCart.state().items).toHaveLength(3);
        done();
      });
    });

    it('should correctly check for new items length', done => {
        const shallowCart = shallow(<Cart />);

        setImmediate(() => {
            expect(shallowCart.state().items).toHaveLength(3);
            expect(shallowCart.find('button')).toHaveLength(1);
            shallowCart.find('input').simulate('change', {target: {value: 'apples'}});
            setImmediate(() => {
              shallowCart.find('button').simulate('click');
              setImmediate(() => {
                expect(shallowCart.state().items).toHaveLength(4);
                expect([shallowCart.state().items.find( ({ name }) => name === 'apples' )]).toHaveLength(1);
                done();
              });
            });
        });
      });

      test('verify the input form is created', ()=>{ 
        const cart = shallow(<Cart/>);         
        expect(cart.find('input')).toHaveLength(1);
    });
  });