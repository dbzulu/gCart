import React, { Component } from 'react';
import api from '../api';
import Item from '../item/item';
import ItemModel from '../item/item.model';

class Cart extends Component {
  state = {
    items: [],
    itemToAdd: ''
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;

    api.getTasks().then(tasksData => {
      if(this.mounted) {
        this.setState({
          items: tasksData
        });
      }
    });
  }

  updateItem = event => {
    this.setState({ itemToAdd: event.target.value }, () => {
    });
  }

  createAndAddItem = () => {
    const item = new ItemModel(this.state.itemToAdd, 10.00, false);
    this.addItem(item);
  }

  addItem = (item) => {
    api.putItems(item).then(tasksData => {
      console.log('trying to set state with item - ', item)
      this.setState({
        items: [...this.state.items, item]
      });
    });
    
  }

  render() {
    return (
      <div>
        <h1>cart Items</h1>
        <form> 
          <label> 
            Input Item: 
            <input value={this.state.itemToAdd} onChange={this.updateItem} type="text" name="name" />
          </label>
          <button onClick={this.createAndAddItem} type="submit" name="Create"> Add Item</button>
        </form>
        <ul>
          <Item item={new ItemModel('Test1', 3.50, false)}/>
        </ul>
      </div>
    )
  }
}

export default Cart;