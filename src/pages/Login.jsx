import { FormInput, SubmitButton } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../featuresUsers/userSlice";



// we are calling the store in the action because, we want to dispatch the use state when we login in a user.
export const action = (store) => async ({ request }) => {
    //getting the form values
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        //logging in the user
        const response = await customFetch.post('/auth/local', data); //data email and password for login
        // the user info is located at where we logged in the user
        store.dispatch(loginUser(response.data))
        toast.success('logged in sucessfully')
        return redirect('/')
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'Invaild username or password';
        toast.error(errorMessage);
    }
};

export const Login =()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logInAsGuestUser = async () => { 
        try {
            const response = await customFetch.post('/auth/local', {
                identifier: 'rufai@test.com',
                password:'rufaitest'
            });
            dispatch(loginUser(response.data));
            toast.success('Logged in as guest');
            navigate('/');
        } catch (error) {
            const errorMessage = error?.response?.data?.message || 'Guest login failed';
            toast.error(errorMessage);
        }
    };
    return (
        <>
            <section className="h-screen grid place-items-center">
                <Form method="post" className="card w-96  p-8 bg-base-100 shadow-lg
                 flex flex-col gap-y-4">
                    <h4 className="text-center text-3xl font-bold">
                        Login
                    </h4>
                    <FormInput
                        type='email'
                        label="email"
                        name="identifier"
                    />
                    <FormInput
                        type="password"
                        label="password"
                        name="password"
                    />
                    <div className="mt-4">
                        <SubmitButton text='LOGIN' />
                    </div>
                    <button type="button" className="btn btn-secondary btn-block capitalize" onClick={logInAsGuestUser}>
                        guest user
                    </button>
                    <p className="text-center">
                        Not A member yet?
                        <Link
                            to='/register' className="ml-2 link link-hover link-primary capitalize"
                        >
                            register
                        </Link>
                    </p>
                 </Form>
                
           </section>
        </>
    )
}

export default Login;