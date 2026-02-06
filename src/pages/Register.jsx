import { FormInput, SubmitButton } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

// getting the formValue the input form. the form name should be the same as the server name.
export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData); 
    try {
        // since the name of the form input is the same as the server input we used the data
        //registering user
        const response = await customFetch.post('/auth/local/register', data);
        toast.success('account created sucessfully')
        return redirect('/login')
    } catch (error) {
        const errorMessage = error?.response?.data?.message || 'username or email already used'
        toast.error(errorMessage);
    }
    return null;
};


function Register() {
    
    return (
        <>
            <section className="h-screen grid place-items-center">
                <Form method="post" className="card w-96  p-8 bg-base-100 shadow-lg
                 flex flex-col gap-y-4">
                    <h4 className="text-center text-2xl font-bold">
                        Register
                    </h4>
                    <FormInput
                        name="username"
                        type="text"
                        label="username"
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                    />
                    <div className="mt-4">
                        <SubmitButton text="Register" />
                    </div>
                    <p className="text-center mt-4">
                        Already have an account?
                        <Link
                            to="/login"
                            className="ml-2 link link-hover link-primary capitalize">
                            Login
                        </Link>
                    </p>
                </Form>
            </section>
        </>
    )
}

export default Register;