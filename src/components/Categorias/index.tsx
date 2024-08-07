import React from "react";
import { CategoriasSection, Linha1, Linha2, TituloCategorias } from "./style";
import CategoriaProps from "./CategoriaProps";
import CelularesImg from '../../assets/produtos/celulares.png';
import NotebooksImg from '../../assets/produtos/notebooks.png';
import TabletsImg from '../../assets/produtos/tablets.png';
import PerifericosImg from '../../assets/produtos/perifericos.png';
import TVsImg from '../../assets/produtos/tvs.png';
import AcessoriosImg from '../../assets/produtos/acessorios.png';
import PCsImg from '../../assets/produtos/pcs.png';
import SmartwatchesImg from '../../assets/produtos/smartwatches.png';

const categoriasLinha1 = [
  { img: CelularesImg, title: "Celulares" },
  { img: NotebooksImg, title: "Notebooks" },
  { img: TabletsImg, title: "Tablets" },
  { img: PerifericosImg, title: "Periféricos" }
];

const categoriasLinha2 = [
  { img: TVsImg, title: "TVs" },
  { img: AcessoriosImg, title: "Acessórios" },
  { img: PCsImg, title: "PCs" },
  { img: SmartwatchesImg, title: "Smartwatches" }
];

export default function Categorias() {
  return (
    <CategoriasSection>
      <TituloCategorias>Categorias Elektro</TituloCategorias>
      <Linha1>
        {categoriasLinha1.map((categoria, index) => (
          <CategoriaProps key={index} img={categoria.img} title={categoria.title} />
        ))}
      </Linha1>
      <Linha2>
        {categoriasLinha2.map((categoria, index) => (
          <CategoriaProps key={index} img={categoria.img} title={categoria.title} />
        ))}
      </Linha2>
    </CategoriasSection>
  );
}
