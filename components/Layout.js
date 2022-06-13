import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto pt-[130px]">{children}</main>
    </>
  );
};

export default Layout;
