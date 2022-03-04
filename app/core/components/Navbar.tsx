import { Suspense } from "react"
import {
  AuthenticationError,
  Image,
  Link,
  useMutation,
  useRouter,
  Routes,
  Script,
  PromiseReturnType,
} from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold leading-6 text-white whitespace-no-wrap bg-green-600 border-transparent rounded-lg shadow-sm hover:bg-green-500"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <a className="text-base px-4 py-2 font-semibold leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-200">
            Sign Up
          </a>
        </Link>
        <Link href={Routes.LoginPage()}>
          <a className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold leading-6 text-white whitespace-no-wrap bg-green-600 border-transparent rounded-lg shadow-sm hover:bg-green-500">
            Login
          </a>
        </Link>
      </>
    )
  }
}

export const Navbar = () => {
  const router = useRouter()
  return (
    <header className="w-full px-8 text-gray-700 bg-transparent">
      <div className="container flex flex-row flex-wrap justify-between py-5 mx-auto lg:flex-row lg:items-center max-w-7xl ">
        <div className="relative flex flex-row justify-between md:flex-row">
          <Link href={Routes.Home()}>
            <a className="flex items-center mb-0 font-medium text-gray-900 lg:w-auto md:items-center md:justify-center">
              <div className="self-center">
                <Image src={logo} alt="reneware" />
              </div>
            </a>
          </Link>
          <nav className="hidden flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-6 md:border-l md:border-gray-200 md:flex">
            <Link href={Routes.Home()}>
              <a
                className={
                  router.pathname === "/"
                    ? "mr-5 px-4 py-2 font-semibold leading-6 text-green-600 bg-transparent rounded-lg hover:bg-gray-200"
                    : "mr-5 px-4 py-2 font-semibold leading-6 text-gray-600 bg-transparent rounded-lg hover:bg-gray-200"
                }
              >
                Home
              </a>
            </Link>
            <Link href={Routes.Donate()}>
              <a
                className={
                  router.pathname === "/donate"
                    ? "mr-5 px-4 py-2 font-semibold leading-6 text-green-600 bg-transparent rounded-lg hover:bg-gray-200"
                    : "mr-5 px-4 py-2 font-semibold leading-6 text-gray-600 bg-transparent rounded-lg hover:bg-gray-200"
                }
              >
                Donate
              </a>
            </Link>
            <Link href={Routes.Rewards()}>
              <a
                className={
                  router.pathname === "/rewards"
                    ? "mr-5 px-4 py-2 font-semibold leading-6 text-green-600 bg-transparent rounded-lg hover:bg-gray-200"
                    : "mr-5 px-4 py-2 font-semibold leading-6 text-gray-600 bg-transparent rounded-lg hover:bg-gray-200"
                }
              >
                Rewards
              </a>
            </Link>
            <Link href="/analytics">
              <a
                className={
                  router.pathname === "/analytics"
                    ? "mr-5 px-4 py-2 font-semibold leading-6 text-green-600 bg-transparent rounded-lg hover:bg-gray-200"
                    : "mr-5 px-4 py-2 font-semibold leading-6 text-gray-600 bg-transparent rounded-lg hover:bg-gray-200"
                }
              >
                Analytics
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.pathname === "/about"
                    ? "mr-1 px-4 py-2 font-semibold leading-6 text-green-600 bg-transparent rounded-lg hover:bg-gray-200"
                    : "mr-1 px-4 py-2 font-semibold leading-6 text-gray-600 bg-transparent rounded-lg hover:bg-gray-200"
                }
              >
                About Us
              </a>
            </Link>
          </nav>
        </div>
        <div className="hidden items-center ml-1 space-x-6 md:justify-end md:inline-flex">
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </div>
        <button
          className="rounded-lg items-center inline-flex justify-end md:hidden focus:outline-none focus:shadow-outline mr-3"
          id="nav_hamburger"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-9 h-9">
            <path
              id="nav_hamburger_open"
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
            <path
              id="nav_hamburger_close"
              className="hidden sticky"
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="nav_hamburger_menu"
        className="hidden absolute w-full flex right-0 top-20 md:hidden z-50"
        style={{
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.55)",
        }}
      >
        <nav className="w-full flex flex-wrap items-center text-base text-center md:mb-0 divide-y divide-slate-800">
          <a
            href="/"
            className={
              router.pathname === "/"
                ? "w-full px-4 py-2 font-semibold leading-10 text-green-600 bg-transparent hover:bg-gray-200"
                : "w-full px-4 py-2 font-semibold leading-10 text-gray-600 bg-transparent hover:bg-gray-200"
            }
          >
            Home
          </a>
          <a
            href="/donate"
            className={
              router.pathname === "/donate"
                ? "w-full px-4 py-2 font-semibold leading-10 text-green-600 bg-transparent hover:bg-gray-200"
                : "w-full px-4 py-2 font-semibold leading-10 text-gray-600 bg-transparent hover:bg-gray-200"
            }
          >
            Donate
          </a>
          <a
            href="/rewards"
            className={
              router.pathname === "/rewards"
                ? "w-full px-4 py-2 font-semibold leading-10 text-green-600 bg-transparent hover:bg-gray-200"
                : "w-full px-4 py-2 font-semibold leading-10 text-gray-600 bg-transparent hover:bg-gray-200"
            }
          >
            Rewards
          </a>
          <a
            href="/analytics"
            className={
              router.pathname === "/analytics"
                ? "w-full px-4 py-2 font-semibold leading-10 text-green-600 bg-transparent hover:bg-gray-200"
                : "w-full px-4 py-2 font-semibold leading-10 text-gray-600 bg-transparent hover:bg-gray-200"
            }
          >
            Analytics
          </a>
          <a
            href="/about"
            className={
              router.pathname === "/about"
                ? "w-full px-4 py-2 font-semibold leading-10 text-green-600 bg-transparent hover:bg-gray-200"
                : "w-full px-4 py-2 font-semibold leading-10 text-gray-600 bg-transparent hover:bg-gray-200"
            }
          >
            About Us
          </a>
          <a
            href="/signup"
            className={
              router.pathname === "/signup"
                ? "w-full px-4 py-2 font-semibold leading-10 text-green-600 bg-transparent hover:bg-gray-200"
                : "w-full px-4 py-2 font-semibold leading-10 text-gray-600 bg-transparent hover:bg-gray-200"
            }
          >
            Sign Up
          </a>
          <a
            href="/login"
            className={
              router.pathname === "/login"
                ? "w-full px-4 py-2 font-semibold leading-10 text-green-600 bg-transparent hover:bg-gray-200"
                : "w-full px-4 py-2 font-semibold leading-10 text-gray-600 bg-transparent hover:bg-gray-200"
            }
          >
            Login
          </a>
        </nav>
      </div>
      <Script id="show-nav" strategy="lazyOnload">
        {`
          document.querySelector("#nav_hamburger")?.addEventListener("click", () => {
            if (document.querySelector("#nav_hamburger_open")?.classList.contains("hidden")) {
              document.querySelector("#nav_hamburger_open")?.classList.remove("hidden")
              document.querySelector("#nav_hamburger_close")?.classList.add("hidden")
              document.querySelector('#nav_hamburger_menu')?.classList.add("hidden")
            } else {
              document.querySelector("#nav_hamburger_open")?.classList.add("hidden")
              document.querySelector("#nav_hamburger_close")?.classList.remove("hidden")
              document.querySelector('#nav_hamburger_menu')?.classList.remove("hidden")
            }
          })
        `}
      </Script>
    </header>
  )
}

export default Navbar
