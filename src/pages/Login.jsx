import { FormInput, SubmitButton } from "../components";
import { Form, Link } from "react-router-dom";


export const action = (store) => async () => {
    console.log(store);
    
    return null;
};

function Login() {
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
                        defaultValue="rufai.abdulmumin@hotmail.com"
                    />
                    <FormInput
                        type="password"
                        label="password"
                        name="password"
                        defaultValue="#M15051997m15"
                    />
                    <div className="mt-4">
                        <SubmitButton text='LOGIN' />
                    </div>
                    <button type="button" className="btn btn-secondary btn-block">
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