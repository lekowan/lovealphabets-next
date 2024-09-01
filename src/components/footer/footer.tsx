/* .footer {
  width: 100%;
  display: flex;
  padding: 20px 41px;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fafafb;
  flex-shrink: 0;
  bottom: 0;
  position: absolute;
} */

export function Footer() {
  return (
    <footer className="w-full flex py-[20px] px-[41px] justify-between absolute flex-shrink-0 bottom-0 bg-[#fafafb] text-[13px]">
      <div>2021 love alphabets. All rights reserved.</div>
      <div>hello@lovealphabets.com</div>
    </footer>
  )
}
