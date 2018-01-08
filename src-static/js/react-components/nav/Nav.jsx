import React, {Component } from "react";
import api from '../../api/api.jsx';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                authUser:{
                    young:{
                        user:{
                            first_name:'Nombre',
                            last_name:'Apellido',
                        }
                    }
                }
            },
        }
    }
    
    async componentDidMount(){
        const user = await api.apiAuth.getApiAuth();
        this.setState({
            user,
        });
    }
    render(){
        if (this.state.user.result==='ok'&& this.state.user.status===200) {
            return(
                <header>
                    <nav className="navEj">
                        <div className="top-bar">
                            <NavLogo/>
                            <UlNav user={this.state.user}/>
                            <Hamburger/>
                        </div>
                    </nav>
                    <MenuSlide user={this.state.user}/>
                </header>
            );

        }else{
            return(
                <header>
                    <nav className="navEj">
                        <div className="top-bar">
                            <NavLogo/>
                            <UlNav user={this.state.user}/>
                            <Hamburger/>
                        </div>
                    </nav>
                    <MenuSlide user={this.state.user}/>
                </header>
            );
        }

    }
}

let UlNav = (props)=>{
    let userAuth= `${props.user.authUser.young.user.first_name} ${props.user.authUser.young.user.last_name}`;
    return(
        <div className="top-bar-right navEj__menuOptions">
            <ul className="dropdown menu" data-dropdown-menu>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Asitencia</a></li>
                <li><a href="#">Talleres</a></li>
                <li><a className="navEj__itemMenuSelected" href="/fds/">FDS</a></li>
                <li><a href="#">Profundos</a></li>
                <li><a href="#">Consejeros</a></li>
                <li>
                    <a>{userAuth}</a>
                    <ul className="menu vertical">
                        <li><a href="#">Perfil</a></li>
                        <li><a href="/logout/">Salir</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
let NavLogo = (props) =>{
    return(
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Site Title</li>
            </ul>
        </div>
    );
}
let Hamburger = ()=>{
    function onClickHamburger(){
        let $menuSlide = document.getElementById('menuSlide');
        $menuSlide.classList.toggle('menuSlide--active');
        
    }
    return(
       <div id="navEj__hamburger" className="top-bar-right navEj__hamburger" onClick={onClickHamburger}>
            <img className="navEj__hamburger__image" src="/s/media/hamburger.png" alt="icon"/>
       </div>
    );

}
let MenuSlide = (props) =>{
    let userAuth= `${props.user.authUser.young.user.first_name} ${props.user.authUser.young.user.last_name}`;
    return(
        <nav id="menuSlide" className="menuSlide">
            <div className="menuSlide__content">
                <ul className="menu menuSlide__content__listItem" data-dropdown-menu>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Asitencia</a></li>
                    <li><a href="#">Talleres</a></li>
                    <li><a className="navFds__itemMenuSelected" href="#">FDS</a></li>
                    <li><a href="#">Profundos</a></li>
                    <li><a href="#">Consejeros</a></li>
                    <li>
                         <a>{userAuth}</a>
                        
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;