import { createRoot } from "react-dom/client";
import { Flex, Theme } from "@radix-ui/themes";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "app/login/Login";
import { Registr } from "app/registr/ui/Registr";
import { default as Intro } from "app/page";
import { Header } from "widget/header/Header";
import ErrorPage from "./ErrorPage";
import { SelectCategory } from "app/createTask/step1";
import { Footer } from "widget/Footer/Footer";
import { CreateTask } from "app/createTask/step2";
import { default as Tasks } from "app/tasks/page";

const rootElement = document.getElementById("root");

export const paths = {
  HOME: "/",
  CREATE_TASK_1: "/create-task",
  CREATE_TASK_2: "/create-task/:category",
  LOGIN: "/login",
  REGISTER: "/register",
  FIND_TASKS: "/tasks",
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Flex direction={"column"} height={"100vh"}>
        <Header theme="light" />
        <Outlet />
        <Footer />
      </Flex>
    ),
    children: [
      { path: paths.HOME, element: <Intro /> },
      { path: paths.CREATE_TASK_1, element: <SelectCategory /> },
      { path: paths.CREATE_TASK_2, element: <CreateTask /> },
      { path: paths.LOGIN, element: <Login /> },
      { path: paths.REGISTER, element: <Registr /> },
      { path: paths.FIND_TASKS, element: <Tasks /> },
    ],
  },
]);

if (rootElement) {
  createRoot(rootElement).render(
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
}
