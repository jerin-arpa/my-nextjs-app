import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>This is Nest App</h1>
      <Counter></Counter>
      <Link href="/about">
        <button className="btn btn-error">About</button>
      </Link>
    </div>
  );
};

export default HomePage;
