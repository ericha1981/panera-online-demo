import React, { Component } from 'react';
import './App.css';

import Header from './components/HeaderFooter/Header';
import AppBanner from './components/AppBanner/AppBanner';
import Container from './components/Container/Container';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import MenuContent from './components/MenuContent/MenuContent';
import MenuItem from './components/MenuItems/MenuItem';
import MenuItemContainer from './components/MenuItemContainer/MenuItemContainer';
import MenuContentTop from './components/MenuContent/NavMessage';

// data file - load item details
import { SandwichItems } from './data/OrderItems'; // SandwichItems is a const object


class App extends Component {
  state = {
    checkedItms: [
      {
        id: 1,
        name: "",
        qty: 0
      }
    ],
    items: [],
    item: {
      id: 0,
      name: "",
      price: 0,
      calorie: 0,
      description: "",
      nutrition: ""
    }
  }

  componentDidMount() {
    console.log("[componentDidMount] - MenuItem");

    // fetch all food menu in the category from Firebase
  }

  render() {
    const orderItems = SandwichItems;

    // current React JS version
    console.log("[React version]: ", React.version);

    const MenuItems = orderItems.map((orderItem, index) => {
      console.log(index, orderItem);

      return <MenuItem
        key={index}
        category={orderItem.calorie}
        name={orderItem.name}
        imageName={orderItem.imageName}
        price={orderItem.price}
        calorie={orderItem.calorie}
        description={orderItem.description}
        nutrition={orderItem.nutrition}>
      </MenuItem>
    })

    return (
      <div className="App">
        <Header />
        <AppBanner />
        <Container>
          <MenuNavigation />
          <MenuContent>

            <MenuContentTop />

            <MenuItemContainer>
              {MenuItems}
            </MenuItemContainer>

          </MenuContent>
        </Container>
      </div>
    );
  }
}

export default App;
