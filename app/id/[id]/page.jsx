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
