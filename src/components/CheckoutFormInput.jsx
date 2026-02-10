import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";



export const action = (store) => async () => {
    console.log(store);
    
    return null;
};

const CheckoutFormInput = () => {
  return (
      <Form method="POST" className="flex flex-col gap-y-4">
          <h4 className="font-medium text-xl capitalize">
              provider your shipping information
          </h4>
          <FormInput label='first name' name='name' type='text' />
          <FormInput label='address' name='address' type='text' />
          <div className="mt-4">
              <SubmitButton text='Place Your Order'/>
          </div>
      </Form>
  )
}

export default CheckoutFormInput;