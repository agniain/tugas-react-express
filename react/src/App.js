import {Route, Routes} from "react-router-dom";
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Tambah from './pages/Tambah';


const App = () => {
  return (
    <>
    <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/tambah" element={<Tambah />} />
        </Routes>
    </div>
    </>
  )
}

export default App;

// const App = () => {
//   return (
//     <>
//     <div>
//       <Navigation />
//       <BrowserRouter> 
//         <Routes>
//           <Route path="/" exact={"true"} children={() => <Home />} />
//           <Route path="/detail" children={() => <Detail />} />
//           <Route path="/edit" children={() => <Edit />} />
//           <Route path="/tambah" children={() => <Tambah />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//     </>
//   )
// }

// export default App;