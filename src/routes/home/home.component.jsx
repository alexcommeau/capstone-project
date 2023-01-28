import CategoryMenu from "../../components/category-menu/category-menu.component";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Outlet />
      <CategoryMenu />
    </div>
  );
}

export default Home;
