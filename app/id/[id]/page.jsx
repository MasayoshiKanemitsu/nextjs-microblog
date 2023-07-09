const Page = ({ params }) => {
  // console.log(params); //paramsには[〇〇]に対応したものが入る。今回は[id]なのでid
  const id = params.id;
  return (
    <>
      <p>ID is {id}.</p>
    </>
  );
};

export default Page;
