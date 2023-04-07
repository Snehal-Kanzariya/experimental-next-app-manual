import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <h2>Logo.</h2>
      <nav className="header-nav">
        <ul>
          <li>
            <Link className={router.pathname === "/" ? "active" : ""} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/me"
              className={router.pathname === "/me" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={router.pathname === "/blog" ? "active" : ""}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
