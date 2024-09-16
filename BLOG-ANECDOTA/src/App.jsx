import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import supabase from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      //destructruracion -> Nos permite obtener la propiedad deseada, van entre llaves
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };
    getSession();
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Header />
      <button onClick={handleLogin}>Inicia sesion Github </button>
      <Post
        titulo={"Bienvenido a la Escupidela de Salti"}
        descripcion={"Que tan rudo eres?"}
        link={"BLOG-ANECDOTA/public/img"}
        parrafo={"Muchacho"}
      />
      <Footer />
    </>
  );
}
