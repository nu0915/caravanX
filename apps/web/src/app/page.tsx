function ExploreIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
      <circle cx="32" cy="32" r="24" fill="#f3e2b8" stroke="#5c4632" strokeWidth="2.5"/>
      <path d="M32 12 L37 27 L52 32 L37 37 L32 52 L27 37 L12 32 L27 27 Z"
        fill="#d97b4f" stroke="#5c4632" strokeWidth="2"/>
      <circle cx="32" cy="32" r="3" fill="#5c4632"/>
      
      {/* leaves */}
      <path d="M18 44c4-6 8-6 10 0" stroke="#6d8b5c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M46 20c-4 6-8 6-10 0" stroke="#6d8b5c" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function CampIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
      <path d="M14 46 L30 20 L46 46 Z" fill="#7d8f69" stroke="#4d5c42" strokeWidth="2.5" />
      <path d="M24 46 L34 28 L50 46 Z" fill="#91a57a" stroke="#4d5c42" strokeWidth="2.5" />
      <path d="M30 39h8v7h-8z" fill="#f0d9a5" stroke="#4d5c42" strokeWidth="2" />
      <path d="M10 50h44" stroke="#5c4632" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function NFTIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
      <rect x="10" y="16" width="44" height="30" rx="4" fill="#efc1b8" stroke="#6b4a42" strokeWidth="2.5" transform="rotate(-8 32 32)" />
      <path d="M20 34v-10l8 10v-10" stroke="#6b2f25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 24h8M37 24v10M33 29h6" stroke="#6b2f25" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M46 22v12" stroke="#6b2f25" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="38" r="2.5" fill="#6b2f25" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
      <path d="M14 18h36v28H14z" fill="#d6e1ef" stroke="#5c4632" strokeWidth="2.5" />
      <path d="M14 18l12 10 10-10 14 10" stroke="#5c4632" strokeWidth="2" />
      <path d="M20 42c10-14 18-6 24-16" stroke="#d97b4f" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" />
      <circle cx="22" cy="40" r="3" fill="#d97b4f" />
      <path d="M42 20c0 4-5 8-5 8s-5-4-5-8a5 5 0 1 1 10 0Z" fill="#d97b4f" stroke="#5c4632" strokeWidth="2" />
    </svg>
  );
}

function MomentsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
      <path d="M32 12c4 8 10 11 10 19a10 10 0 1 1-20 0c0-8 6-11 10-19Z" fill="#f2a33b" stroke="#6b4a1f" strokeWidth="2.5" />
      <path d="M31 23c2 4 5 6 5 10a5 5 0 1 1-10 0c0-4 3-6 5-10Z" fill="#ffd36a" />
      <path d="M18 46h28" stroke="#5c4632" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 50h16" stroke="#5c4632" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function OwnershipIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
      <path d="M32 10l14 16-14 28-14-28 14-16Z" fill="#7fd0f2" stroke="#3f5f73" strokeWidth="2.5" />
      <path d="M32 10v44M18 26h28M24 18l8 8 8-8" stroke="#3f5f73" strokeWidth="2" />
    </svg>
  );
  function MapRouteDecoration() {
    return (
      <svg
        viewBox="0 0 520 420"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
      >
        <path
          d="M80 320
             C120 270, 170 250, 220 270
             C280 295, 320 220, 360 170
             C395 128, 430 118, 470 80"
          className="route-dash"
          stroke="rgba(92,70,50,0.45)"
          strokeWidth="3"
          strokeLinecap="round"
        />
  
        <circle cx="82" cy="320" r="8" fill="#d97b4f" className="pin-pulse" />
        <circle cx="220" cy="270" r="7" fill="#c9a227" className="pin-pulse" />
        <circle cx="360" cy="170" r="7" fill="#c9a227" className="pin-pulse" />
        <circle cx="470" cy="80" r="9" fill="#7d8f69" className="pin-pulse" />
  
        <circle cx="82" cy="320" r="16" fill="rgba(217,123,79,0.12)" />
        <circle cx="470" cy="80" r="18" fill="rgba(125,143,105,0.14)" />
      </svg>
    );
  }
  function JourneyProgressSection() {
    function JourneyProgressSection() {
      const steps = [
        {
          title: "Rent",
          subtitle: "Book your first caravan",
          icon: "🚐",
          status: "Completed",
        },
        {
          title: "Travel",
          subtitle: "Finish your road trip",
          icon: "🗺️",
          status: "Completed",
        },
        {
          title: "Collect",
          subtitle: "Mint your journey memory",
          icon: "🎟️",
          status: "Unlocked",
        },
        {
          title: "Build",
          subtitle: "Accumulate ownership value",
          icon: "📈",
          status: "In Progress",
        },
        {
          title: "Own",
          subtitle: "Move toward shared ownership",
          icon: "🔑",
          status: "Goal",
        },
      ];
    
      return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="journey-progress">
          <div className="mb-8">
            <div className="inline-block rotate-[-3deg] bg-[#cfb082] px-5 py-2 text-xs uppercase tracking-[0.28em] shadow-md border border-black/10">
              Journey Progress
            </div>
          </div>
    
          <div className="grid lg:grid-cols-[1.45fr_0.75fr] gap-8 items-start">
            {/* Left panel */}
            <div className="relative rounded-[36px] border border-[#6b5338]/10 bg-[#fffaf1]/85 p-10 shadow-lg overflow-hidden">
              {/* faint map path background */}
              <div className="absolute inset-0 opacity-[0.09] pointer-events-none">
                <svg viewBox="0 0 900 420" className="w-full h-full">
                  <path
                    d="M70 315 C160 255, 235 180, 332 212 C430 245, 500 120, 614 145 C725 170, 780 88, 842 104"
                    stroke="#6b5338"
                    strokeWidth="4"
                    strokeDasharray="10 10"
                    fill="none"
                  />
                  <circle cx="70" cy="315" r="8" fill="#6b5338" />
                  <circle cx="332" cy="212" r="8" fill="#6b5338" />
                  <circle cx="614" cy="145" r="8" fill="#6b5338" />
                  <circle cx="842" cy="104" r="8" fill="#6b5338" />
                </svg>
              </div>
    
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Turn every trip into progress
                </h2>
    
                <p className="text-lg text-black/70 max-w-2xl mb-10 leading-relaxed">
                  CaravanX transforms real journeys into a visible path toward
                  ownership. Every rental, every memory, and every collectible
                  helps build your long-term adventure value.
                </p>
    
                <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="relative rounded-[28px] border border-[#6b5338]/12 bg-[#f4efe5] p-5 shadow-sm min-h-[280px] flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{step.icon}</div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-black/35">
                          0{index + 1}
                        </div>
                      </div>
    
                      <h3 className="text-[18px] font-semibold mb-2">{step.title}</h3>
    
                      <p className="text-[15px] leading-relaxed text-black/65 mb-6">
                        {step.subtitle}
                      </p>
    
                      <div className="mt-auto">
                        <div
                          className={`inline-block px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.22em] border ${
                            step.status === "Completed"
                              ? "bg-[#d7e4c0] border-[#9fb28c] text-[#3d5130]"
                              : step.status === "Unlocked"
                              ? "bg-[#f5d7a1] border-[#d7b26f] text-[#6a4b18]"
                              : step.status === "In Progress"
                              ? "bg-[#d0d9f5] border-[#95a5d6] text-[#31456e]"
                              : "bg-[#eadcc2] border-[#c9b290] text-[#6b5338]"
                          }`}
                        >
                          {step.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    
            {/* Right panel */}
            <div className="rounded-[36px] border border-black/10 bg-[#232323] text-white p-10 shadow-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55 mb-4">
                Ownership Meter
              </p>
    
              <h3 className="text-3xl font-bold leading-tight mb-8">
                Your dream gets closer
                <br />
                with every mile
              </h3>
    
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-white/70 mb-2">
                  <span>Current Progress</span>
                  <span>42%</span>
                </div>
    
                <div className="w-full h-5 rounded-full bg-white/15 overflow-hidden">
                  <div className="h-full w-[42%] rounded-full bg-[#d8b77f]" />
                </div>
              </div>
    
              <div className="space-y-4 text-[15px] text-white/78 mb-8">
                <div className="flex items-center justify-between">
                  <span>Trips completed</span>
                  <span>7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Journey NFTs</span>
                  <span>12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ownership credits</span>
                  <span>840</span>
                </div>
              </div>
    
              <div className="rounded-[24px] bg-white/8 border border-white/15 p-5 text-sm leading-relaxed text-white/80">
                Every completed trip, collectible memory, and loyalty milestone can
                contribute to your progression from renter to owner.
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
function JourneyProgressSection() {
  const steps = [
    {
      title: "Rent",
      subtitle: "Book your first caravan",
      icon: "🚐",
      status: "Completed",
    },
    {
      title: "Travel",
      subtitle: "Finish your road trip",
      icon: "🗺️",
      status: "Completed",
    },
    {
      title: "Collect",
      subtitle: "Mint your journey memory",
      icon: "🎟️",
      status: "Unlocked",
    },
    {
      title: "Build",
      subtitle: "Accumulate ownership value",
      icon: "📈",
      status: "In Progress",
    },
    {
      title: "Own",
      subtitle: "Move toward shared ownership",
      icon: "🔑",
      status: "Goal",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="journey-progress">
      <div className="mb-6">
        <div className="inline-block rotate-[-3deg] bg-[#d7b98e] px-4 py-2 text-xs uppercase tracking-[0.25em] shadow-md border border-black/10">
          Journey Progress
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
        {/* Left side */}
        <div className="relative rounded-[32px] border border-black/10 bg-white/60 p-8 shadow-sm overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 900 420" className="w-full h-full">
              <path
                d="M70 310 C180 250, 230 180, 330 210 C430 240, 490 110, 610 140 C720 170, 760 80, 840 100"
                stroke="#6b5338"
                strokeWidth="4"
                strokeDasharray="10 10"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Turn every trip into progress
            </h2>
            <p className="text-black/70 max-w-2xl mb-10">
              CaravanX transforms real journeys into a visible path toward
              ownership. Every rental, every memory, and every collectible
              helps build your long-term adventure value.
            </p>

            <div className="grid md:grid-cols-5 gap-4 relative">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-[24px] border border-black/10 bg-[#f8f3e8] p-4 shadow-sm min-h-[170px]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{step.icon}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-black/65 mb-4">{step.subtitle}</p>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] border ${
                      step.status === "Completed"
                        ? "bg-[#d7e4c0] border-[#9fb28c] text-[#3d5130]"
                        : step.status === "Unlocked"
                        ? "bg-[#f5d7a1] border-[#d7b26f] text-[#6a4b18]"
                        : step.status === "In Progress"
                        ? "bg-[#d0d9f5] border-[#95a5d6] text-[#31456e]"
                        : "bg-[#eadcc2] border-[#c9b290] text-[#6b5338]"
                    }`}
                  >
                    {step.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-[32px] border border-black/10 bg-[#2b2b2b] text-white p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60 mb-3">
            Ownership Meter
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Your dream gets closer
            <br />
            with every mile
          </h3>

          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-white/70 mb-2">
              <span>Current Progress</span>
              <span>42%</span>
            </div>

            <div className="w-full h-4 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full w-[42%] rounded-full bg-[#d7b98e]" />
            </div>
          </div>

          <div className="space-y-3 text-sm text-white/75 mb-6">
            <div className="flex justify-between">
              <span>Trips completed</span>
              <span>7</span>
            </div>
            <div className="flex justify-between">
              <span>Journey NFTs</span>
              <span>12</span>
            </div>
            <div className="flex justify-between">
              <span>Ownership credits</span>
              <span>840</span>
            </div>
          </div>

          <div className="rounded-[24px] bg-white/10 border border-white/10 p-4 text-sm text-white/80">
            Every completed trip, collectible memory, and loyalty milestone can
            contribute to your progression from renter to owner.
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen text-[#2b2b2b] overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#eadcc2]/85 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">CaravanX</div>

          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em]">
            <a href="#about" className="hover:opacity-60 transition">
              About
            </a>
            <a href="#how-it-works" className="hover:opacity-60 transition">
              How It Works
            </a>
            <a href="#rent-to-own" className="hover:opacity-60 transition">
              Rent to Own
            </a>
          </nav>

          <button className="rounded-full border border-black px-4 py-2 text-sm bg-white/80 hover:bg-black hover:text-white transition shadow-sm">
            Join us
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-block rotate-[-3deg] bg-[#d7b98e] px-4 py-2 text-xs uppercase tracking-[0.25em] shadow-md mb-6 border border-black/10">
              Travel X Game X Finance
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Own the Road
              <br />
              Share the Dream
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-black/75 max-w-xl mb-8">
              Rent a caravan today. Build equity on every trip.
              CaravanX turns wanderers into owners through the shared economy of adventure.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3 rounded-full bg-black text-white shadow hover:opacity-85 transition">
                Start Your Journey
              </button>
              <button className="px-6 py-3 rounded-full border border-black bg-white/70 hover:bg-black hover:text-white transition">
                List your caravan
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-black/15 bg-white/80 px-4 py-2 shadow-sm">
                Travel as Asset
              </span>
              <span className="rounded-full border border-black/15 bg-white/80 px-4 py-2 shadow-sm">
                NFT Journey
              </span>
              <span className="rounded-full border border-black/15 bg-white/80 px-4 py-2 shadow-sm">
                Ownership Growth
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative min-h-[420px] flex items-center justify-center">
            <div className="absolute -top-2 left-12 z-30 rotate-[-10deg] bg-[#7d8f69] text-white px-5 py-2 text-xs uppercase tracking-[0.25em] shadow-lg">
              Dream
            </div>

            <div className="absolute top-5 right-2 z-30 rotate-[12deg] bg-[#b8835a] text-white px-4 py-2 text-xs uppercase tracking-[0.2em] shadow-lg">
              Collect
            </div>

            <div className="absolute bottom-0 right-10 z-30 rotate-[8deg] bg-[#d0b28a] px-4 py-2 text-xs uppercase tracking-[0.2em] shadow-lg">
              Grow
            </div>

            <div className="absolute bottom-3 left-0 z-30 rotate-[-7deg] bg-white px-4 py-2 text-sm shadow-md border border-black/10">
              Grow Your Adventure into an Asset
            </div>

            <div className="relative z-10 rounded-[30px] border border-black/10 bg-[#f8f3e8] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rotate-[1deg]">
              <div className="absolute -top-3 left-10 z-20 w-16 h-6 bg-[#b89f74]/70 rotate-[-12deg] shadow-sm" />
              <div className="absolute -bottom-3 right-10 z-20 w-16 h-6 bg-[#b89f74]/70 rotate-[10deg] shadow-sm" />

              <div className="rounded-[24px] bg-white p-3 shadow-inner">
                <img
                  src="/caravan-hero.png"
                  alt="CaravanX hero illustration"
                  className="w-full max-w-[620px] rounded-[18px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticker badges */}
<section className="max-w-6xl mx-auto px-6 pb-16">
  <div className="flex flex-wrap items-center justify-center gap-8">
    {[
      ["🧭", "Explore", "#e7d3b3"],
      ["🏕️", "Camp", "#d7e4c0"],
      ["🎟️", "NFT", "#f1d0c9"],
      ["📍", "Route", "#d0d9f5"],
      ["🔥", "Moments", "#f5d7a1"],
      ["💎", "Ownership", "#e0c9f5"],
    ].map(([icon, label, color], i) => (
      <div
        key={label}
        className={`sticker w-[110px] h-[110px] flex flex-col items-center justify-center`}
        style={{
          backgroundColor: color,
          transform: `rotate(${i % 2 === 0 ? "-6deg" : "6deg"})`,
        }}
      >
        <div className="text-3xl mb-2">{icon}</div>
        <div className="text-[11px] uppercase tracking-[0.2em]">
          {label}
        </div>
      </div>
    ))}
  </div>
</section>
      
      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-6">
          <div className="inline-block rotate-[-3deg] bg-[#e7d3b3] px-4 py-2 text-xs uppercase tracking-[0.25em] shadow">
            CaravanX Story Loop
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="relative rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-sm">
            <div className="absolute -top-3 left-6 rotate-[-8deg] bg-[#7d8f69] text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] shadow">
              Step 01
            </div>
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-2xl font-semibold mb-3">Rent the Adventure</h3>
            <p className="leading-relaxed text-black/75">
              Begin with a real caravan trip. Choose a route, invite friends,
              and enjoy a playful, memorable travel experience
            </p>
          </article>

          <article className="relative rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-sm">
            <div className="absolute -top-3 left-6 rotate-[6deg] bg-[#b8835a] text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] shadow">
              Step 02
            </div>
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-semibold mb-3">Collect the Journey</h3>
            <p className="leading-relaxed text-black/75">
              Each trip becomes part of your growing collection — story-rich,
              memorable, and designed to feel rewarding over time
            </p>
          </article>

          <article className="relative rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-sm">
            <div className="absolute -top-3 left-6 rotate-[-5deg] bg-[#d0b28a] px-3 py-1 text-[10px] uppercase tracking-[0.2em] shadow">
              Step 03
            </div>
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-semibold mb-3">Grow into Ownership</h3>
            <p className="leading-relaxed text-black/75">
              Repeated journeys build emotional value and ownership progress —
              turning travel into a long-term asset experience
            </p>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 p-8 shadow-sm">
          <p className="uppercase tracking-[0.2em] text-sm mb-3 opacity-70">
            Explorer Path
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            A playful path from experience to ownership
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="rounded-[24px] bg-[#f8f3e8] border border-black/10 p-5 text-center shadow-sm">
              <div className="text-3xl mb-3">🚐</div>
              <h3 className="font-semibold mb-2">Choose</h3>
              <p className="text-sm text-black/70">
                Pick a caravan and set out on a new story
              </p>
            </div>

            <div className="rounded-[24px] bg-[#f8f3e8] border border-black/10 p-5 text-center shadow-sm">
              <div className="text-3xl mb-3">🌄</div>
              <h3 className="font-semibold mb-2">Travel</h3>
              <p className="text-sm text-black/70">
                Enjoy scenic journeys, campfires, and shared moments
              </p>
            </div>

            <div className="rounded-[24px] bg-[#f8f3e8] border border-black/10 p-5 text-center shadow-sm">
              <div className="text-3xl mb-3">🎫</div>
              <h3 className="font-semibold mb-2">Unlock</h3>
              <p className="text-sm text-black/70">
                Gain progression markers and collectible journey rewards
              </p>
            </div>

            <div className="rounded-[24px] bg-[#f8f3e8] border border-black/10 p-5 text-center shadow-sm">
              <div className="text-3xl mb-3">⛰️</div>
              <h3 className="font-semibold mb-2">Own</h3>
              <p className="text-sm text-black/70">
                Move closer to shared ownership with every meaningful trip
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rent to own */}
      <section id="rent-to-own" className="max-w-6xl mx-auto px-6 pt-4 pb-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-[30px] bg-[#2b2b2b] text-white p-8 shadow-xl overflow-hidden">
            <p className="uppercase tracking-[0.2em] text-sm mb-3 text-white/70">
              Why it matters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not just a trip
              <br />A growing travel asset
            </h2>
            <p className="leading-relaxed text-white/80">
              CaravanX blends physical caravan adventures, collectible digital
              memories, and the dream of ownership into one story-driven
              experience. It makes travel feel emotional, rewarding, and worth
              growing over time.
            </p>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-white/80 p-8 shadow-sm">
            <div className="inline-block rotate-[3deg] bg-[#e7d3b3] px-4 py-2 text-xs uppercase tracking-[0.2em] shadow mb-5">
              Core Ideas
            </div>

            <ul className="space-y-4 text-lg leading-relaxed">
              <li>• Real-world travel with game-like progression</li>
              <li>• Story-rich collectible journey memories</li>
              <li>• Emotional path toward ownership growth</li>
              <li>• A caravan marketplace with dream-building value</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}