import React, { Component } from 'react';
import './MenuItem.css';

// Individual menu item box Component
class MenuItem extends Component {
    handlePopOverClick = (e) => {
        e.preventDefault();
        console.log('Description popover should show...');
    };

    render() {
        return (
            <div className="Placard">
                {/* The first curly bracket injects JavaScript into JSX. The inner curly brackets creates an object literal. 
                The styles are passed as object literals to the element. 
                <div style={{ backgroundColor: "yellow", width: "200px", minHeight: "100px" }}> */}
                <div className="Placard-Header">
                    <div className="col-sm-12 no-padding">
                        {/* <div className="no-margin"> */}
                        <div className="Placard-Title">
                            {this.props.name}
                        </div>
                        <div className="Placard-Details">
                            {/* ${this.props.price} */}
                            {/* {this.props.calorie} cal */}
                            <div className="price">${this.props.price}</div>
                            <div className="nutrition">{this.props.calorie} cal</div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="Placard-Content">
                    <div>
                        <div className="popovers hidden">
                            <div className="no-margin col-sm-12">
                                <div className="col-xs-6"><div className="js-popover" onMouseEnter={this.handlePopOverClick}>Description</div></div>
                                <div className="col-xs-6 text-right"><div className="js-popover">Nutrition</div></div>
                            </div>
                        </div>
                        <img src={require(`../../assets/images/sandwiches/${this.props.imageName}`)} alt="menu"></img>
                    </div>
                </div>
                <div className="Placard-Footer">
                    {/* <div className="no-margin"> */}
                    <div className="dropup dropdown col-xs-1">
                        <button className="btn-sm btn">
                            {/* <button className=""> */}
                            Whole
                            <span className="verticalDev"></span>
                            <span className="caret"></span>
                        </button>
                    </div>
                    <button className="btn btn-sm btn-default col-xs-2">Customize</button>
                    <div className="add-item col-xs-3">
                        <button className="btn btn-sm btn-primary">Add Item</button>
                    </div>
                    {/* </div> */}
                </div>
            </div >
        );
    }
}

export default MenuItem;
