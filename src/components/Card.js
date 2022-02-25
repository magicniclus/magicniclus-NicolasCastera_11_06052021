import { Redirect, NavLink } from "react-router-dom";
import { Component } from "react";

export default class Card extends Component{
    /**
     * [default description]
     *
     * @param   {import("../services/dataManager").homeAccomodation}  props  [props description]
     *
     * @constructor
     */
    constructor(props){
        super(props);
        this.title = props.title;
        this.image = props.image;
        this.id = props.id;
    }
    render() {
        return(
            <div className='card'>
                <NavLink exact to={"fiche-logement/"+this.id}>
                    <img src={this.image} alt={this.title} />
                    <div className="cardIn">
                        <h1>{this.title}</h1>
                    </div>
                </NavLink>
            </div>
        )

    }
}