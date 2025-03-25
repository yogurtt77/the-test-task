import type { RouteObject } from "react-router-dom"
import { HomePage } from "@pages/HomePage"
import { ErrorPage } from "@pages/ErrorPage"
import { TestPage } from "@pages/TestPage"

export type ExtendedRouteObject = RouteObject & {
  title: string
  titleLang?: string
  path: string
}

export const ROUTES = {
  home: {
    path: "/",
    title: "Home",
    element: <HomePage />,
  } as ExtendedRouteObject,
  test: {
    path: "/test",
    title: "Test",
    element: <TestPage />,
  } as ExtendedRouteObject,
  error: {
    path: "*",
    title: "Error Page",
    titleLang: "pages:error",
    element: <ErrorPage />,
  } as ExtendedRouteObject,
}

export type RouteKeys = keyof typeof ROUTES

// Create an array of routes for use with useRoutes
export const routes: ExtendedRouteObject[] = Object.values(ROUTES)

export const getPathFromRoute = (route: ExtendedRouteObject): string => {
  return route.path || ""
}

