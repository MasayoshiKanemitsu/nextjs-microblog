//404
import Link from "next/link";

// export const metadata = {
//   title: "404 Page",
//   description: "Not Found",
// };

const NotFound = () => {
  return (
    <>
      <title>404 Page</title>

      <p>404ページですよ。</p>
      <div className=''>
        <Link href='/'>Home</Link>
      </div>
    </>
  );
};

export default NotFound;
