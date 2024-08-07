import NavBar from "../../components/NavBar";
import Categorias from "../../components/Categorias";
import { HomeDiv, WelcomeDiv, Welcome, ImgDiv, SocialMedia, FollowUs, IconsContainer } from "./style";
import BottomBar from "../../components/BottomBar";
import ImgPage from "../../assets/geral/cutscene.png";
import ImgLogo from "../../assets/geral/logo.png";
import Produtos from "../../components/Produtos";
import Item1 from "../../assets/produtos/Item1.png";
import Item2 from "../../assets/produtos/Item2.png";
import Item3 from "../../assets/produtos/Item3.png";
import Item4 from "../../assets/produtos/Item4.png";
import Item5 from "../../assets/produtos/Item5.png";
import Item6 from "../../assets/produtos/Item6.png";
import FaceLogo from "../../assets/icons/face.svg";
import InstaLogo from "../../assets/icons/insta.svg";
import TiktokLogo from "../../assets/icons/tiktok.svg";
import TwitterLogo from "../../assets/icons/twitter.svg";
import LinkedinLogo from "../../assets/icons/linkedin.svg";

export default function Home() {
    const produtos1 = [
        { img: Item1, title: "Celular", price: 800 },
        { img: Item2, title: "Case Preta", price: 20 }
    ];

    const produtos2 = [
        { img: Item3, title: "Smart TV", price: 1400 },
        { img: Item4, title: "Monitor", price: 750 }
    ];

    const produtos3 = [
        { img: Item5, title: "Smartphone", price: 3200 },
        { img: Item6, title: "Smartwatch", price: 900 }
    ];

    return (
        <HomeDiv>
            <NavBar />
            <WelcomeDiv>
                <img src={ImgLogo} alt="logo" />
                <Welcome>Bem-vindo à Elektro!</Welcome>
            </WelcomeDiv>
            <ImgDiv>
                <img src={ImgPage} alt="foto inicio" />
            </ImgDiv>
            <Categorias />
            <Produtos titulo="Para Você" produtos={produtos1} />
            <Produtos titulo="Produtos em destaque" produtos={produtos2} />
            <Produtos titulo="Mais vendidos" produtos={produtos3} />
            <SocialMedia>
                <FollowUs>Siga-nos nas redes sociais!</FollowUs>
                <IconsContainer>
                    <img src={FaceLogo} alt="facebook" />
                    <img src={InstaLogo} alt="instagram" />
                    <img src={TiktokLogo} alt="tiktok" />
                    <img src={TwitterLogo} alt="twitter" />
                    <img src={LinkedinLogo} alt="linkedin" />
                </IconsContainer>
            </SocialMedia>
            <BottomBar />
        </HomeDiv>
    );
}