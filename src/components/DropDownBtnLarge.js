import React, { Component} from 'react';

export default class DropDownBtnLarge extends Component{
    constructor(props){
        super(props);
        this.ul = true;
        this.title = props.title;
        this.text = props.text;
        this.ul = true;

        this.state = {
            count: true
          };
    }

    render(){
        return (
            <div className="dropDownBtnLarge">
                <button onClick={() => this.setState({ count: !this.state.count})} className='dropDownBtnLarge_btn'>
                    <span className='title'>{this.title}</span>
                    <i className={!this.state.count ? "fas fa-chevron-up": "fas fa-chevron-down"}></i>
                </button>
                {this.addButton(this.state.count)}
            </div>
        );
    }

    addButton(value) {
        if(!value){
            return <div className="dropDownBtnLarge_buttom">
                    <span>{this.text}</span>
                </div>
        }
    }
};