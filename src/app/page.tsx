import React from "react"
import styles from "./home.module.css"
import { Nav, Footer } from "@/components"
import Link from "next/link"

const languageList = [
  { title: "cree", icon: "ᐊ" },
  { title: "japanese", icon: "な" },
  { title: "korean", icon: "ㅉ" },
]

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative flex flex-col">
        <header className="min-h-[70px] flex w-full items-center justify-between">
          <Nav></Nav>
        </header>
        <section className={styles.homeWrapper}>
          <div className={styles.home}>
            {languageList.map((language, index) => (
              <article className={styles.homeLanguage} key={index}>
                <Link href={`${language.title}`}>
                  <div className={styles.homeLanguageCard}>
                    <span className={styles.homeLanguageIcon}>
                      {language.icon}
                    </span>
                  </div>
                  <div className={styles.headingContent}>
                    <div className={styles.languageHeading}>
                      {language.title}
                    </div>
                    <div className={styles.languageStatus}></div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
