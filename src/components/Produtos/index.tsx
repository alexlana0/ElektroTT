import { ContainerSecao, TituloSecao, Grupo } from "./style";
import ExibicaoProduto from "../ProductDisplay";

interface Produto {
    img: string;
    title: string;
    price: number;
}

interface ProdutosProps {
    titulo: string;
    produtos: Produto[];
}

export default function Produtos({ titulo, produtos }: ProdutosProps) {
    return (
        <ContainerSecao>
            <TituloSecao>{titulo}</TituloSecao>
            <Grupo>
                {produtos.map((produto, index) => (
                    <ExibicaoProduto
                        key={index}
                        img={produto.img}
                        title={produto.title}
                        price={produto.price}
                    />
                ))}
            </Grupo>
        </ContainerSecao>
    );
}