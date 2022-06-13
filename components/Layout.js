import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main class="max-w-[1200px] mx-auto py-4">{children}</main>
    </>
  );
};

export default Layout;
