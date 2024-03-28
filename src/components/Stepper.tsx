import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Stepper.css";

function Stepperr() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        m={50}
        styles={{
          stepWrapper: {
            color: "red",
            fontSize: "2rem",
          },
          stepBody: {
            color: "blue",
          },
          stepDescription: { color: "red" },
          stepIcon: {
            color: "white",
            backgroundColor: "red",
            border: "none",
          },

          root: {
            color: "blue",
            textAlign: "center",
            border: "1px solied blue",
          },
          steps: { border: "none" },
        }}
      >
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl" ml="20rem">
        <Button
          onClick={prevStep}
          mr={500}
          styles={{
            root: {
              width: "5rem",
              height: "2.5rem",
              border: "1px solid green",
              borderRadius: "10px",
              background: "green",
              color: "white",
            },
          }}
        >
          Back
        </Button>
        <Button
          onClick={nextStep}
          styles={{
            root: {
              width: "5rem",
              height: "2.5rem",
              border: "1px solid green",
              borderRadius: "10px",
              background: "green",
              color: "white",
            },
          }}
        >
          Next
        </Button>
      </Group>
    </>
  );
}

export default Stepperr;
