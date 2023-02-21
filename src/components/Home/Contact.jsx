import {
  Button,
  Flex,
  Image,
  Text,
  TextAreaField,
  TextField,
  PhoneNumberField,
  useTheme,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { encode } from "../../utils/helpers";
import { Swal } from "../../utils/sweetalert2";
import dialCodes from "../../utils/countryDialCodes";

export default function Contact() {
  const { tokens } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dialcode: "",
    phonenumber: "",
    message: "",
  });

  function handleChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() =>
        Swal.fire({
          icon: "success",
          text: "Form submitted successfully!",
          confirmButtonColor: tokens.colors.font.primary,
        })
      )
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          text: "An error occurred while submiting the form!",
          confirmButtonColor: tokens.colors.font.primary,
        });
      });
  }

  return (
    <Flex
      direction={{ base: "column", large: "row" }}
      padding="4rem"
      backgroundColor={tokens.colors.background.secondary}
      id="contact"
    >
      <Flex
        direction="column"
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          as="h2"
          fontWeight="bold"
          fontSize="2rem"
          width={{ base: "100%", large: "80%" }}
          textAlign={{ base: "center", large: "left" }}
        >
          Contact us
        </Text>

        <Flex
          as="form"
          direction="column"
          width={{ base: "100%", large: "80%" }}
          action="#"
          name="contact"
          method="POST"
          netlify
          style={{ width: "100%" }}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextField
            size="default"
            name="name"
            placeholder="Name"
            label="Name:"
            isRequired={true}
            onChange={handleChange}
          />
          <TextField
            size="default"
            name="email"
            placeholder="Email"
            label="Email:"
            type="email"
            isRequired={true}
            onChange={handleChange}
          />
          <PhoneNumberField
            size="default"
            label="Phone number:"
            isRequired={true}
            dialCodeList={dialCodes}
            dialCodeName="dialcode"
            onDialCodeChange={handleChange}
            name="phonenumber"
            onChange={handleChange}
          />
          <TextAreaField
            size="default"
            name="message"
            placeholder="Message"
            label="Message:"
            isRequired={true}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        flex={1}
        marginTop={{ base: "2rem", large: "0rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <Image src="/images/4.png" alt="" />
      </Flex>
    </Flex>
  );
}
