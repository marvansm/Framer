import React from "react";
import Layout from "./Layout";
import HomePage from "./Featured/Pages/Home/Page/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { routers } from "./router";
const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
