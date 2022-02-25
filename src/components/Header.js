import React, { Component } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <NavLink to='/'>
                    <img className="logo" src="/img/logo.jpeg" alt="logo du site kasa" />
                </NavLink>
                <Navigation />
            </header>
        )
    }
}