import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './itemListContainer.css'
import { firestore } from "../../db/firebase";
import { getDocs, collection } from "@firebase/firestore";

function ItemListContainer() {
    const { categoryId } = useParams();
    const [cursosByCategory, setCursosByCategory] = useState([]);
    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        fetchCursos();
        selectCursos();
    }, [cursos, cursosByCategory])

    const fetchCursos = async () => {
        await getDocs(collection(firestore, "cursos"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setCursos(newData);
            })
    }

    const selectCursos = () => {
        let cursosByCategory = [];
        if (categoryId != undefined) {
            cursosByCategory = cursos.filter(element => element.category == categoryId)
        } else {
            cursosByCategory = cursos
        }
        setCursosByCategory(cursosByCategory)
        console.log(cursosByCategory);
    }

    return (
        <div className='item-container'>
            <h1>Mis cursos</h1>
            <div className='row'>
                {cursosByCategory.map(element =>
                    <div className='col-md-3' key={element.id}>
                        <div className="card card-container">
                            <img src={element.pic} className="card-img-top" alt={element.name} />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <Link to={`/item/${element.id}`}>
                                    Ver detalle del curso
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemListContainer;