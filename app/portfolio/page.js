import { Shell, SectionLabel } from "../components";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

const categories=[
 ["01","WEDDING CINEMATOGRAPHY","Emotion-led films of celebrations and the people in them."],
 ["02","PRE-WEDDING FILMS","A visual story of two people, told in their own way."],
 ["03","REELS & SHORT FILMS","Short-form visuals with pace, personality and intention."],
 ["04","TRAVEL & LIFESTYLE","Places, people and everyday moments through a cinematic lens."],
 ["05","VIDEO EDITING","A considered edit that gives every shot its rhythm."]
];

export default function Portfolio(){
 return <Shell>
  <main className="inner-page">
   <section className="page-hero">
    <SectionLabel>THE PORTFOLIO</SectionLabel>
    <h1>Frames with<br/><em>a point of view.</em></h1>
    <p>A home for films, celebrations and visual experiments. Project galleries will be added as approved work is supplied.</p>
   </section>
   <section className="portfolio-callout section-pad">
    <div>
     <SectionLabel>THE WORK IS TAKING SHAPE</SectionLabel>
     <h2>Every story deserves<br/><em>its own spotlight.</em></h2>
     <p>Selected films will appear here as Sachin's approved projects are prepared for the portfolio. Until then, explore recent edits and updates on Instagram.</p>
    </div>
    <a className="button button-dark" href="https://instagram.com/cinematic_edit_zone" target="_blank" rel="noreferrer"><Instagram size={16}/> VIEW INSTAGRAM <ArrowUpRight size={16}/></a>
   </section>
   <section className="portfolio-categories section-pad" aria-label="Portfolio categories">
    {categories.map(([number,title,description])=><article key={number}>
     <span>{number}</span><div><h2>{title}</h2><p>{description}</p></div><span className="coming">PROJECTS COMING SOON</span>
    </article>)}
   </section>
   <section className="cta-band">
    <div><SectionLabel>HAVE A STORY IN MIND?</SectionLabel><h2>Let's create<br/><em>your next film.</em></h2></div>
    <Link className="button button-light" href="/contact">START A CONVERSATION <ArrowUpRight size={16}/></Link>
   </section>
  </main>
 </Shell>;
}
