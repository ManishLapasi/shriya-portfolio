import Image from "next/image";
import NavBar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold underline">
        Hello world! Shriya here!
      </h1>
    </div>
  );
}
