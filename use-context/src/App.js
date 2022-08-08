import StaticContext from './context/StaticContext.js';
import { PokemonsContextProvider } from './context/PokemonsContext.js';

import TheData from './components/TheData.js';

function App() {
  return (
    <div>
      <PokemonsContextProvider>
        {/* Los elementos aqui dentro tendrán acceso al Context */}
        <TheData />
      </PokemonsContextProvider>
    </div>
  );
}

export default App;
