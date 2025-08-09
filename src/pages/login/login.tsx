import { useState } from "react";
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
import { Link } from "react-router-dom";

function LoginText() {
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
    <TextInput
      rightSection={rightSection}
      label="Email"
      placeholder="Your email"
    />
  );
}

function LoginFocus() {
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

export function Login() {
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
            Welcome Back
          </Title>
          <LoginText />
          <LoginFocus />
          <Button fullWidth mt="md" component={Link} to="/home" size="sm">
            Login
          </Button>
          <Group justify="center" mt="sm">
            <Text size="sm">
              Don't have an account?{" "}
              <Anchor component={Link} to="/signup" size="sm">
                SignUp
              </Anchor>
            </Text>
          </Group>
        </Stack>
      </Card>
    </Center>
  );
}

export default function App() {
  return <Login />;
}
