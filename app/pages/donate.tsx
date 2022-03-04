import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"

const Donate: BlitzPage = () => {
  return (
    <div className="container max-w-7xl mx-auto items-center">
      <main>
        {/* Device Selector*/}
        <section className="py-10 sm:py-10">
          <div className="max-w-7xl px-10 mx-auto sm:text-center">
            <p className="text-green-600 text-xl uppercase">DONATE TODAY</p>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">
              Select A Category For Donation
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">
              We accept a variety of different electronics.
              <br className="lg:hidden hidden sm:block" /> Take a look!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-smartphone"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <p className="font-bold mt-4">Mobile Phones</p>
                <p className="mt-2 text-sm text-gray-500">Apple, Samsung, etc.</p>
              </div>
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-cpu"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
                <p className="font-bold mt-4">Laptops</p>
                <p className="mt-2 text-sm text-gray-500">Any condition</p>
              </div>
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-hard-drive"
                >
                  <line x1="22" y1="12" x2="2" y2="12"></line>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  <line x1="6" y1="16" x2="6.01" y2="16"></line>
                  <line x1="10" y1="16" x2="10.01" y2="16"></line>
                </svg>
                <p className="font-bold mt-4">Desktops</p>
                <p className="mt-2 text-sm text-gray-500">2010 or newer</p>
              </div>
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-monitor"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <p className="font-bold mt-4">TVs, Monitors</p>
                <p className="mt-2 text-sm text-gray-500">Any condition</p>
              </div>
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-printer"
                >
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                <p className="font-bold mt-4">Office Equipment</p>
                <p className="mt-2 text-sm text-gray-500">Printers, scanners, etc.</p>
              </div>
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-columns"
                >
                  <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                </svg>
                <p className="font-bold mt-4">Tablets</p>
                <p className="mt-2 text-sm text-gray-500">Apple, Samsung, etc.</p>
              </div>
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-tv"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
                <p className="font-bold mt-4">Old Electronics</p>
                <p className="mt2 text-sm text-gray-500">CRT displays, radios, etc.</p>
              </div>
              <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-settings"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <p className="font-bold mt-4">Miscellaneous</p>
                <p className="mt-2 text-sm text-gray-500">Lights, wires, peripherals, etc.</p>
              </div>
            </div>
            <a
              href="#_"
              className="px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500"
            >
              View All Categories
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

Donate.suppressFirstRenderFlicker = true
Donate.getLayout = (page) => <Layout title="Donate - Reneware">{page}</Layout>

export default Donate
