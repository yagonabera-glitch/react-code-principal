import banne_1 from "../../assets/imgs/banner.png";
import banne_2 from "../../assets/imgs/banner2.png";
import banne_3 from "../../assets/imgs/banner3.png";

export default function Carrossel(){
  return(<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
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
  )

}