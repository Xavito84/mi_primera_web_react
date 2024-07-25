import { Card } from './components/Card/Card';
import { Counter } from './components/Counter/Counter';
import { Usuario } from './components/Usuario/Usuario';
import { Usuario1 } from './components/Usuario/Usuario';
import { Text } from './components/Text/Text';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';



function App() {
  const nombre=<h1>Xavito</h1>;
  const edad= <p>27</p>;
  const email= <p>miemail@jajaja.es</p>
  const usuario= <div>{nombre} {edad} {email}</div> 
  return (
    <div>  
      < Usuario nombre="Xavi" edad={40} nacionalidad="España" />
        < Usuario nombre="Miriam" edad={35} nacionalidad="España" />
        <Usuario1 nombre="Lucas" edad={3} nacionalidad="ESpaña" />
        <hr />
        <Card />
        <hr />
        <Counter />
        <Text />
        <ItemListContainer />
    
    </div>
  );
}


const mostrarNombre = () => {
  return "Xavito"
}

const MostrarNombreComponente = () => {  //siempre en mayuscula los componentes. Asi se llama a la funcion: <MostrarNombreComponente />
  return <h1>Xavito</h1>
}



export default App;


/*todo lo que e probado
        
        <hr />
        <Pokemon />
*/
