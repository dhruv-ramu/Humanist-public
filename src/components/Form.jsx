import { Button } from "@aws-amplify/ui-react";
import { TextField, SelectField } from "@aws-amplify/ui-react";
import Script from "next/script";

export default function DonateForm({
  register,
  handleSubmit,
  chosenPatient,
  amountPlaceholder,
  errors,
  showOtherInputs,
  patients,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          inputMode="text"
          label="First Name"
          placeholder="Your First Name"
          required
          errorMessage={
            errors?.firstName ? "This Field is Required" : undefined
          }
          {...register("firstName", { required: true })}
        />
        <TextField
          type="text"
          inputMode="text"
          label="Last Name"
          placeholder="Your Last Name"
          required
          errorMessage={errors?.lastName ? "This Field is Required" : undefined}
          {...register("lastName", { required: true })}
        />
        <TextField
          type="email"
          inputMode="email"
          label="Email"
          placeholder="me@gmail.com"
          required
          errorMessage={errors?.email ? "This Field is Required" : undefined}
          {...register("email", { required: true })}
        />
        <TextField
          type="number"
          inputMode="numeric"
          label="Phone Number"
          placeholder="0000000000"
          required
          errorMessage={
            errors?.phoneNumber ? "This Field is Required" : undefined
          }
          {...register("phoneNumber", { required: true })}
        />
        <TextField
          type="number"
          inputMode="numeric"
          label="Amount"
          placeholder={amountPlaceholder || "******"}
          required
          errorMessage={errors?.amount ? "This Field is Required" : undefined}
          {...register("amount", { required: true })}
        />
        {showOtherInputs === true ? (
          <TextField
            type="text"
            label="Pan Card Number"
            required
            {...register("panCard", { required: true })}
            errorMessage={
              errors?.panCard ? "This Field is Required" : undefined
            }
            inputMode="text"
          />
        ) : null}
        {showOtherInputs === true ? (
          <TextField
            type="text"
            label="Address"
            required
            {...register("address", { required: true })}
            errorMessage={
              errors?.address ? "This Field is Required" : undefined
            }
            inputMode="text"
          />
        ) : null}
        {chosenPatient ? (
          <TextField
            type="text"
            label="Chosen Patient"
            disabled
            value={chosenPatient}
          />
        ) : null}
        <div style={{ display: "grid", placeItems: "center" }}>
          <Button
            type="submit"
            style={{
              marginTop: "20px",
            }}
            title="Donate"
          >
            Donate
          </Button>
        </div>
      </form>
      {/* This script will show Razorpay's modal */}
      <Script
        strategy="lazyOnload"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>
  );
}
