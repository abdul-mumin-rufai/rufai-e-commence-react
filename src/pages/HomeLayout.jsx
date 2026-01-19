import { Outlet } from "react-router-dom";


function HomeLayout() {
    return (
        <>
            <nav>
                <span className="text-4xl text-green-500">Rufai</span>
            </nav>
            <section className="align-element py-20">
                <Outlet />
            </section>
            
        </>
    )
}

export default HomeLayout;