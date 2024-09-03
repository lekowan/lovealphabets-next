import Link from "next/link"
import styles from "./card-grid.module.css"

export const CardGrid = ({ data }) => {
  console.log("éfewewfwefwef", data)
  return (
    <>
      <section className="pt-[30px] px-[41px] pb-[200px] flex justify-center">
        <div className="h-auto w-full grid gap-[21px] grid-cols-1">
          {data &&
            data.map((exercise, index) => (
              <article
                key={index}
                className="w-full grid border-b border-[#e6e3ee] gap-x-[21px] grid-cols-[100px_1fr] pb-[31px] pt-[10px] "
              >
                <div className="border-0 w-[100px] flex justify-center flex-col text-center h-[100px] cursor-pointer">
                  <span className="text-[18px] w-full font-bold p-0 m-0">
                    {exercise.icon}
                  </span>
                </div>
                <div className="text-[17px] font-bold p-0 leading-[1.1] justify-between content-start">
                  <span className={styles.languageHeadingTitle}>
                    {exercise.title}
                  </span>
                  <span className={styles.languageStatus}></span>
                </div>
                <div className={styles.languageSubheading}>{exercise.text}</div>
                <div className={styles.languageButtonBar}>
                  <Link href={`${exercise.srsUrl}`}>
                    <button className={styles.languageCta}>LAUNCH SRS</button>
                  </Link>
                  <button className={styles.languageViewChartCta}>
                    PREVIEW
                  </button>
                  <div className={styles.languageInfo}>undefined</div>
                </div>
              </article>
            ))}
        </div>
      </section>
    </>
  )
}
