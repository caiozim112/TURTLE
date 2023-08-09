import { useForm } from "@mantine/form";
import { IconLock, IconMail } from "@tabler/icons-react";
import { FacebookButton } from "./components/socialButtom/socialButtom/facebook/index";
import { GoogleButton } from "./components/socialButtom/socialButtom/google/index";
import React from 'react';

import {
  ActionIcon,
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

export function AuthenticationForm(props) {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      style={{ width: "430px", border: "none" }}
      {...props}
    >
      <Text size="xl" weight={500}>
        WelcomeBack !
      </Text>
      <Text c="dimmed" style={{ fontSize: "12px", marginTop: "2%" }}>
        Start managing your finnace faster and better{" "}
      </Text>

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            variant="filled"
            icon={
              <ActionIcon variant="outline" color="blue" p={4} bg="white">
                <IconMail />
              </ActionIcon>
            }
            size="md"
            style={{ marginTop: "8%" }}
            required
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
          />

          <PasswordInput
            variant="filled"
            icon={
              <ActionIcon variant="outline" color="blue" p={4} bg="white">
                <IconLock />
              </ActionIcon>
            }
            size="md"
            required
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
          />
        </Stack>

        <Group position="right" mt="lg">
          <Anchor
            onClick={(event) => event.preventDefault()}
            href="#"
            size="sm"
            fw={700}
          >
            Forgot password?
          </Anchor>
        </Group>

        <Group position="apart" mt="xl">
          <Button size="md" type="submit" style={{ width: "100%" }}>
            Login
          </Button>
        </Group>
      </form>
      <Divider
        c="dimmed"
        label="Or"
        labelPosition="center"
        my="lg"
        style={{ marginTop: "10%" }}
      />

      <Group grow mb="md" mt="md">
        <GoogleButton size="md" radius="10px">
          Google
        </GoogleButton>
        <FacebookButton size="md" radius="10px">
          Facebook
        </FacebookButton>
      </Group>

      <Text c="dimmed" size="sm" align="center" mt="10%">
        Don&apos;t you have an account?{" "}
        <Anchor
          ml={5}
          href="#"
          weight={700}
          onClick={(event) => event.preventDefault()}
        >
          Sign Up
        </Anchor>
      </Text>
    </Paper>
  );
}
