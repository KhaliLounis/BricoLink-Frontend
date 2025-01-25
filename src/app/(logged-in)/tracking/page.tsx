import Image from "next/image"
import { Heart, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketplacePage() {
  return (
    <div className="container py-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Hey Jino,</h1>
        <Tabs defaultValue="offers" className="w-[200px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="offers" className="bg-[#6E56CF] text-white data-[state=active]:bg-[#6E56CF]/80">
              Offers
            </TabsTrigger>
            <TabsTrigger value="requests" className="data-[state=active]:bg-muted">
              Requests
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Continue Browsing Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Continue browsing</h2>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              ‹
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              ›
            </Button>
          </div>
        </div>

      </div>

      {/* Most Popular Gigs Section */}
      <div>
        <h2 className="text-lg font-medium mb-4">Most popular Gigs in App Design</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <GigCard key={i} />
          ))}
        </div>
      </div>

      {/* Gigs You May Like Section */}
      <div>
        <h2 className="text-lg font-medium mb-4">Gigs you may like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <GigCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function GigCard() {
  return (
    <div className="w-[220px] rounded-lg border bg-card text-card-foreground shadow">
      <div className="relative">
        <div className="absolute top-2 left-2 z-20 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-xs text-white font-medium">username99</span>
        </div>
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 z-20 h-8 w-8 bg-white/20 hover:bg-white/40 text-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
          <Image
            src="/placeholder.svg"
            alt="Gig preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-3 space-y-2">
        <h3 className="text-sm font-medium leading-tight">
          I will design UI UX for mobile app with figma for ios
        </h3>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">4.8</span>
        </div>
        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">Starting at</p>
          <p className="font-medium">$67.00</p>
        </div>
      </div>
    </div>
  )
}

