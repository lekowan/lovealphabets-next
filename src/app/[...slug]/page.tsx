"use client"

import { Footer, Nav, Hero } from "@/components"
import { Header } from "@/components/header/header"
import { usePathname } from "next/navigation"

const languageData = {
  japanese: {
    title: "Japanese",
    subTitle: "日本語",
    content: [
      {
        title: "Hiragana",
        icon: "ひ",
        text: "Memorize all Hiragna",
        srsUrl: "japanese-hiragana",
      },

      {
        title: "Katakana",
        icon: "カ",
        text: "Memorize all Katakana",
        srsUrl: "japanese-katakana",
      },
      {
        title: "Vocabulary Core 2,000",
        icon: "日",
        text: "Memorize the 2,000 most frequent Japanese words",
        srsUrl: "japanese-2000-vocabulary",
      },
    ],
  },
  // korean: [
  //   {
  //     title: "Hangul",
  //     icon: "ㅉ",
  //     text: "Memorize the Korean Hangul",
  //     srsUrl: "hangul",
  //   },
  // ],
  // cree: [
  //   {
  //     title: "Vocabulary",
  //     icon: "ㅉ",
  //     text: "Memorize the Korean Hangul",
  //     srsUrl: "cree-vocabulary",
  //   },
  // ],
}

const getLanguageData = () => {
  const router = usePathname()
  const slug = router.replace("/", "")
  console.log(languageData[slug])
  return languageData[slug]
}

export default function Language() {
  const languageData = getLanguageData()
  return (
    <>
      <div className="min-h-screen relative flex flex-col">
        <Header />
        <Hero
          title={languageData.title}
          subTitle={languageData.subTitle}
        ></Hero>
        {/* <CardGrid language={languageData.content}></CardGrid> */}
        <Footer />
      </div>
    </>
  )
}
