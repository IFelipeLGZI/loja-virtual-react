import CardProduto from "./CardProduto";
import { produtos } from "../data/produtos";

export default function ListaProdutos() {
  return (
    <section id="produtos" className="lista">
      <h2>Nossos Produtos</h2>
      <div className="grid">
        {produtos.map((p) => (
          <CardProduto key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}