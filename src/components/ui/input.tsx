import { Field, Input, InputGroup, IconButton } from "@chakra-ui/react";
import type { ReactElement } from "react";
import { useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { withMask } from "use-mask-input";

interface InputFieldProps {
  disabled?: boolean;
  endElement?: ReactElement;
  label: string;
  mask?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  startElement?: ReactElement;
  type?: string;
  variant?: "subtle" | "outline" | "flushed";
}

export const InputField = ({
  disabled = false,
  endElement,
  label,
  mask,
  name,
  placeholder,
  required = false,
  size = "md",
  startElement,
  type = "text",
  variant = "outline",
}: InputFieldProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const maskedRef = mask ? withMask(mask) : undefined;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const passwordToggleButton = isPassword ? (
    <IconButton
      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
      size={size}
      type="button"
      variant="plain"
      onClick={() => setShowPassword(prev => !prev)}
    >
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </IconButton>
  ) : null;

  return (
    <Field.Root invalid={!!error} required={required}>
      <Field.Label>{label}</Field.Label>

      <InputGroup endElement={endElement ?? passwordToggleButton} startElement={startElement}>
        <Input
          ref={maskedRef ?? field.ref}
          disabled={disabled}
          id={name}
          placeholder={placeholder}
          size={size}
          type={inputType}
          value={field.value}
          variant={variant}
          onBlur={field.onBlur}
          onChange={field.onChange}
        />
      </InputGroup>

      {error?.message && <Field.ErrorText>{error.message}</Field.ErrorText>}
    </Field.Root>
  );
};
