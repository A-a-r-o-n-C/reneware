import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"

const Rewards: BlitzPage = () => {
  return (
    <div className="container max-w-7xl mx-auto items-center">
      <main></main>
    </div>
  )
}

Rewards.suppressFirstRenderFlicker = true
Rewards.getLayout = (page) => <Layout title="Rewards - Reneware">{page}</Layout>

export default Rewards