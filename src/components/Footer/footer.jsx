import S from './footer.module.scss'
import facebook_logo from '../../assets/facebook_logo.png'
import twitter_logo from '../../assets/twitter_logo.png'
import youtube_logo from '../../assets/youtube_logo.png'
import linkedin_logo from '../../assets/linkedin_logo.png'
import instagram_logo from '../../assets/instagram_logo.png'

export default function footer(){
    return(
        <footer className={S.footer}>
            <section className={S.contatos}>
                <div>
                    <p>4002-8922</p>
                </div>
                <div className={S.redesSociais}>
                    <ul>
                        <li><a href=""><img src={facebook_logo} alt="Logo do Facebook" /></a></li>
                        <li><a href=""><img src={twitter_logo} alt="Logo do Twitter" /></a></li>
                        <li><a href=""><img src={youtube_logo} alt="Logo do Youtube" /></a></li>
                        <li><a href="https://www.linkedin.com/in/mauricio-tavares-de-melo-076489230/"><img src={linkedin_logo} alt="Logo do Linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/mauricio.t.melo/"><img src={instagram_logo} alt="Logo do Instagram" /></a></li>
                    </ul>
                </div>
            </section>
            <section className={S.direitos}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}