"use client"

import { type FC, useState } from "react"
import s from "./HomePage.module.scss"
import { Star } from "lucide-react"

interface ProjectData {
  id: number
  title: string
  tag: string
}

export const HomePage: FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: ProjectData[] = [
    { id: 1, title: "Корпоративный сайт", tag: "Веб-разработка" },
    { id: 2, title: "Мобильное приложение", tag: "iOS/Android" },
    { id: 3, title: "E-commerce платформа", tag: "Веб-платформа" },
    { id: 4, title: "CRM система", tag: "Бизнес-решение" },
    { id: 5, title: "Дизайн интерфейса", tag: "UI/UX" },
    { id: 6, title: "Маркетинговая кампания", tag: "Брендинг" },
  ]

  return (
    <div className={s.wrap}>
      {/* Hero Section */}
      <section className={s.hero}>
        <h1 className={s.heroTitle}>Инновационные решения для вашего бизнеса</h1>

        <div className={s.services}>
          <div className={s.serviceCard}>
            <div className={s.serviceIconWrapper}>
              <div className={s.serviceIcon}>
                <span className={s.iconWand}>✨</span>
              </div>
            </div>
            <h3 className={s.serviceTitle}>Креативный дизайн</h3>
            <p className={s.serviceDescription}>
              Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание
              целевой аудитории.
            </p>
            <div className={s.serviceFooter}>
              <div className={s.rating}>
                <Star size={16} className={s.starIcon} />
                <span>4.9</span>
              </div>
              <span className={s.tag}>Дизайн</span>
            </div>
          </div>

          <div className={s.serviceCard}>
            <div className={s.serviceIconWrapper}>
              <div className={s.serviceIcon}>
                <span className={s.iconRocket}>🚀</span>
              </div>
            </div>
            <h3 className={s.serviceTitle}>Быстрая разработка</h3>
            <p className={s.serviceDescription}>
              Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.
            </p>
            <div className={s.serviceFooter}>
              <div className={s.rating}>
                <Star size={16} className={s.starIcon} />
                <span>4.8</span>
              </div>
              <span className={s.tag}>Разработка</span>
            </div>
          </div>

          <div className={s.serviceCard}>
            <div className={s.serviceIconWrapper}>
              <div className={s.serviceIcon}>
                <span className={s.iconMobile}>📱</span>
              </div>
            </div>
            <h3 className={s.serviceTitle}>Мобильная оптимизация</h3>
            <p className={s.serviceDescription}>
              Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом
              экране.
            </p>
            <div className={s.serviceFooter}>
              <div className={s.rating}>
                <Star size={16} className={s.starIcon} />
                <span>4.7</span>
              </div>
              <span className={s.tag}>Оптимизация</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={s.portfolio}>
        <h2 className={s.sectionTitle}>Наши работы</h2>
        <p className={s.sectionSubtitle}>Ознакомьтесь с нашими лучшими проектами в различных категориях</p>

        <div className={s.portfolioNav}>
          <button className={`${s.navButton} ${s.active}`}>Главная</button>
          <button className={s.navButton}>О нас</button>
          <button className={s.navButton}>Услуги</button>
          <button className={s.navButton}>Портфолио</button>
          <button className={s.navButton}>Контакты</button>
        </div>

        <div className={s.projects}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${s.projectCard} ${hoveredProject === project.id ? s.featured : ""} ${project.id === 6 ? s.bordered : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={s.projectContent}>
                {hoveredProject === project.id ? (
                  <>
                    <h3 className={s.projectTitle}>{project.title}</h3>
                    <div className={s.projectTagWrapper}>
                      <span className={s.projectTag}>{project.tag}</span>
                    </div>
                    <div className={s.buttonWrapper}>
                      <button className={s.detailsButton}>Подробнее</button>
                    </div>
                  </>
                ) : (
                  <h3 className={s.projectTitle}>{project.title}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={s.footer}>
        <p>© 2025 TheRPC. All rights reserved.</p>
      </footer>
    </div>
  )
}

