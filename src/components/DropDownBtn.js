import React, {Component} from 'react';

export default class DropDownBtn extends Component{
    constructor(props){
        super(props);
        this.ul = true;
        this.title = props.title;
        this.text = props.text;
        this.ul = true;
        this.name = props.name

        this.state = {
            count: true
          };
    }

    render(){
        return (
            <div className={this.name}>
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
            if(this.name === "dropDownBtnLarge" || this.name === "dropDownBtnSmall"){
                return <div className={this.name + "_buttom"}>
                        <span>{this.text}</span>
                    </div>
            } else {
                return <ul className="dropDownBtnSmallList_buttom">
                    {this.text.map((value)=><li key={value}>{value}</li>)}
                </ul>
            }

        }
    }
};

//"dropDownBtnLarge_buttom" 