import "@mantine/core/styles.css";
import {  MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme";
import { ToDoList } from "./componentes/toDoList";
import { ActionBar } from "./componentes/ActionBar";
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Title w={'fit-content'} m={'20px auto'}>Lista de Tarefas</Title>
      <ActionBar/>
      <ToDoList/>
    </MantineProvider>
  );
}
