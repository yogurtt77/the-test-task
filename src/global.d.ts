export {}

declare global {
  interface Window {
    visualViewport: any
    requestIdleCallback: any
  }
}

