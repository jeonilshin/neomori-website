import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./head-styles.css";

export const metadata: Metadata = {
  title: "Neo Mori Tech — Hospitality Management Systems | tabOS Digital Ordering",
  description:
    "Neo Mori Tech Information Solutions Corp. provides innovative hospitality management systems and digital ordering solutions for restaurants in Davao. Specializing in tabOS technology for seamless operations.",
  openGraph: {
    title: "Neo Mori Tech — Hospitality Management Systems | tabOS Digital Ordering",
    description:
      "Neo Mori Tech Information Solutions Corp. provides innovative hospitality management systems and digital ordering solutions for restaurants in Davao. Specializing in tabOS technology for seamless operations.",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="w-mod-js"
      data-wf-domain="www.joinimmediate.com"
      data-wf-page="66a7a63e1e34a58610234fea"
      data-wf-site="66a7a63e1e34a58610234fe4"
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.prod.website-files.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/webflow.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </head>
      <body className="body">
        {children}

        {/* Webflow runtime + jQuery */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66a7a63e1e34a58610234fe4"
          strategy="beforeInteractive"
        />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-init" strategy="beforeInteractive">
          {`WebFont.load({google:{families:["Montserrat:100,200,300,400,500,600,700,800,900","Inter:300,400,500,600,700"]}});`}
        </Script>
        <Script
          src="https://cdn.prod.website-files.com/66a7a63e1e34a58610234fe4/js/webflow.schunk.36b8fb49256177c8.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/66a7a63e1e34a58610234fe4/js/webflow.schunk.340f2518f2221e73.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/66a7a63e1e34a58610234fe4/js/webflow.2dfcef1d.dfc8572ff42d30c6.js"
          strategy="afterInteractive"
        />

        {/* Smooth scroll, slider, animation libs */}
        <Script
          src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1/bundled/lenis.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/63b32ef2fea62427aea31a43/63b3342556d1442bfd40d840_SplitText.min.txt"
          strategy="afterInteractive"
        />
        <Script id="lenis-init" strategy="afterInteractive">
          {`(function(){function start(){if(!window.Lenis||!window.Webflow||!window.jQuery){return setTimeout(start,50);}if(window.Webflow.env("editor")!==undefined)return;var $=window.jQuery;var lenis=new window.Lenis({lerp:0.1,wheelMultiplier:0.5,infinite:false,gestureOrientation:"vertical",normalizeWheel:false,smoothTouch:false});function raf(t){lenis.raf(t);requestAnimationFrame(raf);}requestAnimationFrame(raf);$("[data-lenis-start]").on("click",function(){lenis.start();});$("[data-lenis-stop]").on("click",function(){lenis.stop();});$("[data-lenis-toggle]").on("click",function(){$(this).toggleClass("stop-scroll");if($(this).hasClass("stop-scroll")){lenis.stop();}else{lenis.start();}});window.__lenis=lenis;}start();})();`}
        </Script>
        <Script id="heading-reveal" strategy="afterInteractive">
          {`(function(){function start(){if(!window.gsap||!window.ScrollTrigger||!window.SplitText){return setTimeout(start,50);}window.gsap.registerPlugin(window.SplitText,window.ScrollTrigger);function animateText(sel,delay){window.gsap.utils.toArray(sel).forEach(function(el){var child=new window.SplitText(el,{type:"lines",linesClass:"split-child"});new window.SplitText(el,{linesClass:"split-parent"});window.gsap.from(child.lines,{scrollTrigger:{trigger:el,start:"top 80%"},duration:1.7,ease:"power3.out",y:40,opacity:0,stagger:0.1,delay:delay});});}window.addEventListener("DOMContentLoaded",function(){animateText(".h1, .subtitle",1);animateText(".h2",0);});if(document.readyState!=="loading"){animateText(".h1, .subtitle",1);animateText(".h2",0);}}start();})();`}
        </Script>
        <Script id="tab-hover" strategy="afterInteractive">
          {`(function(){function start(){if(!window.jQuery){return setTimeout(start,50);}window.jQuery(".tab_link").hover(function(){window.jQuery(this).click();});}start();})();`}
        </Script>
        <Script id="nav-hide-on-scroll" strategy="afterInteractive">
          {`(function(){function start(){var header=document.querySelector(".header");if(!header){return setTimeout(start,80);}var hidden=false;var lastY=window.scrollY||window.pageYOffset||0;var topThreshold=80;var deltaThreshold=6;function setHidden(v){if(v===hidden)return;hidden=v;header.classList.toggle("is-hidden",v);}function update(y){if(y<topThreshold){setHidden(false);lastY=y;return;}var d=y-lastY;if(d>deltaThreshold){setHidden(true);lastY=y;}else if(d<-deltaThreshold){setHidden(false);lastY=y;}}function fromLenis(e){update(e.scroll||0);}function fromWindow(){update(window.scrollY||window.pageYOffset||0);}window.addEventListener("scroll",fromWindow,{passive:true});var attached=false;function attachLenis(){if(attached)return true;if(window.__lenis&&window.__lenis.on){window.__lenis.on("scroll",fromLenis);attached=true;return true;}return false;}if(!attachLenis()){var tryUntil=Date.now()+5000;var iv=setInterval(function(){if(attachLenis()||Date.now()>tryUntil)clearInterval(iv);},120);}}start();})();`}
        </Script>
        <Script
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://weblocks.io/library.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://weblocks.io/script-66-529.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/countup@1.8.2/countUp.js"
          strategy="afterInteractive"
        />
        <Script id="countup-init" strategy="afterInteractive">
          {`(function(){function start(){if(!window.jQuery||!window.CountUp||!window.ScrollTrigger){return setTimeout(start,80);}var $=window.jQuery;$(".counterup").each(function(i){var id="countup"+i;$(this).attr("id",id);var s=+$(this).text();var e=+$(this).attr("final-number");var dur=$(this).attr("count-duration");var c=new window.CountUp(id,s,e,0,dur);window.ScrollTrigger.create({trigger:this,start:"top bottom",end:"bottom top",onLeaveBack:function(){c.reset();}});window.ScrollTrigger.create({trigger:this,start:"top 80%",end:"bottom top",onEnter:function(){c.start();}});});}start();})();`}
        </Script>
      </body>
    </html>
  );
}
