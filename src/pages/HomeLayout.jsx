import { Outlet, useNavigation } from "react-router-dom";
import { Header, NavBar, Loading } from "../components";


function HomeLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <>
            <Header />
            <NavBar />
            {
                /* SETTING UP THE LOADING COMPONENT AND RENDERING ALL CHILDREN COMPONENTS OF THE HOMELAYOUT */
                isLoading ? <Loading />
                    : <section className="align-element py-20">
                        <Outlet />
                    </section>
            }
        </>
    )
}

export default HomeLayout;