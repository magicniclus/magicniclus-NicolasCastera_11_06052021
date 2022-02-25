import React, { Component} from 'react';

export default class DropDownBtnSmallList extends Component{
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
            <div className="dropDownBtnSmallList">
                <button onClick={() => this.setState({ count: !this.state.count})} className='dropDownBtnSmallList_btn'>
                    <span className='title'>{this.title}</span>
                    <i className={!this.state.count ? "fas fa-chevron-up": "fas fa-chevron-down"}></i>
                </button>
                {this.addButton(this.state.count)}
            </div>
        );
    }

    addButton(value) {
        if(!value){
            return <ul className="dropDownBtnSmallList_buttom">
                    {this.text.map((value)=><li key={value}>{value}</li>)}
                </ul>
        }
    }
};