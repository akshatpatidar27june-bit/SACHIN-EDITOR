"use client";
import { Shell, SectionLabel } from "../components";
import { useState } from "react";
import { ArrowUpRight, Instagram } from "lucide-react";
import { getSupabaseBrowserClient } from "../../lib/supabase/client";

export default function Contact(){
 const [busy,setBusy]=useState(false);
 const [status,setStatus]=useState("");
 async function submit(event){
  event.preventDefault();setStatus("");
  const client=getSupabaseBrowserClient();
  if(!client){setStatus("The enquiry form is not connected yet. Please message Sachin on Instagram.");return;}
  const form=new FormData(event.currentTarget);
  setBusy(true);
  const {error}=await client.from("enquiries").insert({
   name:String(form.get("name")||"").trim(),
   contact:String(form.get("contact")||"").trim(),
   project_type:String(form.get("project_type")||"").trim(),
   message:String(form.get("message")||"").trim()
  });
  setBusy(false);
  if(error){setStatus("We couldn't send that enquiry just now. Please try Instagram instead.");return;}
  event.currentTarget.reset();
  setStatus("Thank you. Your enquiry has been received.");
 }
 return <Shell><main className="inner-page"><section className="page-hero"><SectionLabel>LET'S CONNECT</SectionLabel><h1>Tell me what<br/><em>you're dreaming of.</em></h1><p>Share a few details about your event or project. We can take it from there.</p></section><section className="contact-layout section-pad">
  <form className="contact-form" onSubmit={submit}>
   <label>Your name<input name="name" required maxLength={120} placeholder="Name"/></label>
   <label>Email or phone<input name="contact" required maxLength={180} placeholder="How can Sachin reach you?"/></label>
   <label>What are you planning?<select name="project_type" defaultValue=""><option value="" disabled>Select a project type</option><option>Wedding cinematography</option><option>Pre-wedding film</option><option>Reels / short film</option><option>Travel / lifestyle</option><option>Other</option></select></label>
   <label>Tell us a little more<textarea name="message" rows="5" maxLength={3000} placeholder="Date, location, idea or anything you'd like to share..."/></label>
   <button className="button button-dark" type="submit" disabled={busy}>{busy?"SENDING…":"SEND ENQUIRY"} <ArrowUpRight size={16}/></button>
   {status&&<p className="form-note" role="status">{status}</p>}
  </form>
  <aside className="contact-aside"><SectionLabel>DIRECT CONNECTION</SectionLabel><h2>Let's start<br/><em>with a hello.</em></h2><a href="https://instagram.com/cinematic_edit_zone" target="_blank" rel="noreferrer"><Instagram/> @cinematic_edit_zone <ArrowUpRight size={16}/></a><p>Based in Mandsaur, Madhya Pradesh, India.</p><small>For bookings, collaborations and project enquiries.</small></aside>
 </section></main></Shell>;
}