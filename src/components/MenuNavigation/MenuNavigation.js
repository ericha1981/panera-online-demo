import React from 'react';
import './MenuNavigation.css';

import Category from './Category';


// width: "16.66666667%"
// Menu content container area
export default (props) => (
    <div style={{ backgroundColor: "#fff" }}
        className="MenuNavigation">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search"></input>
        </div>
        <div>
            <h4>Our Menu</h4>
            <ol>
                <Category menuName="Plant Based" />
                <Category menuName="Protein Rich" />
                <Category menuName="Nutrient-Packed" separator="1" />
                <Category menuName="In Season" />
                <Category menuName="Breakfast" />
                <Category menuName="You Pick Two" />
                <Category menuName="Soups & Mac" />
                <Category menuName="Salads" />
                <Category menuName="Sandwiches" subMenu={["Sandwiches", "Flatbreads"]} />
                <Category menuName="Bowl Meal" />
                <Category menuName="Bowls" />
                <Category menuName="Pasta Meal" />
                <Category menuName="Pasta" />
                <Category menuName="Kids" />
                <Category menuName="Beverages" />
                <Category menuName="Bakery" />
                <Category menuName="Sides & Spreads" />
            </ol>
        </div>
    </div>
);
