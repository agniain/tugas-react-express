import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Tambah from './pages/Tambah';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="" exact={"true"} children={() => <Home />} />
          <Route path="/detail" children={() => <Detail />} />
          <Route path="/edit" children={() => <Edit />} />
          <Route path="/tambah" children={() => <Tambah />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;