import { Heart } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-[#050816]">
      <div className="container-max py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/40">
            &copy; {currentYear} Muhammad Abdul Aleem. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-white/40">
            Built with
            <Heart size={14} className="text-purple-400 fill-purple-400" />
            using React, TypeScript & Tailwind
          </div>
        </div>
      </div>
    </footer>
  )
}
