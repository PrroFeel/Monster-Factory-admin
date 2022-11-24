import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/admin/Login";
import Main from "./pages/common/Main";
import Item from "./pages/item/Item";
import ItemDetail from "./pages/item/ItemDetail";
import ItemRegist from "./pages/item/ItemRegist";
import ItemUpdatePage from "./pages/item/ItemUpdatePage";
import Manage from "./pages/manage/Manage";
import ReviewWaitedPage from "./pages/review/ReviewWaitedPage";
import ReviewPage from "./pages/review/ReviewPage";
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
          <Route path="item/regist" element={ <ItemRegist/> }/>
          <Route path="item/:itemId/update" element={ <ItemUpdatePage/> }/>
          <Route path="review" element={ <ReviewWaitedPage/> }/>
          <Route path="review/:gameId" element={ <ReviewPage/> }/>
          <Route path="manage" element={ <Manage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
