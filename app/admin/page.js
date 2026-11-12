"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "../../lib/supabase/client";
import { ArrowLeft, LockKeyhole, LogOut, ShieldCheck } from "lucide-react";

export default function Admin(){
 const [supabase,setSupabase]=useState(null);
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [session,setSession]=useState(null);
 const [isAdmin,setIsAdmin]=useState(false);
 const [busy,setBusy]=useState(false);
 const [notice,setNotice]=useState("");
 useEffect(()=>{
  const client=getSupabaseBrowserClient();
  setSupabase(client);
  if(!client)return;
  client.auth.getSession().then(({data})=>setSession(data.session));
  const {data:{subscription}}=client.auth.onAuthStateChange((_event,nextSession)=>setSession(nextSession));
  return ()=>subscription.unsubscribe();
 },[]);
 useEffect(()=>{
  let active=true;
  async function checkRole(){
   if(!supabase||!session?.user)return setIsAdmin(false);
   const {data,error}=await supabase.from("profiles").select("is_admin").eq("id",session.user.id).maybeSingle();
   if(active){setIsAdmin(!error&&data?.is_admin===true);if(error)setNotice("Could not verify admin access. Apply the database migration and check the admin profile.");}
  }
  checkRole();
  return ()=>{active=false};
 },[supabase,session]);
 async function signIn(event){
  event.preventDefault();if(!supabase)return;
  setBusy(true);setNotice("");
  const {error}=await supabase.auth.signInWithPassword({email,password});
  setBusy(false);
  if(error)setNotice(error.message);
 }
 async function signOut(){await supabase?.auth.signOut();setIsAdmin(false);setNotice("Signed out.");}
 return <main className="admin-page"><div className="admin-card admin-card-wide">
  <Link className="admin-back" href="/"><ArrowLeft size={15}/> BACK TO WEBSITE</Link>
  <span className="brand-mark">S.</span><p className="eyebrow">SACHIN CINEMATOGRAPHY</p><h1>Admin workspace</h1>
  {!supabase?<><p>Supabase is not configured yet. Add <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your deployment environment, then redeploy.</p><p className="admin-security"><LockKeyhole size={16}/> No credentials are stored in this repository.</p></>:!session?<form className="admin-login" onSubmit={signIn}><p>Sign in with the admin account created in your Supabase project.</p><label>Email<input type="email" autoComplete="username" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)}/></label><button className="button button-dark" disabled={busy}>{busy?"SIGNING IN…":"SIGN IN"} <LockKeyhole size={15}/></button></form>:!isAdmin?<><p>You are signed in, but this account does not have the administrator role. Add its user UUID to <code>public.profiles</code> with <code>is_admin = true</code> after applying the migration.</p><button className="button button-dark" onClick={signOut}>SIGN OUT <LogOut size={15}/></button></>:<><p className="admin-security"><ShieldCheck size={17}/> Authenticated administrator</p><p>Supabase authentication and role verification are connected. The content-management screens and media upload workflows are the next build stage.</p><button className="button button-dark" onClick={signOut}>SIGN OUT <LogOut size={15}/></button></>}
  {notice&&<p className="admin-notice" role="status">{notice}</p>}
 </div></main>;
}