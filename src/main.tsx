import {
  createTheme,
  MantineProvider,
  type MantineColorsTuple,
} from "@mantine/core";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import App from "./App.tsx";

const teal: MantineColorsTuple = [
  "#e6fcf7",
  "#c3f6eb",
  "#96eddd",
  "#66e3cc",
  "#3edabc",
  "#23d4b1",
  "#12d0ab",
  "#0abc98",
  "#07a788",
  "#018e73",
];

const orange: MantineColorsTuple = [
  "#fff4e6",
  "#ffe8cc",
  "#ffd8a8",
  "#ffc078",
  "#ffa94d",
  "#ff922b",
  "#fd7e14",
  "#f76707",
  "#e8590c",
  "#d9480f",
];

const purple: MantineColorsTuple = [
  "#f8f0fc",
  "#f3d9fa",
  "#eebefa",
  "#e599f7",
  "#da77f2",
  "#cc5de8",
  "#be4bdb",
  "#ae3ec9",
  "#9c36b5",
  "#862e9c",
];

const blue: MantineColorsTuple = [
  "#e7f5ff",
  "#d0ebff",
  "#a5d8ff",
  "#74c0fc",
  "#4dabf7",
  "#339af0",
  "#228be6",
  "#1c7ed6",
  "#1971c2",
  "#1864ab",
];

const green: MantineColorsTuple = [
  "#ebfbee",
  "#d3f9d8",
  "#b2f2bb",
  "#8ce99a",
  "#69db7c",
  "#51cf66",
  "#40c057",
  "#37b24d",
  "#2f9e44",
  "#2b8a3e",
];

const theme = createTheme({
  colors: {
    teal,
    orange,
    purple,
    blue,
    green,
  },
  primaryColor: "teal",
  primaryShade: { light: 5, dark: 6 },
  defaultRadius: "md",
  fontFamily: "Inter, sans-serif",
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} >
    <App />
  </MantineProvider>
);
