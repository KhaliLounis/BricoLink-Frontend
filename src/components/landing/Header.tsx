import Link from "next/link"
import { Bell, Heart, MessageCircle, Search, ShoppingBag, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const categories = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Photography",
    "Business"
  ]

  return (
    <header className="w-full bg-[#6E56CF]">
      {/* Main Header */}
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Bricolink
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input 
                placeholder="Search For Freelancers Or Services" 
                className="pr-12 bg-white"
              />
              <Button 
                size="icon" 
                className="absolute right-0 top-0 h-full bg-[#4C9EEB] hover:bg-[#4C9EEB]/90 text-white rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Side Icons & Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <MessageCircle className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Order
            </Button>

            <Button variant="secondary" className="gap-2">
              <User className="h-4 w-4" />
              Buyer
            </Button>

            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Become an Artisan Button */}
        <Button 
          className="mt-3 bg-[#8B7BE0] hover:bg-[#8B7BE0]/90 text-white"
        >
          Become an artisan
        </Button>
      </div>

      {/* Categories Navigation */}
      <div className="border-t border-white/20">
        <div className="container">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {categories.map((category) => (
                <NavigationMenuItem key={category}>
                  <Link 
                    href="#" 
                    className="text-sm text-white/90 hover:text-white py-3 block transition-colors"
                  >
                    {category}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}

