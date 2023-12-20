import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

function Item() {
  const { itemId } = useParams();
  const [curso, setCurso] = useState({});
  useEffect(() => {
    let curso = cursos.find(element => element.id == itemId)
    setCurso(curso);
  }, [curso])

  const cursos = [
    {
      id: 1,
      category: "canto",
      name: "Canto 1",
      pic: "https://media.istockphoto.com/id/1171092500/photo/happy-african-man-in-hat-singing-into-smartphone-like-microphone.jpg?s=612x612&w=0&k=20&c=ool6e1Swh52ov6j-Wcc2CTJif8jJGqeF98tUo4CHDmg=",
    },
    {
      id: 2,
      category: "piano",
      name: "Piano 1",
      pic: "https://millersmusic.co.uk/cdn/shop/articles/Blog_Image_40.png?v=1681389491",
    },
  ];
  return (
    <div className="container">
      <h1>{curso?.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={curso?.pic} alt={curso?.name} width={200}/>
        </div>
        <div className="col-md-6">
          <ItemDetailContainer />
        </div>
      </div>
    </div>
  );
}

export default Item;
