import React, { Component } from 'react';

export default class LightBox extends Component{
    constructor(props){
        super(props)
        this.img = props.img;
        this.title = props.title;
        this.imgLength = this.img.length;
        this.state = {
            count: 0
        }

    }

    render(){
        return(
            <div className='ligthBox'>
                <button className={this.prev()} onClick={()=>this.setState(this.state.count !== 0 ? {count: this.state.count - 1}: {count: this.state.count + (this.imgLength - 1)})}><i className="fas fa-chevron-left"></i></button>
                <img src={this.img[this.state.count]} alt={this.title}/>
                <button className={this.next()} onClick={()=>this.setState(this.state.count >= 0 && this.state.count < this.imgLength - 1? {count: this.state.count + 1}: {count: this.state.count - (this.imgLength - 1)})}><i className="fas fa-chevron-right"></i></button>
            </div>
        )
    }

    prev(){
        if(this.imgLength === 1){
            return 'prevBtn none';
        } else 
        return "prevBtn";
    }

    next(){
        if(this.imgLength === 1){
            return 'nextBtn none';
        } else return 'nextBtn';
    }
}