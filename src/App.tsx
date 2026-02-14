import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Music,
  PenTool,
  MessageCircle,
  ShoppingBag,
  Code,
  ExternalLink,
  Sparkles,
  Star
} from 'lucide-react';
import './App.css';

const socialLinks = [
  { name: 'Buymemomo', url: 'https://buymemomo.com/bdxoul', icon: ShoppingBag },
  { name: 'Twitter', url: 'https://twitter.com/iambdxoul', icon: Twitter },
  { name: 'Instagram', url: 'https://instagram.com/bdxoul', icon: Instagram },
  { name: 'Medium', url: 'https://medium.com/@iambdxoul', icon: PenTool },
  { name: 'Youtube', url: 'https://www.youtube.com/channel/UC8O49-sXbEJ6YDJeu2LDKqw', icon: Youtube },
  { name: 'Telegram', url: 'https://telegram.me/bdxoul', icon: MessageCircle },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bdxoul', icon: Linkedin },
  { name: 'xDA', url: 'https://forum.xda-developers.com/m/bdxoul.6738139/', icon: Code },
  { name: 'Deviantart', url: 'https://bdxoul.deviantart.com/', icon: ExternalLink },
  { name: 'SoundCloud', url: 'https://soundcloud.com/iambdxoul', icon: Music },
  { name: 'BLOG', url: 'https://bdxoul.wordpress.com/', icon: ExternalLink },
];

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const decorRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(profileRef.current, { opacity: 0, scale: 0.65, rotate: -12, x: '-12vw' });
      gsap.set(headlineRef.current, { opacity: 0, x: '18vw', rotate: 6 });
      gsap.set(taglineRef.current, { opacity: 0, y: '-6vh', rotate: -4 });
      gsap.set(ctaRef.current, { opacity: 0, scale: 0.85, y: '6vh' });
      gsap.set(linksRef.current?.children || [], { opacity: 0, x: '10vw', rotate: 6 });
      gsap.set(decorRefs.current.filter(Boolean), { opacity: 0, scale: 0.5 });

      // Entrance animation timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(profileRef.current, {
        opacity: 1,
        scale: 1,
        rotate: 0,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .to(headlineRef.current, {
        opacity: 1,
        x: 0,
        rotate: -2,
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.5')
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        rotate: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .to(ctaRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.6)'
      }, '-=0.3')
      .to(linksRef.current?.children || [], {
        opacity: 1,
        x: 0,
        rotate: (i) => (i % 2 === 0 ? -1 : 1),
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out'
      }, '-=0.2')
      .to(decorRefs.current.filter(Boolean), {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.3');

      // Floating animation for decorative elements
      decorRefs.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: '+=6',
            duration: 3.2 + i * 0.3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full scanlines relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1B0A2E] via-[#2A0F45]/50 to-[#1B0A2E] pointer-events-none" />
      
      {/* Decorative stars */}
      <div 
        ref={el => { decorRefs.current[0] = el; }}
        className="fixed left-[6vw] top-[12vh] z-10"
      >
        <div className="sticker sticker-sm p-3 rounded-full">
          <Star className="w-5 h-5 text-[#39FF14]" />
        </div>
      </div>
      
      <div 
        ref={el => { decorRefs.current[1] = el; }}
        className="fixed right-[8vw] bottom-[15vh] z-10"
      >
        <div className="sticker sticker-sm p-2 rounded-full float-animation">
          <Sparkles className="w-4 h-4 text-[#39FF14]" />
        </div>
      </div>

      <div 
        ref={el => { decorRefs.current[2] = el; }}
        className="fixed left-[10vw] bottom-[10vh] z-10 hidden md:block"
      >
        <div className="sticker sticker-sm px-3 py-2 rounded-full">
          <span className="text-[#39FF14] text-xs font-display font-bold">LINKS</span>
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex items-center justify-center px-4 py-8 md:py-0">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left side - Profile */}
            <div className="flex flex-col items-center lg:items-start">
              <div 
                ref={profileRef}
                className="relative"
              >
                <div className="scalloped w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[34vw] lg:h-[34vw] lg:max-w-[420px] lg:max-h-[420px] rounded-full overflow-hidden sticker p-1">
                  <img 
                    src="/profile.jpg" 
                    alt="BDXOUL" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Decorative ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-[#39FF14]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col items-center lg:items-start space-y-4 md:space-y-6">
              {/* Headline */}
              <div 
                ref={headlineRef}
                className="sticker px-6 py-4 md:px-10 md:py-6 rounded-2xl transform -rotate-2"
              >
                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F6F1FF] uppercase tracking-wider neon-glow italic">
                  BDXOUL
                </h1>
              </div>

              {/* Tagline */}
              <div 
                ref={taglineRef}
                className="sticker sticker-sm px-4 py-2 md:px-6 md:py-3 rounded-xl transform rotate-1"
              >
                <p className="text-[#C9B8E0] text-sm md:text-base font-medium tracking-wide">
                  Creator • Beats • Design
                </p>
              </div>

              {/* Primary CTA */}
              <a 
                ref={ctaRef}
                href="https://buymemomo.com/bdxoul"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button px-8 py-4 rounded-full text-base md:text-lg font-display transform rotate-1 mt-4"
              >
                Shop Beats
              </a>

              {/* Social Links Grid */}
              <div 
                ref={linksRef}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 w-full max-w-md lg:max-w-none mt-6"
              >
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-chip flex items-center gap-2 md:gap-3 px-3 py-2.5 md:px-4 md:py-3 rounded-full transform"
                      style={{ 
                        transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                      }}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#39FF14] flex-shrink-0" />
                      <span className="text-[#F6F1FF] text-xs md:text-sm font-semibold truncate">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile wordmark */}
      <div className="fixed bottom-4 left-4 z-30 lg:hidden">
        <div className="sticker sticker-sm px-3 py-1.5 rounded-full">
          <span className="text-[#39FF14] text-xs font-display font-bold">BDXOUL</span>
        </div>
      </div>
    </div>
  );
}

export default App;
