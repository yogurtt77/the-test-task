import ReactDOM from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import { ENV } from "@/env.ts"
import { ErrorBoundary } from "@components/ErrorBoundary"

const rootElement = document.getElementById("root") as HTMLElement

if (ENV.IS_PRODUCTION) {
  ;(window as any).TWA_LOGS_DISABLED = true
  ;["log", "info", "debug", "warn"].forEach((method) => {
    const original = (console as any)[method]
    ;(console as any)[method] = (...args: any[]) => {
      if ((window as any).TWA_LOGS_DISABLED && args[0]?.toString().includes("[Telegram.WebView]")) {
        return
      }
      original.apply(console, args)
    }
  })
}

ReactDOM.createRoot(rootElement).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
)

