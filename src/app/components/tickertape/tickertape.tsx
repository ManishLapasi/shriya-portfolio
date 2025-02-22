import fs from "fs";
import path from "path";
import Image from "next/image";

export default async function TickerTape() {
  const logoDir = path.join(process.cwd(), "public/logos");
  const logos = fs.readdirSync(logoDir).filter((file) => file.endsWith(".svg"));
  return (
    <div className="flex flex-row mx-0 my-0 overflow-x-scroll no-scrollbar">
        {logos.map((logo) => (
        <div key={logo} className={`w-full w-1/6 min-w-60 px-20 py-10`}>
            <Image src={`/shriya-portfolio/logos/${logo}`} alt="Pen Logo" width={100} height={100}/>
        </div>
        ))
        }
    </div>
  )
}