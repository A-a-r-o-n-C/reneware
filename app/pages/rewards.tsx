import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import foodPic from "public/victoria-shes-UC0HZdUitWY-unsplash.jpg"
import yogaPic from "public/alina-chernysheva-JA2S6sJWleg-unsplash.jpg"
import giftPic from "public/tetiana-shadrina-BgDvAapofe0-unsplash.jpg"
import concertPic from "public/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg"
import parkPic from "public/thomas-stadler-r6LQc9feEZQ-unsplash.jpg"
import forestPic from "public/karsten-winegeart-sStahKEhT9w-unsplash.jpg"

const Rewards: BlitzPage = () => {
  return (
    <div className="mx-auto ">
      <main>
        {/* Rewards */}
        <section className="relative w-full">
          <div className="absolute w-full h-32"></div>
          <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
            <h1 className="mb-1 text-4xl font-extrabold text-center leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
              <a href="#_">Rewards Center</a>
            </h1>
            <p className="text-lg font-medium text-center text-gray-500 sm:text-2xl">
              You&apos;ve earned it.
            </p>
            <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
              <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-4 xl:col-span-4">
                <a
                  href="#_"
                  className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                >
                  <Image alt="food" src={foodPic} />
                </a>
                <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                  <a
                    href="#_"
                    className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
                  >
                    Food & Drink
                  </a>
                  <h2 className="mb-5 text-5xl font-bold">
                    <a href="#_">Five Star Restaurants </a>
                  </h2>
                  <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
                    Receive a free dinner for two at your choice of restaurant in the city. Book
                    your reservation now.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-4 xl:col-span-4">
                <a
                  href="#_"
                  className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                >
                  <Image alt="treadmills" src={yogaPic} />
                </a>
                <div className="relative z-20 w-full h-auto py-8 text-white bg-green-500 border-t-0 border-yellow-200 px-7">
                  <a
                    href="#_"
                    className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white"
                  >
                    Lifestyle
                  </a>
                  <h2 className="mb-5 text-5xl font-bold">
                    <a href="#_">Health and Wellness</a>
                  </h2>
                  <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">
                    Receive a month of free classes at any participating gym. Free workout gear
                    included.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-4 xl:col-span-4">
                <a
                  href="#_"
                  className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                >
                  <Image alt="giftcards" src={giftPic} />
                </a>
                <div className="relative z-20 w-full h-auto py-8 text-white bg-yellow-700 border-t-0 border-yellow-200 px-7">
                  <a
                    href="#_"
                    className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white"
                  >
                    Gift Cards
                  </a>
                  <h2 className="mb-5 text-5xl font-bold">
                    <a href="#_">$100 Gift Card</a>
                  </h2>
                  <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">
                    Get a $100 gift card for any participating retailer. Restrictions apply.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 gap-7">
                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                  <a
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110"
                  >
                    <Image alt="concert" src={concertPic} />
                  </a>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                    <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                      <span>Experiences</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl">
                      <a href="#_">Live Concerts</a>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Experience live music with front-row seats to any concert in town.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                  <a
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110"
                  >
                    <Image alt="amusementpark" src={parkPic} />
                  </a>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                    <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                      <span>Experiences</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl">
                      <a href="#_">Amusement Parks</a>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Two-day passes to any amusement park in the GTA area.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                  <a
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110"
                  >
                    <Image alt="forestcabin" src={forestPic} />
                  </a>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                    <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                      <span>Getaways</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl">
                      <a href="#_">Find Your Escape</a>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Tickets for two at any Airbnb location in Ontario. Restrictions apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

Rewards.suppressFirstRenderFlicker = true
Rewards.getLayout = (page) => <Layout title="Rewards - Reneware">{page}</Layout>

export default Rewards
