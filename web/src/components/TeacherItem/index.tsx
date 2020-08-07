import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    
            <header>
                <img src="https://avatars3.githubusercontent.com/u/47338575?s=460&u=dc6edc65db46c88fce7702d4283ca03f996bd7dd&v=4" alt="Felipe Moraes"/>
                <div>
                    <strong>Felipe Moraes</strong>
                    <span>Bateria</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic quis possimus repellat necessitatibus earum magni, autem corrupti aperiam consequuntur?
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae itaque ipsa optio et! Pariatur?
            </p>

            <footer>
                <p>Preço/hora <strong>R$50,00</strong> </p>
            
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
                            
        </article>
    )
}

export default TeacherItem;