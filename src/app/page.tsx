export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{
        __html: `
          function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            reveals.forEach((reveal) => {
              var windowHeight = window.innerHeight;
              var elementTop = reveal.getBoundingClientRect().top;
              var elementVisible = 150;
              if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
              }
            });
          }
          window.addEventListener("scroll", reveal);
          reveal(); // Call once to check for elements in view on load
        `
      }} />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900/10 to-gray-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <a 
              href="https://store.mitsu.gg/volex/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg hover-glow font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Store
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-24 pb-20">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 animate-float">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-10 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-white to-emerald-400 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-900">V</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-300 to-white mb-6 text-glow">
              Welcome to Volex
            </h1>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              A New Era of Minecraft Begins
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl inline-block backdrop-blur-sm border border-white/10 hover-glow">
                <p className="text-2xl font-mono text-white">IP: 142.132.250.48:50026</p>
              </div>
              <div className="flex justify-center gap-6">
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl hover-glow font-semibold">
                  Version: 1.20+
                </button>
                <a 
                  href="https://discord.gg/Ysxs2rQSWv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] text-white px-8 py-4 rounded-xl hover-glow font-semibold flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Particles */}
        <section className="relative bg-white/5 py-20 overflow-hidden reveal">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
              What is Volex?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white/80 text-center leading-relaxed">
                Volex isn't just another Minecraft server. It's a custom-powered world where your abilities evolve, 
                battles feel intense, and every moment pushes your limits. Our exclusive plugin introduces unique powers, 
                tiered abilities, and dynamic combat mechanics—completely changing how you experience Minecraft.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
        </section>

        {/* Powers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300 reveal">
              Custom Powers. Unique Playstyles.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Berserker',
                  description: 'Rage-fueled strength at the cost of control.',
                  icon: '⚔️',
                  color: 'from-red-500 to-red-700',
                },
                {
                  title: 'Shadow',
                  description: 'Vanish in darkness, strike without warning.',
                  icon: '🌑',
                  color: 'from-gray-600 to-gray-800',
                },
                {
                  title: 'Frost',
                  description: 'Freeze foes and slow time around you.',
                  icon: '❄️',
                  color: 'from-blue-400 to-blue-600',
                },
                {
                  title: 'Bloodthirst',
                  description: 'Heal through combat and dominate the battlefield.',
                  icon: '🩸',
                  color: 'from-red-600 to-purple-700',
                },
                {
                  title: 'Wind',
                  description: 'Harness the power of the air.',
                  icon: '💨',
                  color: 'from-teal-400 to-teal-600',
                },
                {
                  title: 'More Coming Soon',
                  description: 'New powers are being forged...',
                  icon: '✨',
                  color: 'from-emerald-400 to-white',
                },
              ].map((power, index) => (
                <div
                  key={index}
                  className={`group hover-glow reveal reveal-delay-${index % 3 + 1}`}
                >
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm 
                               transition-all duration-300 group-hover:bg-white/10">
                    <div className={`text-5xl mb-4 bg-gradient-to-br ${power.color} w-16 h-16 rounded-lg 
                                  flex items-center justify-center shadow-lg`}>
                      {power.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{power.title}</h3>
                    <p className="text-white/70">{power.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white/5 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300 reveal">
              A Server Like No Other
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Custom-coded plugin',
                  description: 'Built from scratch for next-gen gameplay',
                  icon: '🔧',
                },
                {
                  title: 'PvE and PvP-friendly',
                  description: 'Choose your fight style',
                  icon: '🎮',
                },
                {
                  title: 'Java & Bedrock support',
                  description: 'Everyone can play',
                  icon: '🌐',
                },
                {
                  title: 'Lag-free experience',
                  description: 'Optimized hosting with top-tier security',
                  icon: '🛡️',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`hover-glow reveal reveal-delay-${index + 1}`}
                >
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="text-4xl mb-4 bg-gradient-to-br from-white to-emerald-400 w-14 h-14 
                                 rounded-lg flex items-center justify-center shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-12 text-center overflow-hidden reveal">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-white">Join the Adventure</h2>
              <p className="text-xl mb-8 text-white/90">
                Whether you're here to grind, build, explore, or fight—Volex offers an experience you won't find anywhere else.
              </p>
              <div className="space-y-6">
                <div className="bg-black/20 p-4 rounded-xl inline-block backdrop-blur-sm border border-white/10">
                  <p className="text-xl font-mono text-white">IP: 142.132.250.48:50026</p>
                </div>
                <div>
                  <a 
                    href="https://discord.gg/Ysxs2rQSWv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover-glow inline-block font-semibold"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
          </div>
        </section>
      </div>
    </>
  )
} 