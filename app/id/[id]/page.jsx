//Build時に実行される。SGで生成するときに必要（下記の場合、1のidページだけ作成される）
export async function generateStaticParams() {
  return [{ id: "1" }]; //この値がparams引数にいく

  //普通は上記のように個別に指定するのではなく、下記のようにこの関数内ですべてのIDの配列を自動で作成して、SGで生成する。
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))
}

const Page = async ({ params }) => {
  // console.log(params); //paramsには[〇〇]に対応したものが入る。今回は[id]なのでid
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return (
    <>
      <p>ID is {id}.</p>
      <p>User：{user.name}</p>
    </>
  );
};

export default Page;
