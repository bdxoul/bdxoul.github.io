import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';

const socialLinks = [
  { name: 'Buymemomo', url: 'https://buymemomo.com/bdxoul' },
  { name: 'Twitter', url: 'https://twitter.com/iambdxoul' },
  { name: 'INSTAGRAM', url: 'https://instagram.com/bdxoul' },
  { name: 'Medium', url: 'https://medium.com/@iambdxoul' },
  { name: 'Youtube', url: 'https://www.youtube.com/channel/UC8O49-sXbEJ6YDJeu2LDKqw' },
  { name: 'Telegram', url: 'https://telegram.me/bdxoul' },
  { name: 'LinkedIN', url: 'https://www.linkedin.com/in/bdxoul' },
  { name: 'xDA', url: 'https://forum.xda-developers.com/m/bdxoul.6738139/' },
  { name: 'Deviantart', url: 'https://bdxoul.deviantart.com/' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/iambdxoul' },
  { name: 'BLOG', url: 'https://bdxoul.wordpress.com/' },
];

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(avatarRef.current, { opacity: 0, scale: 0.8, y: 30 });
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set(linksRef.current?.children || [], { opacity: 0, y: 30 });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(avatarRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.3')
      .to(linksRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out'
      }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full retro-bg">
      <div className="scanlines" />
      
      <main className="min-h-screen flex flex-col items-center justify-start px-4 py-12 md:py-16">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          
          <div ref={avatarRef} className="relative mb-6">
            <div className="avatar-container">
              <img src="/profile.jpg" alt="BDXOUL" className="avatar-image" />
            </div>
            <div className="avatar-glow" />
          </div>

          <h1 ref={titleRef} className="retro-title mb-8">
            BDXOUL
          </h1>

          <div ref={linksRef} className="w-full flex flex-col items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
