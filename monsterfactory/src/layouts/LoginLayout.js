import { Outlet } from "react-router-dom";
import LoginHeader from "../components/admin/LoginHeader";

function LoginLayout() {

    return (
        <>
            <LoginHeader/>
            <Outlet/>
        </>
    );
}

export default LoginLayout;