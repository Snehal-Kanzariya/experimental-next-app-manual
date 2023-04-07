import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        dicta exercitationem, tenetur aspernatur veniam libero sunt corporis
        voluptate. Ipsam perspiciatis sapiente reiciendis dolore atque porro,
        eius possimus provident doloribus ea.
      </p>
      <Link href="/me">about page</Link>
    </>
  );
}
