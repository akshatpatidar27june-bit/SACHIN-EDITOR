import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play, MoveUpRight } from "lucide-react";
import { Shell, SectionLabel } from "./components";
const services=["Wedding Films","Pre-Wedding Stories","Cinematic Reels","Travel & Lifestyle"];
export default function Home(){
 return <Shell>
  <main>
   <section className="hero">
    <iframe className="hero-3d-background" src="/cine-rig-background-clean.html" title="Animated 3D cinema camera rig background" aria-hidden="true" tabIndex={-1}/>
    <div className="hero-grid"></div><div className="hero-shade"></div>
    <div className="hero-content"><div className="eyebrow light"><span/> INDEPENDENT FILMMAKER · MANDSAUR, INDIA</div>
     <p className="hero-kicker">EVERY FRAME HAS A FEELING.</p><h1>Life happens.<br/><em>We make it</em> <span>cinematic.</span></h1>
     <p className="hero-copy">Wedding cinematography, films and visual stories shaped around the moments that matter.</p>
     <div className="hero-actions"><Link className="button button-light" href="/portfolio">EXPLORE THE WORK <ArrowUpRight size={16}/></Link><Link className="text-link" href="/contact">PLAN YOUR FILM <MoveUpRight size={16}/></Link></div>
    </div><div className="hero-bottom"><span>SCROLL TO DISCOVER</span><ArrowDown size={16}/><span>01 — 06</span></div><div className="hero-stamp">SC<br/>01</div>
   </section>
   <section className="intro section-pad"><div><SectionLabel>THE APPROACH</SectionLabel><h2>Not just a video.<br/><em>A feeling you can</em> <span>return to.</span></h2></div><div className="intro-copy"><p>Some moments pass in a second. The way someone looks across a room. The laughter between rituals. The quiet before everything begins.</p><p>Sachin Cinematography is about noticing those moments and turning them into films with atmosphere, emotion and a point of view.</p><Link className="under-link" href="/about">MEET SACHIN <ArrowUpRight size={16}/></Link></div></section>
   <section className="work-section section-pad"><div className="section-heading"><div><SectionLabel>SELECTED DIRECTIONS</SectionLabel><h2>Stories worth<br/><em>remembering.</em></h2></div><Link className="under-link" href="/portfolio">VIEW PORTFOLIO <ArrowUpRight size={16}/></Link></div><div className="work-grid"><Link href="/portfolio" className="work-card work-large"><div className="work-art art-wedding"><span>01 / WEDDINGS</span><b>WEDDING<br/>STORIES</b><i><Play size={17}/></i></div><div className="work-meta"><span>WEDDING CINEMATOGRAPHY</span><span>EXPLORE ↗</span></div></Link><Link href="/portfolio" className="work-card"><div className="work-art art-reels"><span>02 / SHORT FORM</span><b>THE ART OF<br/>THE MOMENT</b><i><Play size={17}/></i></div><div className="work-meta"><span>REELS & HIGHLIGHTS</span><span>EXPLORE ↗</span></div></Link><Link href="/portfolio" className="work-card"><div className="work-art art-travel"><span>03 / OUT THERE</span><b>BEYOND<br/>THE FRAME</b><i><Play size={17}/></i></div><div className="work-meta"><span>TRAVEL & LIFESTYLE</span><span>EXPLORE ↗</span></div></Link></div></section>
   <section className="manifesto"><div className="manifesto-inner"><SectionLabel>THE CREATIVE POINT OF VIEW</SectionLabel><p>“The best stories aren't staged.<br/><em>They're felt.</em>”</p><span>SACHIN CINEMATOGRAPHY</span></div></section>
   <section className="services-strip section-pad"><div className="section-heading"><div><SectionLabel>WHAT WE CREATE</SectionLabel><h2>Made for the<br/><em>way you remember.</em></h2></div><Link className="under-link" href="/services">ALL SERVICES <ArrowUpRight size={16}/></Link></div><div className="service-list">{services.map((s,i)=><Link href="/services" key={s}><span>0{i+1}</span><b>{s}</b><ArrowUpRight/></Link>)}</div></section>
   <section className="cta-band"><div><SectionLabel>HAVE A STORY IN MIND?</SectionLabel><h2>Let's make it<br/><em>something lasting.</em></h2></div><Link className="button button-light" href="/contact">START A CONVERSATION <ArrowUpRight size={16}/></Link></section>
  </main>
 </Shell>
}