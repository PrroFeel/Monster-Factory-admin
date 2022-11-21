import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/admin/Login";
import Main from "./pages/common/Main";
import Item from "./pages/item/Item";
import ItemDetail from "./pages/item/ItemDetail";
import Manage from "./pages/manage/Manage";
import Review from "./pages/review/Review";

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <LoginLayout/> }>
          <Route index element ={ <Login/> }/>
        </Route>
        <Route path="main" element={ <Layout/> }>
          <Route index element ={ <Main/> }/>
          <Route path="item" element={ <Item/> }/>
          <Route path="item/:itemId" element={ <ItemDetail/> }/>
          <Route path="review" element={ <Review/> }/>
          <Route path="manage" element={ <Manage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
