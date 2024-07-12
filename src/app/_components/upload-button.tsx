'use client'

import { UploadButton } from "@/lib/utils/uploadthing"
import { useRouter } from "next/navigation"


export function UploadImageButton() {
    const router = useRouter()
    return <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => {
            router.refresh()
        }}
    />
}