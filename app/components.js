"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram, ArrowUpRight } from "lucide-react";
const links = [["Home","/"],["Portfolio","/portfolio"],["About","/about"],["Services","/services"],["Contact","/contact"]];
export function Header() {
  const [open,setOpen] = useState(false);
  return <header className="header"><Link className="brand" href="/"><span className="brand-mark">S.</span><span>SACHIN<small>CINEMATOGRAPHY</small></span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button><nav className={open?"nav nav-open":"nav"}>{links.map(([label,url])=><Link key={url} href={url} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact">LET'S TALK <ArrowUpRight size={15}/></Link></nav></header>;
}
export function Footer(){return <footer className="footer"><div><Link className="brand" href="/"><span className="brand-mark">S.</span><span>SACHIN<small>CINEMATOGRAPHY</small></span></Link><p>Real moments. Thoughtfully framed.<br/>Films that stay with you.</p></div><div className="footer-right"><a href="https://instagram.com/cinematic_edit_zone" target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a><span>MANDSAUR · MADHYA PRADESH</span><span>© {new Date().getFullYear()} SACHIN CINEMATOGRAPHY</span></div></footer>}
export function Shell({children}){return <><Header/>{children}<Footer/></>}
export function SectionLabel({children}){return <div className="eyebrow"><span/>{children}</div>}
