import { useEffect, useState } from "react";
import { Button, Form, H4, Spinner } from "tamagui";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export function DemoForm({ fechaEntrada, fechaSalida }) {
  const [status, setStatus] = useState("off");

  function getTextoBoton(status) {
    switch (status) {
      case "submitting": {
        return "Reservando";
      }
      case "submitted": {
        return "Reservado";
      }
      default: {
        return "Reservar";
      }
    }
  }

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => {
        // Guardar reservacion aqui
        setStatus("submitted");
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Form
      backgroundColor="$backgroundTransparent"
      alignItems="center"
      width={windowWidth}
      height="$10"
      onSubmit={() => setStatus("submitting")}
      borderColor="$background"
      paddingTop="$5"
    >
      <Form.Trigger asChild disabled={status !== "off"}>
        <Button
          backgroundColor={"#8B66E5"}
          color="white"
          borderRadius="$10"
          width="$15"
          size="$5"
          icon={status === "submitting" ? () => <Spinner /> : undefined}
          disabled={status === "submitted"}
          opacity={status === "submitted" ? 0.5 : 1}
        >
          {getTextoBoton(status)}
        </Button>
      </Form.Trigger>
    </Form>
  );
}

export default DemoForm;
