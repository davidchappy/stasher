import Image from "next/image"

export default function Footer({}) {
  return (
    <div className="footer">
      <div className=""></div>
      <div className="">
        <span className="text-sm">Powered by</span>
        <Image src="/vercel.svg" alt="logo" width="50" height="50" />
      </div>
    </div>
  )
}
