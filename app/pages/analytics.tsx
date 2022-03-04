import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import graphPic from "public/Site-Traffic-Line-Graph-Square (3).jpg"
import projectionPic from "public/Cyber-Security-Bar-Graph-Square (3).jpg"

const Analytics: BlitzPage = () => {
  return (
    <div className="container max-w-7xl mx-auto items-center">
      <main>
        {/* <!-- Section 1 --> */}
        <section className="w-full  pt-7 pb-7 md:pt-20 md:pb-24">
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
            {/* <!-- Image --> */}
            <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <Image alt="recyclinggraph" src={projectionPic} />
            </div>

            {/* <!-- Content --> */}
            <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Monitor Recycling
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                We keep track of every donation. Our metrics will help determine the impact of
                consumer recycling and monitor device statistics for more accountability.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-600 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Maximize recycling efficiency
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-600 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Distribute devices equally throughout communities
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-600 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Fine-tune the recycling ecosystem with extensive data collection
                </li>
              </ul>
            </div>
            {/* <!-- End  Content --> */}
          </div>
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
            {/* <!-- Content --> */}
            <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32 mr-5">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Build A Better Internet
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Create the building blocks of our new internet on recycled technology. Lower the
                environmental costs of emerging technologies by repurposing older devices.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-600 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Eco-friendly network space for Blockchain and DeFi
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-600 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Low-cost compute power for schools, researchers, and hobbyists
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-600 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Distributed systems do not require individual devices to be powerful
                </li>
              </ul>
            </div>
            {/* <!-- End  Content --> */}

            {/* <!-- Image --> */}
            <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <Image alt="bargraph" src={graphPic} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

Analytics.suppressFirstRenderFlicker = true
Analytics.getLayout = (page) => <Layout title="Analytics - Reneware">{page}</Layout>

export default Analytics
