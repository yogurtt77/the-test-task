import "@assets/scss/main.scss"
import { routes } from "@/routes.tsx"
import { useRoutes } from "react-router-dom"
import { MainLayout } from "@layouts/MainLayout"

export const App = () => {
  const routeElement = useRoutes(routes)
  return <MainLayout>{routeElement}</MainLayout>
}

