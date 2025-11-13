import './produtos.css'

// import bolo_belga from "../../assets/imgs/choc-belga.png";
// import bolo_ninho from "../../assets/imgs/choc-ninho.png";
// import cenoura from "../../assets/imgs/cenoura-choc.png";
// import bolo_morango from "../../assets/imgs/choc-ninho-morango.png";
// import bolo_pistache from "../../assets/imgs/choc-pistache.png";
// import bolo_oreo from "../../assets/imgs/choc-oreo.png";
import whatsapp from "../../assets/whatsapp.png";
import { useEffect, useState } from 'react';
import { getBolos } from '../../services/boloService';
import type { Bolo } from '../../types/Bolo';
// import bolo_default from '../../assets/imgs/bolo-default.png'
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';




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

   <Carrossel/>


                <section className="container_produtos">
                    <h1 className="acessivel">produtos de chocolate</h1>
                    <div className="titulo">
                        <span>Chocolate</span>
                        <hr />
                    </div>

                    <section className="cards">

                        {
                            bolos.map((b: Bolo) => (
                                <CardProduto
                                    nome={b.nome}
                                    descricao={b.descricao}
                                    preco={b.preco}
                                   imagem={b.imagens[0] ?? ""}
                                    peso={b.peso}


                                />
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
