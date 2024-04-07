import { Outlet  } from "react-router-dom";

const Roots = () => {
    return (
        <div className="bg-[#18191a] h-screen">
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;