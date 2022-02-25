import React, { Component } from 'react';

export default class Tags extends Component {
    constructor(props){
        super(props);
        this.tags=props.tags;
    }

    render(){
        return (
            <div className='tag'>
                <span className='tag_Title'>{this.tags}</span>
            </div>
        )
    }
}