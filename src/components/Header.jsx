import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../featuresUsers/userSlice";
import { clearCart } from "../featuresCart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const user = useSelector((state) => state.userState.user);

    function handleLogOut() {
        navigate('/')
        dispatch(logoutUser())
        dispatch(clearCart())
        queryClient.removeQueries()
    };
    

    return (
        <>
            <header className="bg-green-300 py-2 text-blue-900">
                <div className="align-element flex justify-center sm:justify-end">
                    {/*USER NAME. show user infor if user is logged in*/}
                    {user ? 
                        <div className="flex -gap-x-2 sm:gap-x-8 items-center">
                            <p className="text-xs sm:text-sm">Welcome, {user.username}</p>
                            <button
                                className="btn btn-xs btn-outline btn-blue"
                                onClick={handleLogOut}
                            >
                                logout
                            </button>
                        </div>
                        :
                        // if user not found show these links
                        <div className="flex gap-x-6 justify-center items-center">
                        <Link to='/login' className="link link-hover text-xs sm:text-sm capitalize">
                            sign in / guest
                        </Link>
                        <Link to='/register' className="link link-hover text-xs sm:text-sm capitalize">
                            create an account
                        </Link>
                    </div>
                    }
                    
                    
                </div>
                
          </header>

        </>
    )
}

export default Header;