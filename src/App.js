import { useState, useEffect } from "react"
import "./styles.css"
//

function App() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    function loadApi() {
      fetch(url).then((result) => result.json())
        .then(json => {
          console.log(json);
          setNutri(json)
      })
    }

    loadApi();
  }, [])


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map(item => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <h3>Categoria: { item.categoria}</h3>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
      
    </div>
  );
}

export default App;
