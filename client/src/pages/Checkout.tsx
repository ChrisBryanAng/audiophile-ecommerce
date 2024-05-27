import { GoBackButton, FormInput, FormRadio } from "../components";

const Checkout = () => {
  return (
    <div className="flex flex-col h-max w-full bg-gray3/30 px-6 pt-6 gap-6">
      <GoBackButton />

      <div className="flex flex-col gap-10 bg-white p-6 rounded-lg overflow-clip">
        <p className="uppercase text-3xl tracking-wider font-bold">Checkout</p>

        {/**Billing details */}
        <div className="flex flex-col gap-6">
          <p className="text-primary-1 uppercase tracking-widest text-sm">
            Billing details
          </p>
          <FormInput label="Name" type="text" placeholder="Alexie Ward" />
          <FormInput
            label="Email Address"
            type="text"
            placeholder="alexie@mail.com"
          />
          <FormInput
            label="Phone Number"
            type="text"
            placeholder="+1 202-555-0136"
          />
        </div>

        {/**Shipping details */}
        <div className="flex flex-col gap-6">
          <p className="text-primary-1 uppercase tracking-widest text-sm">
            Shipping info
          </p>
          <FormInput label="Name" type="text" placeholder="Alexie Ward" />
          <FormInput
            label="Your Address"
            type="text"
            placeholder="1137 Williams Avenue"
          />
          <FormInput label="Zip Code" type="text" placeholder="10001" />
          <FormInput label="City" type="text" placeholder="New York" />
          <FormInput label="Country" type="text" placeholder="United States" />
        </div>

        {/**Payment info */}
        <div className="flex flex-col gap-6">
          <p className="text-primary-1 uppercase tracking-widest text-sm">
            Payment details
          </p>
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-sm tracking-wider -mb-4">
              Payment Method
            </p>
            <FormRadio id="e-money" label="e-Money" type="radio" />
            <FormRadio
              id="cash-on-delivery"
              label="Cash on Delivery"
              type="radio"
            />
            <FormInput
              label="e-Money Number"
              type="text"
              placeholder="238521993"
            />
            <FormInput label="e-Money PIN" type="text" placeholder="6891" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
