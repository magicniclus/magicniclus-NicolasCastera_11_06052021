import React, { Component } from 'react';

export default class StarRating extends Component {
    constructor(props) {
        super(props);
        this.validStars = props.stars;
        this.starInit = [1, 2, 3, 4, 5];
    }

    render() {
        return (
            <div className='starContainer'>
                {this.starInit.map((star) => { return this.starCheck(star) }
                )}
            </div>
        )
    }

    starCheck(star) {
        this.index = this.starInit.indexOf(star);
        if (this.index + 1 <= this.validStars) return <i key={star} className="fas fa-star check"></i>
        else return <i key={star} className="fas fa-star uncheck"></i>
    }
}