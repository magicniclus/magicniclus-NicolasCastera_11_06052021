import React, { Component } from 'react';
import DropDownBtn from '../components/DropDownBtn';
import Header from '../components/Header';
import { listForAboutPage } from '../services/dataManager';

export default class About extends Component {
    constructor() {
        super()
        this.data = listForAboutPage;
    }

    render() {
        return (
            <div className='globalContainer'>
                <Header />
                <main>
                    <div className='canvas'>
                        <img src="/img/IMG2.png" alt='paysage' />
                    </div>
                    <div className='container'>
                        {this.data.map((list) =>
                            <DropDownBtn key={list.title} title={list.title} text={list.text} name='dropDownBtnLarge'/>
                        )}
                    </div>
                </main>
            </div>
        )
    }
}