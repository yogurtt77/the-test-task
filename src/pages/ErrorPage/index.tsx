import type { FC } from "react"
import { Link } from "react-router-dom"
import s from "./ErrorPage.module.scss"

export const ErrorPage: FC = () => {
  return (
    <div className={s.wrap}>
      <h1>404</h1>
      <p>Страница не найдена. Возможно, она была удалена или перемещена.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  )
}

