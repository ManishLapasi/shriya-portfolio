import NavBar from "../components/navbar/navbar";
import Navbar_Pseudo from "../components/navbar/navbar_pseudo";
import MyButton from "../components/button/button";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Navbar_Pseudo />
      <div className="relative flex flex-col">
        {/* first div, the one-liner */}
        <div className="mx-auto my-32 px-auto py-auto text-4xl">
          <p className="text-center">Meet Shriya, a talented copywriter with a passion for crafting compelling content</p>
        </div>
        {/* second div, the blocks */}
        <div className="flex flex-col md:flex-row mx-0 my-0">
          <div className="w-full md:w-1/2 text-2xl px-20 py-10 bg-gray-100">
            <p className="text-center">With years of experience in the industry, Shriya brings creativity and expertise to every project</p>
            <div className="flex items-center justify-center">
              <MyButton link="/shriya-portfolio" text="Explore" />
            </div>
          </div>
          <div className="w-full md:w-1/2 justify-center items-center text-2xl px-20 py-10">
            <p className="text-center">With years of experience in the industry, Shriya brings creativity and expertise to every project</p>
          </div>
        </div>
        {/* third div, witty */}
        <div className="mx-auto my-20 px-auto py-auto text-4xl">
          <p className="text-center">Witty</p>
        </div>
        {/* fourth div, the bullets */}
        <div className="flex flex-col md:flex-row mx-0 my-0">
          <div className="w-full md:w-1/4 text-2xl px-10 py-10">
            <p className="text-center">Impactful</p>
            <p className="text-center text-sm my-5">Her playful and creative approach adds a unique touch to every project, captivating the audience.</p>
            <div className="flex items-center justify-center -my-5">
              <MyButton link="/shriya-portfolio" text="Discover" />
            </div>
          </div>
          <div className="w-full md:w-1/4 justify-center items-center text-2xl px-10 py-10">
            <p className="text-center">Strategic</p>
            <p className="text-center text-sm my-5">Shriya's writing is not just words; it tells a story with intelligence, wit, and creativity.</p>
            <div className="flex items-center justify-center -my-5">
              <MyButton link="/shriya-portfolio" text="Explore" />
            </div>
          </div>
          <div className="w-full md:w-1/4 text-2xl px-10 py-10">
            <p className="text-center">Engaging</p>
            <p className="text-center text-sm my-5">Every piece she creates is filled with personality and charm, making it relatable and memorable.</p>
            <div className="flex items-center justify-center -my-5">
              <MyButton link="/shriya-portfolio" text="Read More" />
            </div>
          </div>
          <div className="w-full md:w-1/4 justify-center items-center text-2xl px-10 py-10">
            <p className="text-center">Creative</p>
            <p className="text-center text-sm my-5">Her typography-driven design showcases her talent in a visually stunning and minimalist way.</p>
            <div className="flex items-center justify-center -my-5">
              <MyButton link="/shriya-portfolio" text="Get in Touch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}