"use client";

import { useState } from "react";
import { Group, Box, ActionIcon, Text } from "@mantine/core";
import { Home, CheckSquare, PlusCircle, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Shell({
  children
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  const tabs = [
    { name: "home", label: "Home", icon: Home, path: "/" },
    { name: "tasks", label: "Tasks", icon: CheckSquare, path: "/tasks" },
    { name: "post", label: "Post", icon: PlusCircle, path: "/post" },
    { name: "chat", label: "Chat", icon: MessageCircle, path: "/chat" },
  ];

  return (
    <Box>
      {children}
      <Box
        pos="fixed"
        bottom={0}
        left={0}
        right={0}
        bg="white"
        style={{
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Group justify="space-around" py="xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.name;

            return (
              <Box
                key={tab.name}
                onClick={() => setActive(tab.name)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ActionIcon
                  variant="light"
                  color={isActive ? "teal" : "gray"}
                  radius="xl"
                  size="lg"
                  onClick={() => navigate(tab.path)}
                >
                  <Icon size={22} />
                </ActionIcon>
                <Text size="xs" c={isActive ? "teal" : "dimmed"}>
                  {tab.label}
                </Text>
              </Box>
            );
          })}
        </Group>
      </Box>
    </Box>
  );
}
