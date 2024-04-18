import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { firestore } from "../../db/firebase";
import { getDocs, collection } from "@firebase/firestore";

function Item() {
  const { itemId } = useParams();
  const [curso, setCurso] = useState({});
  useEffect(() => {
    fetchCurso()
  }, [curso])

  const fetchCurso = async () => {
    await getDocs(collection(firestore, "cursos"))
        .then((querySnapshot)=>{
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            let cr = newData.find(element => element.id == itemId)
            setCurso(cr)
        })
  }
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
