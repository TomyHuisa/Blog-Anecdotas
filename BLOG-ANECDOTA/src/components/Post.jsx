export function Post({titulo,link, descripcion,parrafo}){
  return (
    <>
    <h1>{titulo}</h1>
    <img src = {link} alt={descripcion}/>
    <p>{parrafo}</p>
    </>
  );
};
