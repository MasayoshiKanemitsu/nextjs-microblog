import Header from "@/components/header/header";

const Container = ({ children, is_show }) => {
  return (
    <>
      <Header is_show={is_show} />
      {children}
    </>
  );
};

export default Container;
