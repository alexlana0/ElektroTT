import { RotuloProduto, ImagemProduto, DetalhesProduto, TituloProduto, PrecoProduto, CaixaProduto, IconeFavorito } from "./style";
import Favorito from "../../assets/icons/favorite.svg";

type ProductProps = {   
    img: string;
    title: string;
    price: number;
}

const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2)}`;
}

export default function ProductDisplay({ img, title, price }: ProductProps) { 
    return (
        <CaixaProduto>
            <ImagemProduto src={img} alt={title} />
            <RotuloProduto>
                <DetalhesProduto>
                    <TituloProduto>{title}</TituloProduto>
                    <PrecoProduto>{formatPrice(price)}</PrecoProduto>
                </DetalhesProduto>
                <IconeFavorito src={Favorito} alt="Favoritar" />
            </RotuloProduto>
        </CaixaProduto>
    )
}
