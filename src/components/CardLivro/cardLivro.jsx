import S from './cardLivro.module.scss'

export default function cardLivro({img, textoAcessibilidade, titulo, autor, genero}) {
    return(
        <a className={S.link} href="">
            <img src={img} alt={textoAcessibilidade} />
            <div className={S.info}>
                <p>{titulo}</p>
                <p>{autor}</p>
                <p>{genero}</p>
            </div>
        </a>
    )
}