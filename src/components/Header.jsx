import { Link } from "react-router-dom";

function Header() {

    return (
        <>
            <header className="bg-green-300 py-2 text-blue-900">
                <div className="align-element flex justify-center sm:justify-end">
                    {/*USER*/}
                    {/*USER*/}
                    <div className="flex gap-x-6 justify-center items-center">
                        <Link to='/login' className="link link-hover text-xs sm:text-sm capitalize">
                            sign in / guest
                        </Link>
                        <Link to='/register' className="link link-hover text-xs sm:text-sm capitalize">
                            create an account
                        </Link>

                    </div>


                </div>
                
          </header>

        </>
    )
}

export default Header;