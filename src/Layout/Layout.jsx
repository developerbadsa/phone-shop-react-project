import { Outlet } from "react-router-dom";


const Layout = () => {
      return (
            <div>
                  <div>Header</div>
                  <Outlet></Outlet>
            </div>
      );
};

export default Layout;