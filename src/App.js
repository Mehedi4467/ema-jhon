import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import Review from "./Components/Review/Review";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>} />
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
