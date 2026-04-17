export default function lista2() {
    return (
        <div>
            {gerarLista()}
        </div>
    );
}

function gerarLista() {
    return [
        <span key={1}>1,</span>,
        <span key={2}>2,</span>,
        <span key={3}>3,</span>,
        <span key={4}>4,</span>,
        <span key={5}>5,</span>
    ];
}