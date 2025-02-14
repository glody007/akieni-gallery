import Link from "next/link"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/utils/uploadthing";
import { UploadImageButton } from "./_components/upload-button";

export const dynamic = 'force-dynamic'

export default async function Component() {

  const posts = await db.post.findMany();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b shadow-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-20 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CameraIcon className="w-6 h-6" />
            <span className="font-medium text-lg">Photo Gallery</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Explore
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Profile
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <SignedIn>
              <div className="flex items-center gap-2">
                <UploadImageButton />
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>

        </div>
      </header>
      <main className="flex-1 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
        {posts.map((post) => (
          <Link key={post.id} href="#" className="group relative overflow-hidden rounded-lg">
            <img
              src={post.pictureUrl}
              width={400}
              height={400}
              alt="Photo"
              className="w-full h-60 object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-sm font-medium">{post.pictureUrl}</div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  )
}

function CameraIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}