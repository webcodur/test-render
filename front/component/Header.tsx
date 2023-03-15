import Link from "next/link";
const Header = () => {
  return (
    <>
      <h3>header</h3>
      <Link href="/">home</Link><br />
      <Link href="/render/csr">csr</Link><br />
      <Link href="/render/ssr">ssr</Link><br />
      <Link href="/render/isr">isr</Link><br />
      <Link href="/render/ssg">ssg</Link><br />
      <br />
    </>
  );
};

export default Header;
