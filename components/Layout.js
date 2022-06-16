import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto py-[110px] px-4">{children}</main>
    </>
  );
};

export default Layout;
