import Link from "next/link";
import Image from "next/image";
import Blog from "@/components/blog/blog";
import Container from "@/layout/Container";

const Home = ({ allPostsData }) => {
  return (
    <>
      <Container>
        <p>hello</p>
        <div>
          <ul>
            <li>
              <Link href='/test'>Fetch Test</Link>
            </li>
            <li>
              <Link href='/swiper'>Swiper Test</Link>
            </li>
          </ul>
        </div>

        <Image src='/img_vader.jpg' alt='vader' width={100} height={100}></Image>

        <Blog />
      </Container>
    </>
  );
};

export default Home;
