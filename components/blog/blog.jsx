import Image from "next/image";
import Link from "next/link";

//////////////////////////////////
// SSG
//////////////////////////////////
//getStaticProps()はnext.js v13では廃止
import { getPostsData } from "../../lib/post";

const Blog = async () => {
  const allPosts = await getPostsData();
  return (
    <>
      <h3>Blog</h3>

      <ul>
        {allPosts.map(({ id, title, date, thumbnail }) => (
          <li className='' key={id}>
            <Link href={`/posts/${id}`}>
              <Image src={thumbnail} width={320} height={210} alt={title} />
              <p>{title}</p>
              <p>{date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
