import { Shell, SectionLabel } from "../components";
import Link from "next/link";
import { ArrowUpRight, Camera, Clapperboard, Film } from "lucide-react";

export default function About(){
 return <Shell><main className="inner-page">
  <section className="page-hero"><SectionLabel>BEHIND THE LENS</SectionLabel><h1>A little about<br/><em>the person</em> behind it.</h1><p>A filmmaker's perspective, built around real people and real moments.</p></section>
  <section className="about-layout section-pad">
   <div className="portrait-frame"><div className="portrait-image-wrap"><img className="sachin-portrait" src="/sachin-photo.png" alt="Sachin seated on a motorcycle outdoors" /><span className="portrait-index">SC / 01</span></div><div className="portrait-caption">SACHIN · CINEMATOGRAPHER & EDITOR</div></div>
   <div className="about-story"><SectionLabel>HELLO, I'M SACHIN</SectionLabel><h2>Observing life.<br/><em>Creating stories.</em></h2>
    <p>I'm Sachin, a cinematographer and editor based in Mandsaur, Madhya Pradesh. I work with moving images to preserve the atmosphere of a moment — from the energy of a wedding celebration to the quieter details that make every story personal.</p>
    <p>My creative interests move across wedding cinematography, pre-wedding films, reels, travel and lifestyle storytelling. Each project is an opportunity to find its own rhythm, visual language and emotion.</p>
    <p>For me, cinematography is about more than pointing a camera at an event. It is about noticing the small gestures, the changing light, the people just outside the frame and the feeling that connects them all. Editing is where those fragments find their pace and become one complete story.</p>
    <p>Whether the brief is a wedding film, a short reel or a visual story from a new place, the intention stays the same: make something honest, thoughtful and worth returning to.</p>
    <div className="about-values"><div><Camera/><b>THE FRAME</b><span>Thoughtful composition</span></div><div><Film/><b>THE STORY</b><span>Emotion-led storytelling</span></div><div><Clapperboard/><b>THE EDIT</b><span>Rhythm and detail</span></div></div>
    <p className="muted-note">This is an editorial introduction based on the details shared so far. Specific milestones, years of experience, equipment, awards and client credits will only be added when confirmed by Sachin.</p>
    <Link className="under-link" href="/contact">LET'S CREATE SOMETHING <ArrowUpRight size={16}/></Link>
   </div>
  </section>
 </main></Shell>
}