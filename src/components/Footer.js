import React, {Component} from 'react';

export default class Footer extends Component{

    render(){
        return(
            <footer>
                <img className='logoFooter' src="/img/logo_dark.png" alt="logo du site kasa"/>
                <span>© 2020 Kasa. All rights reserved</span>
            </footer>
        )
    }
}