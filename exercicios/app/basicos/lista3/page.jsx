export default function lista2() {
    return (
        <div>
            <div>
                {gerarLista(10)}
            </div>
            <div>
                {gerarLista(3)}
            </div>
        </div>
    );
}

function gerarLista(quantidade = 5) {
    const lista = [];
    for (let i = 1; i <= quantidade; i++) {
        lista.push(<span key={i}>{i},</span>);
    }
    return lista;
}