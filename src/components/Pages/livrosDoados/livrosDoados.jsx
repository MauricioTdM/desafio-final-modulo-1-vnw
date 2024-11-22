import S from './livrosDoados.module.scss'
import CardLivro from '../../CardLivro/cardLivro'
import imgLivro from '../../../assets/img_livro.png'
import imgLivro2 from '../../../assets/img_livro_2.jpg'
import imgLivro3 from '../../../assets/img_livro_3.jpg'


export default function livrosDoados() {
    return (
    <>
        <section className={S.titulo}>
            <h2>Livros Doados</h2>
        </section>
        <section className={S.livros}>
            <CardLivro
                img={imgLivro}
                textoAcessibilidade={"Imagem da capa do livro"}
                titulo={"O protagonista"}
                autor={"Susanne Andrade"}
                genero={"Ficção"}/>
            <CardLivro
                img={imgLivro2}
                textoAcessibilidade={"Imagem da capa do livro"}
                titulo={"Data Science do Zero"}
                autor={"Joel Grus"}
                genero={"Computação"}/>
            <CardLivro
                img={imgLivro3}
                textoAcessibilidade={"Imagem da capa do livro"}
                titulo={"Pai Rico, Pai Pobre"}
                autor={"Kiyosaki T Robert"}
                genero={"Finanças"}/>
        </section>
    </>
    );
}
