import { useEffect, useState } from "react";
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

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
          console.log("caso no estimado");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {user ? (
        <div>
          <h2> Authenticated </h2>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>login GitHub</button>
      )}
    </>
  );
}
