interface Hero {
  title: string
  subTitle: string
}

export const Hero = ({ title, subTitle }: Hero) => {
  return (
    <>
      <div className="w-[780px] pt-[39px] px-[41px] pb-[13px]">
        <h1 className="text-[35px] leading-[0.9] font-black m-0 uppercase">
          {title}
        </h1>
        <p className="text-[16px] font-black my-0 mx-[2px]">{subTitle}</p>
      </div>
    </>
  )
}
