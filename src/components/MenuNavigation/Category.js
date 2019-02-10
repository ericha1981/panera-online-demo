import React, { Component } from 'react';
import './Category.css';

class Category extends Component {
    render() {
        const subMenuComponent =
            this.props.subMenu ? (
                this.props.subMenu.map((subItem, index) => {
                    console.log(subItem);
                    return (
                        <ol key={index}>
                            <li style={{ paddingLeft: 20 }}><span>{subItem}</span></li>
                        </ol>
                    );
                })
            ) : null;

        const dashedLineStyle = this.props.separator ? {
            borderBottom: '1px dashed #ad785f',
            paddingBottom: 10
        } : null;

        const CategoryComponent = <li style={{ ...dashedLineStyle }}><span>{this.props.menuName}</span>{subMenuComponent}</li>;

        return (
            <React.Fragment>
                {CategoryComponent}
            </React.Fragment>
        )
    }
}

export default Category;


