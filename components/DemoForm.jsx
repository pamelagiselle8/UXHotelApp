import { useEffect, useState } from "react";
import { Button, Form, H4, Spinner } from "tamagui";

export function DemoForm() {
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
      const timer = setTimeout(() => setStatus("submitted"), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);
  return (
    <Form
      alignItems="center"
      minWidth={300}
      gap="$2"
      onSubmit={() => setStatus("submitting")}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <Form.Trigger asChild disabled={status !== "off"}>
        <Button icon={status === "submitting" ? () => <Spinner /> : undefined}>
          {getTextoBoton(status)}
        </Button>
      </Form.Trigger>
    </Form>
  );
}

export default DemoForm;
