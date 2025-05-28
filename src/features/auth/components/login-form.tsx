import { Box, Button, Heading, HStack, Link, Separator, Stack, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";
import { z } from "zod";

import { Checkbox, InputField } from "@/components/ui";

export function LoginForm() {
  const schema = z.object({
    email: z.string().min(1, "El correo es requerido").email("Correo inválido"),
    password: z.string().min(6, "La contraseña tiene que tener al menos 6 caracteres"),
  });

  type FormValues = z.infer<typeof schema>;

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = methods.handleSubmit(values => {
    console.log(values);
  });

  return (
    <Stack gap={6}>
      <Box>
        <Heading size="lg">¡Bienvenido de nuevo!</Heading>
        <Text color="gray.500">Accedé a tu cuenta para continuar.</Text>
      </Box>

      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <Stack gapY={4}>
            <InputField
              label="Correo electrónico"
              name="email"
              placeholder="ejemplo@correo.com"
              startElement={<FiMail />}
              type="email"
            />
            <InputField
              label="Contraseña"
              name="password"
              placeholder="••••••••"
              startElement={<FiLock />}
              type="password"
            />

            <HStack justify="space-between">
              <Checkbox>Recordarme</Checkbox>
              <Link color="blue.500" fontSize="sm">
                ¿Olvidaste tu contraseña?
              </Link>
            </HStack>

            <Button colorScheme="blackAlpha" type="submit">
              Iniciar sesión
            </Button>
          </Stack>
        </form>
      </FormProvider>

      <Separator />

      <Text fontSize="sm" textAlign="center">
        ¿No tenés una cuenta?{" "}
        <Link color="blue.500" href="#">
          Registrate aquí
        </Link>
      </Text>
    </Stack>
  );
}
