import Link from "next/link";
import Image from "next/image";
import { getPostsContent } from "../../../lib/post";

//Metadataを動的に定義（generateMetadata）
export async function generateMetadata({ params, searchParams }) {
  const postData = await getPostsContent(params.id);
  return {
    title: postData.title,
    description: "記事ページです",
  };
}

const Post = async ({ params }) => {
  const postData = await getPostsContent(params.id);
  // console.log(postData);//対応した記事の内容を配列で

  return (
    <>
      <article>
        <h1>{postData.title}</h1>
        <p>ID:{postData.id}</p>
        <Image src={postData.thumbnail} width={320} height={210} alt={postData.title} />

        {/*
        Note：
        「postData.blogComtentHTML」だとタグごと全て文字に出力されるため、下記でDOMとして表示。
        「dangerouslySetInnerHTML」はReactの機能。
        ※ただし本来なら、外部の危険性のあるファイルを扱う場合、サニタイズなどの処理が必要。例えば悪意のあるscriptタグなども実行される可能性があるため。
        */}
        <div dangerouslySetInnerHTML={{ __html: postData.blogComtentHTML }} />
      </article>

      <div className=''>
        <Link href='/'>Home</Link>
      </div>
    </>
  );
};

export default Post;
