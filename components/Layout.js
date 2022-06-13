import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto py-[120px]">{children}</main>
    </>
  );
};

export default Layout;
