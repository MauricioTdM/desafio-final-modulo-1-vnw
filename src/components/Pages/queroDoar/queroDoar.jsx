import S from './queroDoar.module.scss'
import CardContato from '../../CardContato/cardContato';

export default function queroDoar() {
    return (
        <>
            <section className={S.title}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            </section>
            <section>
                <CardContato/>
            </section>
        </>
    );
}
  