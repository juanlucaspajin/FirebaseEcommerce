

import { firestore } from "../db/firebase";
import { getDocs, getDoc, collection, doc } from "@firebase/firestore";

export const getAllCursos = async () => {
  await getDocs(collection(firestore, "cursos"))
      .then((querySnapshot)=>{
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id: doc.id}));
          setCursos(newData);
          console.log(cursos, newData);
  })
}

export const getOneCurso = async (param) => {
  return await getDoc(doc(firestore, 'cursos', param)).data()
}

export const cursos = [
    {
      id: 1,
      category: "canto",
      name: "Canto 1",
      desc: 'Tu curso de canto preferido',
      pic: "https://media.istockphoto.com/id/1171092500/photo/happy-african-man-in-hat-singing-into-smartphone-like-microphone.jpg?s=612x612&w=0&k=20&c=ool6e1Swh52ov6j-Wcc2CTJif8jJGqeF98tUo4CHDmg=",
      price: 150000,
      stock: 10
    },
    {
      id: 2,
      category: "piano",
      name: "Piano 1",
      desc: 'Tu curso de piano preferido',
      pic: "https://millersmusic.co.uk/cdn/shop/articles/Blog_Image_40.png?v=1681389491",
      price: 175000,
      stock: 5
    },
];