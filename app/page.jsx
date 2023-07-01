import Link from "next/link";
import Image from "next/image";
import Blog from "@/components/blog/blog";

const Home = ({ allPostsData }) => {
  return (
    <>
      <p>hello</p>
      <div>
        <Link href='/test'>Fetch Test</Link>
      </div>

      <Image src='/img_vader.jpg' alt='vader' width={100} height={100}></Image>

      <Blog />
    </>
  );
};

export default Home;
