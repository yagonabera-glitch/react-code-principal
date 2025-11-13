
import bolo_default from  '../../assets/imgs/bolo-default.png'
import { formatosService } from '../../services/formatosService'
import type { CardProdutosProps } from '../../types/CardProdutosProps'

export default function CardProduto( {nome, descricao, preco, imagem, peso }:  CardProdutosProps){
    return (

        <div className="card_produto">
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${imagem}` : bolo_default} alt="Uma fatia de bolo de chocolate com biscoito recheado Oreo" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "descrição não informada"}</p>
            <div>
            <span>{formatosService.PreciBR(preco)}</span>
            <br/>
            <span> {(peso)} </span>
            (peso != null) ? formatosService.pesoEmkg(peso)
            </div>
        </div>

    )


}