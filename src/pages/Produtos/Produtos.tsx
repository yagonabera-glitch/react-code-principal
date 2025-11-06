import './produtos.css'
import banne_1 from "../../assets/imgs/banner.png";
import banne_2 from "../../assets/imgs/banner2.png";
import banne_3 from "../../assets/imgs/banner3.png";
import bolo_belga from "../../assets/imgs/choc-belga.png";
import bolo_ninho from "../../assets/imgs/choc-ninho.png";
import cenoura from "../../assets/imgs/cenoura-choc.png";
import bolo_morango from "../../assets/imgs/choc-ninho-morango.png";
import bolo_pistache from "../../assets/imgs/choc-pistache.png";
import bolo_oreo from "../../assets/imgs/choc-oreo.png";
import whatsapp from "../../assets/whatsapp.png";
import { useEffect, useState } from 'react';
import { getBolos } from '../../services/boloService';
import type { Bolo } from '../../types/Bolo';


export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]);

    async function fetchBolos() {
        try {
            const dados = await getBolos();
            console.log("dados retornados da API: ", dados);
            setBolos(dados);
        } catch (error) {
            console.error("erro ao executar getBolos: ", error);
        }

    }

    useEffect(() => {
        fetchBolos();
    }, [])


    return (

        <>
            <main>

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banne_1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banne_2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banne_3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <section className="container_produtos">
                    <h1 className="acessivel">produtos de chocolate</h1>
                    <div className="titulo">
                        <span>Chocolate</span>
                        <hr />
                    </div>

                    <section className="cards">

                        {
                            bolos.map((b: Bolo) => (

                                <div className="card_produto">
                                    <img src={`http://localhost:3000/${b.imagens[0]}`} alt="Uma fatia de bolo de chocolate com biscoito recheado Oreo" />
                                    <h2>{b.nome}</h2>
                                    <p></p>
                                    <span>{b.preco}</span>
                                </div>
                            ))
                        }

                    </section>
                </section>

                <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                    target="_blank">
                    <img src={whatsapp} alt="icone do whatsapp" />
                </a>
            </main>

        </>
    )
}
