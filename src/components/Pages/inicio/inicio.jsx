import S from './inicio.module.scss'
import Card from '../../Card/card'
import comunidade from '../../../assets/comunidade.png'
import leitura from '../../../assets/leitura.png'
import transformacao from '../../../assets/transformacao.png'
import balanca from '../../../assets/balanca.png'

export default function main() {
    return(
        <main className={S}>
            <section className={S.banner}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.title}>
                <h2>Por que devo doar?</h2>
                <div>
                    <Card 
                        imagem={comunidade}
                        textoAcessibilidade="Imagem representando a comunidade"
                        textoCard="Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."/>
                    <Card 
                        imagem={leitura}
                        textoAcessibilidade="Pessoa lendo livro"
                        textoCard="Estimula o hábito da leitura e o aprendizado contínuo."/>
                    <Card 
                        imagem={transformacao}
                        textoAcessibilidade="Imagem representando a transformação"
                        textoCard="Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."/>
                    <Card 
                        imagem={balanca}
                        textoAcessibilidade="Imagem de uma balança"
                        textoCard="Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."/>
                </div>
            </section>
        </main>
    )
}