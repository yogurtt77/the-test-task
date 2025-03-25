import clsx from "clsx"
import type { FC, PropsWithChildren } from "react"

import s from "./MainLayout.module.scss"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { Link } from "react-router-dom"
import { ROUTES } from "@/routes.tsx"

interface MainLayoutProps {
  classNames?: {
    root?: string
    body?: string
    footer?: string
  }
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ children, classNames }) => {
  return (
    <div className={clsx(s.wrap, classNames?.root)}>
      <header className={s.header}>
        <div className={s.headerContent}>
          <Link to={ROUTES.home.path} className={s.logo}>
            CompanyName
          </Link>
          <nav className={s.nav}>
            <Link to={ROUTES.home.path} className={`${s.navLink} ${s.active}`}>
              Главная
            </Link>
            <Link to="#" className={s.navLink}>
              О нас
            </Link>
            <Link to="#" className={s.navLink}>
              Услуги
            </Link>
            <Link to="#" className={s.navLink}>
              Портфолио
            </Link>
            <Link to="#" className={s.navLink}>
              Контакты
            </Link>
          </nav>
        </div>
      </header>
      <div className={clsx(s.wrap__body, classNames?.body)}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    </div>
  )
}

