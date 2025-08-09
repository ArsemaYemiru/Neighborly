import { useState, type SetStateAction } from "react";
import { Info } from "lucide-react";
import {
  Group,
  Anchor,
  Center,
  PasswordInput,
  Text,
  TextInput,
  Tooltip,
  Card,
  Stack,
  Title,
  Button,
} from "@mantine/core";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

interface SignupTextProps {
  label: string;
  placeholder: string;
  rightSection?: React.ReactNode; 
}

function SignupText({ label, placeholder, rightSection }: SignupTextProps) {
  return (
    <TextInput
      rightSection={rightSection}
      label={label}
      placeholder={placeholder}
    />
  );
}

function SignUpFocus() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const valid = value.trim().length >= 6;

  return (
    <Tooltip
      label={
        valid ? "All good!" : "Password must include at least 6 characters"
      }
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? "teal" : undefined}
      withinPortal
    >
      <PasswordInput
        label="Password"
        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  );
}

export function SignUp() {
  const [phone, setPhone] = useState("");

  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: "pop-bottom-right" }}
    >
      <Text component="div" c="dimmed" style={{ cursor: "help" }}>
        <Center>
          <Info size={18} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <Center
      style={{
        align: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card
        shadow="xl"
        padding="lg"
        radius="md"
        withBorder
        style={{ width: 400 }}
      >
        <Stack>
          <Title order={2} ta="center">
            Create an Account
          </Title>

          <SignupText label="Username" placeholder="Choose a username" />
          <div>
            <label style={{ fontSize: 14, fontWeight: 500 }}>
              Phone Number
            </label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(value: SetStateAction<string>) => setPhone(value)}
              inputStyle={{ width: "100%" }}
              enableSearch
            />
          </div>

          <SignupText
            label="Email"
            placeholder="Your email"
            rightSection={rightSection}
          />
          <SignUpFocus />
          <Button fullWidth mt="md" component={Link} to="/home" size="sm">
            Sign Up
          </Button>
          <Group justify="center" mt="sm">
            <Text size="sm">
              Already have an account?{" "}
              <Anchor component={Link} to="/login" size="sm">
                Login
              </Anchor>
            </Text>
          </Group>
        </Stack>
      </Card>
    </Center>
  );
}

export default function App() {
  return <SignUp />;
}
