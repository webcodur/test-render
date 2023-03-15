import Link from "next/link";
const Header = () => {
  return (
    <>
      <h3>header</h3>
      <Link href="/">home</Link><br />
      <Link href="/csr">csr</Link><br />
      <Link href="/ssr">ssr</Link><br />
      <Link href="/isr">isr</Link><br />
      <Link href="/ssg">ssg</Link><br />
      <br />
    </>
  );
};

export default Header;
