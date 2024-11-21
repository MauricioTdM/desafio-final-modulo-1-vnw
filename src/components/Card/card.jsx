import S from './card.module.scss'

export default function cards({imagem, textoAcessibilidade, textoCard}) {
    return(
        <div className={S.card}>
            <img src={imagem} alt={textoAcessibilidade} />
            <p>{textoCard}</p>
        </div>
    )
}