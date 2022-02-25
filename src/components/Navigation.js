import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component{
    render(){
        return (
            <div className="navigation">
                <NavLink to="/" exact className='accueil' activeClassName='active'>
                    Accueil
                </NavLink>
                <NavLink to="/a-propos" className='about' activeClassName='active'>
                    A Propos
                </NavLink>
            </div>
        );
    }
};