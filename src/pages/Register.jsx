import { FormInput, SubmitButton } from '../components';
import { Form, Link } from 'react-router-dom';


export async function action() {
    return null;
}

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