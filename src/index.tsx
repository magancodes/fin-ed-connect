/**
 * @source: https://github.com/pranjalkole/fin-ed-connect
 *
 * @license AGPL-3.0-only
 *
 * Copyright (C) 2023  Pranjal Kole <pranjal.kole7@gmail.com>
 * Copyright (C) 2023  Rishit Dutta <rishitdutta03@gmail.com>
 */

import { render, JSX } from "preact"
import { useState, StateUpdater } from "preact/hooks"
import "./index.css"
import landing_512 from "/landing_512.webp"
import landing_640 from "/landing_640.webp"
import landing_768 from "/landing_768.webp"
import landing from "/landing.webp"
import graph from "/graph.svg"
import money_master from "/money_master.png"
import send from "/send.svg"

import "tailwindcss/tailwind.css";

enum State {
  Home,
  Modules,
  Roadmap,
  Advisor,
  Games,
  Forum,
  Tax,
  Register,
  Login
}

function Hamburger() {
  return (
    <svg height="32px" viewBox="0 0 32 32" width="32px" class="fill-mytext">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
  )
}

function Button({ content, onClick }: { content: string, onClick: JSX.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} class="my-button text-mytext font-bold px-2 py-1 rounded-lg">
      {content}
    </button>
  )
}

function Header({ loggedIn, setState, setUsername }: { loggedIn: boolean,
    setState: StateUpdater<State>, setUsername: StateUpdater<string> }) {
  const handleLogout = () => {
    setUsername("");
    setState(State.Home);
  }

  return (
    <header class="flex flex-row flex-wrap mx-2 mt-2 gap-2 md:items-center md:flex-nowrap md:h-auto text-myheading shadow-xl">
      <input type="checkbox" id="menu" class="peer hidden" />
      <label for="menu" class="my-gradient-r cursor-pointer rounded-xl bg-cyan-900 p-1 shadow-xl"><Hamburger /></label>
      <button onClick={() => setState(State.Home)} class="my-gradient md:peer-checked:hidden order-first bg-cyan-900 rounded-xl p-1 grow text-3xl font-bold text-left pl-4">FinEd Connect.</button>
      <div class="my-gradient-r my-slidein hidden peer-checked:flex flex-col md:peer-checked:flex-row peer-checked:basis-full gap-4 bg-cyan-800 rounded-xl py-2 px-2 grow">
          <Button onClick={() => setState(State.Modules)} content="Learn" />
          {loggedIn &&
          <Button onClick={() => setState(State.Roadmap)} content="Personalized Financial Roadmap" />
          }
          <Button onClick={() => setState(State.Advisor)} content="Virtual Advisor" />
          <Button onClick={() => setState(State.Games)} content="Games" />
          <Button onClick={() => setState(State.Forum)} content="Forum" />
          <Button onClick={() => setState(State.Tax)} content="Tax Section" />
          {loggedIn
          ?
          <Button onClick={handleLogout} content="Logout" />
          :
          <>
            <Button onClick={() => setState(State.Register)} content="Register" />
            <Button onClick={() => setState(State.Login)} content="Login" />
          </>
          }
      </div>
    </header>
  )
}

function Home({ setState }: { setState: StateUpdater<State> }) {
  return (
    <div class="grow flex gap-4 m-2">
      <div class="basis-0 grow flex flex-col gap-8 justify-around rounded-2xl my-gradient p-2 shadow-xl text-mytext">
        <div class="flex flex-col gap-8 mx-6 my-6">
          <div class="flex flex-col items-center md:items-start md:py-0">
            <h1 class="md:text-8xl font-mysans font-bold text-myheading md:pr-14 text-6xl">FinEd Connect.</h1>
            <p class="font-medium font-mysans text-myheading text-xl">Make <span class="underline">smarter</span> decisions</p>
          </div>
          <div class="md:hidden">
            <picture>
              <source srcset={landing_640} width="640" height="480" media="(max-width: 640px)" />
              <img src={landing_768} width="768" height="576" alt="" />
            </picture>
          </div>
          <p class="text-center md:text-left text-xl font-mysans">Welcome to <span class="text-myheading">FinEd Connect</span>, the ultimate online resource for improving your financial literacy. Whether you are a student, a professional, or a retiree, you will find valuable information and guidance on how to manage your money, plan for your future, and achieve your financial goals. Learn from the best finance websites, courses, and experts in the field, and discover how to make smart and informed decisions about your finances. Join us today and start your journey to financial freedom and success.</p>
        </div>
        <button onClick={() => setState(State.Register)} class="text-3xl font-black bg-white self-center text-myaccent py-4 px-8 rounded-full">JOIN NOW</button>
      </div>
      <div class="basis-0 grow hidden md:block">
        <picture>
          <source srcset={landing_512} width="512" height="384" media="(max-width: 1024px)" />
          <source srcset={landing_640} width="640" height="480" media="(max-width: 1280px)" />
          <source srcset={landing_768} width="768" height="576" media="(max-width: 1536px)" />
          <img src={landing} width="3200" height="2400" alt="" />
        </picture>
      </div>
    </div>
  )
}

function Modules() {
  return (
    <div class="m-2 flex flex-col gap-4 text-mytext">
      <div class="flex justify-between my-gradient rounded-xl p-2">
        <h1 class="text-4xl font-bold text-myheading font-mysans shadow-xl">Videos</h1>
        <button class="my-button text-mytext font-bold px-2 py-1 rounded-xl">View all</button>
      </div>
      <div class="flex flex-col md:flex-row gap-4 mx-6">
        <div class="aspect-video w-full bg-slate-200 md:basis-0 grow">
          <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/p7HKvqRI_Bo" />
        </div>
        <div class="aspect-video w-full bg-slate-200 md:basis-0 grow">
          <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/4XZIv4__sQA" />
        </div>
        <div class="aspect-video w-full bg-slate-200 md:basis-0 grow">
          <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/LrTejUbR_Zs" />
        </div>
      </div>
      <div class="flex justify-between my-gradient rounded-xl p-2">
        <h1 class="text-4xl font-bold text-myheading font-mysans shadow-xl">Learning Modules</h1>
        <button class="my-button text-mytext font-bold px-2 py-1 rounded-xl">View all</button>
      </div>
      <div class="flex flex-col my-gradient-alt rounded-xl shadow-xl mx-4 px-2">
        <h1 class="text-2xl font-bold">Introduction to investing</h1>
        <p class="font-mono">Read time: 15 min</p>
      </div>
      <div class="flex flex-col my-gradient-alt rounded-xl shadow-xl mx-4 px-2">
        <h1 class="text-2xl font-bold">Financial planning 101</h1>
        <p class="font-mono">Read time: 24 min</p>
      </div>
    </div>
  )
}

function Advisor() {
  const [messages, setMessages] = useState<string[]>([]);
  const handleSubmit = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = event.currentTarget.message;
    setMessages([...messages, message.value]);
    message.value = "";
  };

  return (
    <div class="m-2 text-black flex flex-col gap-2 h-full justify-between grow">
      <h1 class="text-4xl font-bold text-myheading my-gradient rounded-xl col-span-2 p-2 font-mysans">Virtual Finance Advisor</h1>
      <div class="flex flex-col gap-2 py-2">
        <p class="w-full md:w-1/2 lg:w-1/3 bg-white p-2 rounded-xl">Hello there, I am your personal virtual finance advisor. How may I help you?</p>
        {messages.map((message) => <p class="w-full md:w-1/2 lg:w-1/3 bg-white p-2 rounded-xl">{message}</p>)}
        <form onSubmit={handleSubmit} class="flex gap-2">
          <input class="grow rounded-xl bg-white p-2" name="message" placeholder="Enter your message" />
          <button class="rounded-xl my-gradient p-2 w-12"><img src={send} /></button>
        </form>
      </div>
    </div>
  )
}

function Games() {
  return (
    <div class="grow m-2 flex flex-col gap-4">
      <h1 class="text-4xl font-bold text-myheading my-gradient rounded-xl p-2 font-mysans shadow-xl">Games</h1>
      <div class="grow grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-4 mx-4">
        <div class="md:col-span-2 bg-red-600 rounded-xl flex flex-col justify-center items-center shadow-xl bg-chall">
          <h1 class="font-serif text-5xl text-white">Financial challenges</h1>
          <p class="font-serif text-2xl text-white">Monthly challenges to encourage practical application of knowledge.</p>
        </div>
        <div class="rounded-xl px-4 py-3 shadow-xl bg-gradient-to-tr from-[#272727] to-[#1D1D1D]">
          <h1 class="text-white text-5xl font-bold">Investment simulator</h1>
          <div class="flex flex-col md:flex-row">
            <p class="basis-0 grow text-xl text-white">Virtual stock market simulation for hands-on experience</p>
            <div class="basis-0 grow"><img src={graph} /></div>
          </div>
        </div>
        <div class="rounded-xl text-right px-4 py-3 shadow-xl bg-gradient-to-tr from-[#81C32C] to-[#43771A]">
          <h1 class="text-5xl font-bold text-white">Money Master</h1>
          <div class="flex flex-col md:flex-row">
            <div class="basis-0 grow"><img src={money_master} alt="" width="322" height="322" /></div>
            <p class="basis-0 grow text-xl text-white">Gamified experiences to simulate financial decision making</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Forum() {
  return (
    <div class="m-2 flex flex-col gap-4 h-full text-mytext">
      <div class="flex justify-between my-gradient rounded-xl p-2">
        <h1 class="text-4xl font-bold text-myheading font-mysans">Forums</h1>
        <button class="my-button font-bold text-myheading px-2 py-1 rounded-xl">Create thread</button>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between my-gradient-alt rounded-xl p-2">
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold">Doubts regarding taxes</h1>
            <p class="font-mono text-sm">2 posts</p>
          </div>
          <p class="font-mono">Created: 16 Oct, 2023</p>
        </div>
        <div class="flex justify-between my-gradient-alt rounded-xl p-2">
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold">Help needed</h1>
            <p class="font-mono text-sm">5 posts</p>
          </div>
          <p class="font-mono">Created: 13 Oct, 2023</p>
        </div>
        <div class="flex justify-between my-gradient-alt rounded-xl p-2">
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold">How do I make money?</h1>
            <p class="font-mono text-sm">1 post</p>
          </div>
          <p class="font-mono">Created: 7 Oct, 2023</p>
        </div>
      </div>
    </div>
  )
}

function Tax() {
  return (
    <div class="m-2 flex flex-col gap-4 h-full text-myheading">
      <div class="flex justify-between my-gradient rounded-xl p-2">
        <h1 class="text-4xl font-bold font-mysans">Tax Section</h1>
      </div>
      <div class="flex flex-col gap-4 mx-4">
        <div class="flex flex-col gap-4 my-gradient rounded-xl p-4">
          <h1 class="text-center text-3xl font-bold">Videos on Taxes</h1>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4">
              <iframe class="w-full h-full aspect-video rounded-xl" width="560" height="315" src="https://www.youtube-nocookie.com/embed/qCfGsQYINKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <iframe class="w-full h-full aspect-video rounded-xl" width="560" height="315" src="https://www.youtube-nocookie.com/embed/t6V9i8fFADI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <iframe class="w-full h-full aspect-video rounded-xl" width="560" height="315" src="https://www.youtube-nocookie.com/embed/7Qtr_vA3Prw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div class="flex flex-col gap-4 my-gradient rounded-xl items-center p-4">
          <h1 class="text-3xl font-bold">How to calculate your taxes?</h1>
          <p class="text-xl font-normal font-mysans text-center mx-4">Here's a cool little tool by the income tax department that can help you calculate your taxes.</p>
          <a class="text-3xl font-black bg-white text-myaccent py-4 px-8 rounded-xl m-2" href="https://incometaxindia.gov.in/pages/tools/tax-calculator.aspx">Tax Calculator</a>
        </div>
        <div class="flex flex-col gap-4 my-gradient rounded-xl items-center p-4">
          <h1 class="text-3xl font-bold">Tax rebates</h1>
          <p class="text-xl font-normal font-mysans text-center mx-4">Want to save on paying taxes? Here's a website that can help you learn about various tax saving options.</p>
          <a class="text-3xl font-black bg-white text-myaccent py-4 px-8 rounded-xl m-2" href="https://scripbox.com/tax/tax-saving-options/">Tax Saving Options</a>
        </div>
      </div>
    </div>
  )
}

function Register({ setState }: { setState: StateUpdater<State> }) {
  enum RegisterState {
    Form,
    Success
  }
  const [registerState, setRegisterState] = useState(RegisterState.Form);
  const handleRegister = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegisterState(RegisterState.Success);
  };

  if (registerState == RegisterState.Form) {
    return (
      <div class="grow flex items-stretch justify-center m-2">
        <div class="container md:w-1/2 lg:w-3/7 xl:w-2/5 flex flex-col items-center justify-center gap-4 my-gradient rounded-xl py-4">
          <h1 class="text-5xl text-myheading font-black">SIGN UP</h1>
          <form class="flex flex-col items-center p-2 justify-around gap-4 w-4/5" onSubmit={handleRegister}>
            <input required name="email" type="email" placeholder="Email" class="w-full rounded-xl p-2 text-xl" />
            <input required name="username" placeholder="Username" class="w-full rounded-xl p-2 text-xl" />
            <input required name="password" type="password" placeholder="Password" class="w-full rounded-xl p-2 text-xl" />
            <input required name="cnfpassword" type="password" placeholder="Re-enter Password" class="w-full rounded-xl p-2 text-xl" />
            <button class="text-3xl text-myaccent bg-white px-8 py-2 rounded-full font-black">SIGN UP</button>
          </form>
          <p class="text-mytext">Already have an account? <button class="underline" onClick={() => setState(State.Login)}>Log in</button></p>
        </div>
      </div>
    )
  }
  /* registerState is RegisterState.Success */
  return (
    <div class="grow flex items-stretch justify-center m-2">
      <div class="container md:w-1/2 lg:w-3/7 xl:w-2/5 flex flex-col items-center justify-center gap-4 my-gradient rounded-xl py-4">
        <h1 class="text-myheading text-4xl font-bold">Registration Successful</h1>
        <button onClick={() => setState(State.Login)} class="text-xl text-myaccent bg-white px-6 py-2 rounded-full font-black">LOG IN</button>
      </div>
    </div>
  )
}

function Login({ handleLogin }: { handleLogin: JSX.GenericEventHandler<HTMLFormElement> }) {
  return (
    <div class="grow flex items-stretch justify-center m-2">
      <div class="container md:w-1/2 lg:w-3/7 xl:w-2/5 flex flex-col items-center justify-center gap-4 my-gradient rounded-xl py-4">
        <h1 class="text-5xl text-myheading font-black">LOG IN</h1>
        <form class="flex flex-col items-center p-2 justify-around gap-4 w-4/5" onSubmit={handleLogin}>
          <input required name="username" placeholder="Username" class="w-full rounded-xl p-2 text-xl" />
          <input required name="password" type="password" placeholder="Password" class="w-full rounded-xl p-2 text-xl" />
          <p class="text-mytext">Forgot password?</p>
          <button class="text-3xl text-myaccent bg-white px-8 py-2 rounded-full font-black">LOG IN</button>
        </form>
      </div>
    </div>
  )
}

function Roadmap({ username }: { username: string }) {
  return (
    <div>
      <h1 class="text-5xl text-white">Hello {username}</h1>
      <h1 class="text-5xl text-white">TODO!</h1>
    </div>
  )
}

function Body({ state, setState, username, setUsername }: { state: State,
    setState: StateUpdater<State>, username: string,
    setUsername: StateUpdater<string> }) {
  const handleLogin = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername(event.currentTarget.username.value);
    setState(State.Roadmap);
  };

  if (state == State.Home) return <Home setState={setState} />
  else if (state == State.Modules) return <Modules />
  else if (state == State.Advisor) return <Advisor />
  else if (state == State.Games) return <Games />
  else if (state == State.Forum) return <Forum />
  else if (state == State.Tax) return <Tax />
  else if (state == State.Register) return <Register setState={setState} />
  else if (state == State.Login) return <Login handleLogin={handleLogin} />
  /* state is State.Roadmap */
  else return <Roadmap username={username} />
}

function App() {
  const [state, setState] = useState(State.Home);
  const [username, setUsername] = useState("");
  const loggedIn = username !== "";

  return (
    <div class="flex flex-col min-h-screen">
      <Header loggedIn={loggedIn} setState={setState}
        setUsername={setUsername} />
      <Body state={state} setState={setState} username={username}
        setUsername={setUsername} />
    </div>
  )
}

render(<App />, document.getElementById("app")!)
/* vim: set et sw=2: */
