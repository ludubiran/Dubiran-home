import React from "react";
import './index.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs/'
import { AiFillLinkedin } from 'react-icons/ai'




function Home() {
    return (
        <div className='container'>
            <div className='content-first-content'>
                <div className='first-colum'>
                    <h2 className='title title-bemvindo'>BEM VINDO!</h2>
                    <p className='description'>Contrate para o próximo show</p>
                    <p className='description'>Por favor, crie sua conta para informações</p>
                    <p className='description1'>Ou acesse seu Login</p>
                    <button className='btn1'> Login </button>
                </div>
                <div className='second-colum'>
                    <h2 className='title title-acesse'>ACESSE COM </h2>
                    <div className='social-midia'>
                        <ul>
                            <li className="item-social-midia">
                                <a href="https://www.facebook.com/?stype=lo&jlou=AffvRDSMFWDc2vNjaKpAFxhEBMaJ5nCZUhKQ7-INTRLJ7TclHt5uP55Daa4_olM3oD-Oc3V2_qHbTO4jx91qI1R3H1pOaguvfZt7MvTgRMwUEw&smuh=28926&lh=Ac9cju8nx4PiYBKAPTg"><BsFacebook /></a></li>
                            <li className="item-social-midia">
                                <a href='https://www.instagram.com/'><BsInstagram /></a>
                            </li>
                            <li className="item-social-midia">
                                <a href='https://www.linkedin.com/home'><AiFillLinkedin /></a>
                            </li>
                        </ul>
                    </div>
                    <p className="crie">ou crie sua conta</p>
                    <form className='form'>
                        <input type="text" placeholder='Nome'></input>
                        <input type="email" placeholder='Email'></input>
                        <input type="number" placeholder='contato'></input>
                        <input type="password" placeholder='Senha'></input>
                        <button className='btn'>Cadastrar</button>
                    </form>

                </div>
            </div>
            <div className='content-second-content'>
                <div className='first-colum2'>
                    <h2 className='title'>OLÁ, AMIGOS</h2>
                    <p className='description'>Agende para o proximo show</p>
                    <p className='description'>Por favor, entre sua conta para informações</p>
                    <button className='btn'> Entrar </button>
                </div>
                <div className='second-colum2'>
                    <h2 className='title'>crie sua conta</h2>
                    <div className='social-midia'>
                        <ul>
                            <li><a href='#'>facebook</a></li>
                            <li><a href='#'>instagram</a></li>
                            <li><a href='#'>linkdin</a></li>
                        </ul>
                    </div>
                    <p>Entre em sua conta</p>
                    <form className='form'>

                        <input type="email" placeholder='Email'></input>
                        <input type="password" placeholder='Senha'></input>
                        <a href='#'> Esqueceu sua senha? </a>
                        <button className='btn'>Entrar</button>

                    </form>

                </div>

            </div>
        </div>


    )
}

export default Home;