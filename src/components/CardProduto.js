export default function CardProduto({ nome, preco, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>R$ {preco.toFixed(2).replace('.', ',')}</p>
      <button onClick={() => alert(`${nome} adicionado ao carrinho!`)}>
        Comprar
      </button>
    </div>
  );
}