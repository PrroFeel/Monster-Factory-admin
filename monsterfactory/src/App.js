import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/admin/Login";
import Main from "./pages/common/Main";
import Item from "./pages/item/Item";

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Layout/> }>
          <Route index element ={ <Main/> }/>
          <Route path="item" element={ <Item/> }/>
        </Route>
        <Route path="/login" element={ <LoginLayout/> }>
          <Route index element ={ <Login/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
