import { Footer, Nav, Hero } from "@/components"
import { CardGrid } from "@/components/card-grid/card-grid"
import { Header } from "@/components/header/header"

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
  korean: {
    title: "Korean",
    subtitle: "",
    content: [
      {
        title: "Hangul",
        icon: "ㅉ",
        text: "Memorize the Korean Hangul",
        srsUrl: "hangul",
      },
    ],
  },

  // cree: [
  //   {
  //     title: "Vocabulary",
  //     icon: "ㅉ",
  //     text: "Memorize the Korean Hangul",
  //     srsUrl: "cree-vocabulary",
  //   },
  // ],
}

export async function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json())

  return Object.keys(languageData).map((language) => ({
    slug: language,
  }))
}

const getLanguageData = (slug: string) => {
  return languageData[slug]
}

export default function Language({ params }) {
  const { slug } = params
  const languageData = getLanguageData(slug)

  return (
    <>
      <div className="min-h-screen relative flex flex-col">
        <Header />
        <Hero
          title={languageData.title}
          subTitle={languageData.subTitle}
        ></Hero>
        <CardGrid data={languageData.content}></CardGrid>
        <Footer />
      </div>
    </>
  )
}
