import React from 'react';
import { shallow } from 'enzyme';
import Cart from './cart';
import InputComponent from '../input/inputComponent';

describe('<cart/>', () => {
    it('should fetch a list of items', done => {
      const shallowCart = shallow(<Cart />);
  
      setImmediate(() => {
        expect(shallowCart.state().items).toHaveLength(3);
        // expect(shallowCart.find('.task')).toHaveLength(2);
        done();
      });
    });

    it('should correctly check for new items length', done => {
        const shallowCart = shallow(<Cart />);

        setImmediate(() => {
            expect(shallowCart.state().items).toHaveLength(3);
            expect(shallowCart.find(InputComponent).dive().find('button')).toHaveLength(1);
            shallowCart.find(InputComponent).dive().find('input').simulate('change', {target: {value: 'apples'}});
            setImmediate(() => {
              shallowCart.find(InputComponent).dive().find('button').simulate('click');
              setImmediate(() => {
                expect(shallowCart.state().items).toHaveLength(4);
                expect(shallowCart.state().items.find( ({ name }) => name === 'apples' )).toHaveLength(1);
                done();
              });
            });
            
            // console.log('state is ', shallowCart.state().items)
            // 
            
            // expect(shallowCart.find('.task')).toHaveLength(2);
        });
        
      })
  });