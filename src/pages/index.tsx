import { Button, Flex, Stack } from "@chakra-ui/react"
import { Input } from "../components/form/Input"
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  // inside the required field you can add a '' with a message of your choosing
  email: yup.string().required().email(), 
  password: yup.string().required(),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({resolver: yupResolver(signInFormSchema)})

  console.log(errors);
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      >
    
      <Flex 
        as="form" 
        w="100%" 
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="Email"
            error={errors.email}
            {...register}
            // {...(register("email", { required: "E-mail Required" }))}
          />
          <Input
            type="password"
            name="password"
            label="Passoword"
            error={errors.password}
            {...register}
            // {...(register("password", { required: "Password Required" }))}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </Flex>

    </Flex>

  );
}
