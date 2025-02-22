import NavBar from "./components/navbar/navbar";
import Navbar_Pseudo from "./components/navbar/navbar_pseudo";
import TickerTape from "./components/tickertape/tickertape";

export default function Home() {

  return (
    <div>
      <NavBar />
      <Navbar_Pseudo />
      <div className="relative flex flex-col">
        {/* first div, the one-liner */}
        <div className="mx-auto my-32 px-auto py-auto text-4xl">
          <p className="text-center">Shriya Supreeth</p>
          <p className='text-center text-xl text-bold'>Copywriter</p>
        </div>
        {/* second div, the logos */}
        <TickerTape />
      </div>
    </div>
  );
}