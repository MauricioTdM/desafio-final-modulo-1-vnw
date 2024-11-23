import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../Pages/inicio/inicio';
import LivrosDoados from '../Pages/livrosDoados/livrosDoados';
import QueroDoar from '../Pages/queroDoar/queroDoar';
import logo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'
import S from './header.module.scss'


export default function header(){
    return(
        <BrowserRouter>
            <header className={S.header}>
                <section>
                    <img className={S.imgLogo} src={logo} alt="Logo do site sendo um livro aberto" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={S.navBox}>
                    <ul>
                        <li>
                            <Link to='/'>Início</Link>
                        </li>
                        <li>
                            <Link to='/livrosdoados'>Livros Doados</Link>
                        </li>
                        <li>
                            <Link to='/querodoar'>Quero Doar</Link>
                        </li>
                    </ul>
                </nav>
                <div className={S.searchBox}>
                    <input type="search" placeholder='O que você procura?' />
                    <button>
                        <img src={lupa} alt="Imagem de uma lupa" />
                    </button>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livrosdoados' element={<LivrosDoados/>}/>
                <Route path='/querodoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}