import S from './cardContato.module.scss'
import livroContato from '../../assets/livro_contato.png'

export default function cardContato() {
    return(
        <section className={S.boxForm}>
            <form className={S.formBody}>
                <div className={S.titulo}>
                    <img src={livroContato} alt="Imagem de um livro aberto" />
                    <h3>Informações do Livro</h3>
                </div>
                <div className={S.boxInput}>
                    <input type="text" placeholder="Titulo"/>
                    <input type="text" placeholder="Categoria"/>
                    <input type="text" placeholder="Autor"/>
                    <input type="text" placeholder="Link da Imagem"/>
                </div>
                <input className={S.doar} type="submit" value="Doar" />
            </form>
        </section>
    )
}