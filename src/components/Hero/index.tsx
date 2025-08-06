"use client";

import { Card, Group, Text, Box, Avatar, ActionIcon } from "@mantine/core";
import { Bell, Settings } from "lucide-react";

export default function Hero() {
  return (
    <Card
      radius="lg"
      withBorder={false}
      style={{
        background:
          "linear-gradient(135deg, var(--mantine-color-teal-5), var(--mantine-color-blue-5))",
        color: "white",
      }}
      p="lg"
    >
      {/* Greeting & actions */}
      <Group justify="space-between" align="flex-start">
        <Box>
          <Text size="lg" fw={600}>
            Good morning, Alex!
          </Text>
          <Text size="sm" mt={4}>
            🌞 Sunset District, SF
          </Text>
        </Box>

        <Group gap="sm">
          <ActionIcon
            radius="xl"
            size="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
            }}
          >
            <Bell size={18} />
          </ActionIcon>
          <ActionIcon
            radius="xl"
            size="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
            }}
          >
            <Settings size={18} />
          </ActionIcon>
          <Avatar src="/avatar.png" alt="User Avatar" radius="xl" />
        </Group>
      </Group>

      {/* Stats */}
      <Group mt="lg" gap="md" grow>
        <Card
          shadow="sm"
          radius="md"
          style={{
            backgroundColor: "var(--mantine-color-teal-1)",
            color: "var(--mantine-color-teal-9)",
          }}
          p="md"
        >
          <Text size="xs">Tasks Completed</Text>
          <Text fw={600} size="lg">
            12
          </Text>
        </Card>

        <Card
          shadow="sm"
          radius="md"
          style={{
            backgroundColor: "var(--mantine-color-blue-1)",
            color: "var(--mantine-color-blue-9)",
          }}
          p="md"
        >
          <Text size="xs">Hours Helped</Text>
          <Text fw={600} size="lg">
            24
          </Text>
        </Card>
      </Group>
    </Card>
  );
}
