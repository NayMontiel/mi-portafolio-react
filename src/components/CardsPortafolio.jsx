import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Context from "../context/Context";

export const CardsPortafolio = () => {
  const { info } = useContext(Context);

  console.log(info);

  return (
    <>
      <div className="grid-columns-3">
      {info.map((item) => (
        <Card 
          className="card animate__animated animate__flipInY mb-3 pb-3"
          key={item.id}
        >
          <Card.Img variant="top" src={item.image} className="card-img-top" />
          <Card.Body>
            <a href={item.url} target="blank" className="text-decoration-none">
              <h5 className="card-title text-center">{item.title}</h5>
            </a>
          </Card.Body>
        </Card>
      ))}
      </div>
    </>
  );
};
