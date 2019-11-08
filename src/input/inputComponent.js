import React, { Component } from 'react';
import Item from '../item/item';
import ItemModel from '../item/item.model'

class InputComponent extends React.Component{ 
    constructor(props){ 
        super(props);
        this.state = { itemName: '' };
    }

    updateItem = event => {
        console.log('event target was ' , event.target.value)
        this.setState({ itemName: event.target.value }, () => {
            console.log('state after setting ' , this.state.itemName)
        });
        
    }

    createAndAddItem = () => {
        console.log('state when adding the item ' , this.state);
        const item = new ItemModel(this.state.itemName, 10.00, false);
        this.props.addItem(item);
    }

    render(){ 
        return (
            <form> 
                <label> 
                    Input Item: 
                    <input value={this.state.itemName} onChange={this.updateItem} type="text" name="name" />
                </label>
                <button onClick={this.createAndAddItem} type="submit" name="Create"> Add Item</button>
            </form>
        ); 
    }
}

export default InputComponent; 