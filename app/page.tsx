'use client'

import { useState } from "react"
import Hyperspeed from "../components/Hyperspeed"
import CountdownTimer from "../components/CountdownTimer"
import WaitlistDialog from "../components/WaitlistDialog"

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Hyperspeed Background Layer */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{"distortion":"LongRaceDistortion","length":400,"roadWidth":10,"islandWidth":5,"lanesPerRoad":2,"fov":90,"fovSpeedUp":150,"speedUp":2,"carLightsFade":0.4,"totalSideLightSticks":50,"lightPairsPerRoadWay":70,"shoulderLinesWidthPercentage":0.05,"brokenLinesWidthPercentage":0.1,"brokenLinesLengthPercentage":0.5,"lightStickWidth":[0.12,0.5],"lightStickHeight":[1.3,1.7],"movingAwaySpeed":[60,80],"movingCloserSpeed":[-120,-160],"carLightsLength":[20,60],"carLightsRadius":[0.05,0.14],"carWidthPercentage":[0.3,0.5],"carShiftX":[-0.2,0.2],"carFloorSeparation":[0.05,1],"colors":{"roadColor":526344,"islandColor":657930,"background":0,"shoulderLines":1250072,"brokenLines":1250072,"leftCars":[16736115,15158624,16715818],"rightCars":[10806246,8442324,5489350],"sticks":10806246}}}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 max-w-4xl w-full px-2 sm:px-4">
          
          {/* Coming Soon Typography */}
          <div className="text-center space-y-2 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-tight">
              Coming Soon
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light tracking-wide px-4">
              Something extraordinary is launching
            </p>
          </div>

          {/* Minimal Countdown Timer */}
          <CountdownTimer />

          {/* Join Waitlist Button */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 font-semibold text-base sm:text-lg rounded-full hover:bg-zinc-100 transition-all duration-200 w-auto min-w-[200px]"
          >
            Join the Waitlist
          </button>
        </div>
      </div>

      {/* Waitlist Dialog */}
      <WaitlistDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
}
