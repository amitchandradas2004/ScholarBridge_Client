import Logo from "@/Assets/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const user = false;
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {user ? (
                <>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/scholarships">Scholarships</Link>
                  </li>
                  <li>
                    <Link href="/addScholarships">Add Scholarship</Link>
                  </li>
                  <li>
                    <Link href="/myScholarships">My Scholarships</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/scholarships">Scholarships</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link href="/" className="flex items-center text-xl font-bold">
            <Image src={Logo} alt="ScholarBridge Logo" height={45} width={45} />
            ScholarBridge
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/scholarships">Scholarships</Link>
                </li>
                <li>
                  <Link href="/addScholarships">Add Scholarship</Link>
                </li>
                <li>
                  <Link href="/myScholarships">My Scholarships</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/scholarships">Scholarships</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button className="btn bg-red-500 rounded-full btn-error text-white">
              Logout
            </button>
          ) : (
            <Link href="/signup">
              {" "}
              <button className="btn rounded-full btn-primary text-white">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
