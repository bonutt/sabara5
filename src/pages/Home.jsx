import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
<>
<div className="page">
<header>
<h2>Sabará <span>BabyKitchen</span></h2>
</header>
<div className="container--modal">
<img alt="menu" id="x" src="/assets/marca-x.png"/>

</div>
<main>
<div className="container">
<div className="text-container">
<h1><span>Bem-vindo ao Sabará BabyKitchen: </span>Praticidade e Cuidado na Maternidade.</h1>
<p>Uma solução inovadora desenvolvida em parceria com o Hospital Sabará para tornar os primeiros momentos com o seu bebê mais tranquilos e confortáveis.</p>
</div>
<div className="slider">
{/* Criando Slides */}
<div className="slides">
<input id="radio1" nome="radio-btn" type="radio"/>
<input id="radio2" nome="radio-btn" type="radio"/>
<div className="slide first">
<img alt="Imagem-1" src="/assets/banner-.png"/>
</div>
<div className="slide">
<img alt="Imagem-2" src="/assets/logo-Sabará BabyKitchen.png"/>
</div>
<div className="navigation-auto">
<div className="auto-btn1"></div>
<div className="auto-btn2"></div>
</div>
</div>
<div className="manual-navigation">
<label className="manual-btn" htmlFor="radio1"></label>
<label className="manual-btn" htmlFor="radio2"></label>
</div>
</div>
<div className="text-02">
<h2>Por que escolher o Sabará BabyKitchen?</h2>
<ul>
<li>Facilidade de Uso: Interface intuitiva para pedidos rápidos.
                    </li>
<li>Personalização: Temperatura ideal e preferências salvas para cada bebê.
                    </li>
<li>Conveniência: Entrega diretamente no quarto com notificações em tempo real.
                    </li>
</ul>
</div>
<div className="call-to-action">
<p className="cta-text">Ficou curioso para descobrir mais? Clique no botão abaixo e venha descobrir como funciona!</p>
<p>
<Link to="/index2">Descobrir mais</Link>
</p>
</div>
</div>
</main>
<footer>São Paulo 2024</footer>
</div>
</>
);
export default Home;