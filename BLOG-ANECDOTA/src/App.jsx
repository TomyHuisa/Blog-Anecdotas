import { useEffect, useState } from 'react';
import Footer from './components/Footer'
import { Header } from './components/Header'
import { Post } from './components/Post'
import supabase from './lib / helper/supabaseClient';

export default function App(){

 const [user, setUser] = useState(null);

  useEffect(() => {

    const getSession = async () => {
      //destructruracion -> Nos permite obtener la propiedad deseada, van entre llaves
      const{data, error} = await supabase.auth.getSession();
      if(error){
        console.log(error);
      } else{
        setUser(data?.session?.user);
      }
    };
    getSession();
  },[]);

  const handleLogin = async () => {
    const {error} = await supabase.auth.signInWithOAuth({
      provider:"github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };


  return(
  <>
  <Header/>
  <button onClick={handleLogin}>Inicia sesion Github </button>
  <Post 
        titulo={"Bienvenido a la experiencia del Voley 2024"}
        descripcion={"descripcion foto"}
        link={"BLOG-ANECDOTA/public/img"}
        parrafo={"El vóley es un deporte que demanda habilidades físicas y mentales. La experiencia en el vóley te ayuda a desarrollar liderazgo, comunicación, trabajo en equipo y resiliencia, además de enseñarte a enfrentar la presión y mantener una actitud positiva incluso en momentos difíciles."} />
  <Footer/>        
  </>
  )
};


