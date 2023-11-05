/**
 * @source: https://github.com/pranjalkole/fin-ed-connect
 *
 * @license AGPL-3.0-only
 *
 * Copyright (C) 2023  Pranjal Kole <pranjal.kole7@gmail.com>
 * Copyright (C) 2023  Rishit Dutta <rishitdutta03@gmail.com>
 */

import { render, JSX } from "preact"
import { useState } from "preact/hooks"
import "./index.css"
import landing from "/landing.png"
import graph from "/graph.svg"
import money_master from "/money_master.png"
import send from "/send.svg"

import "tailwindcss/tailwind.css";

function Hamburger() {
  return (
    <svg height="32px" viewBox="0 0 32 32" width="32px" class="fill-mytext">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
  )
}

function Button({ content, onClick }: { content: string, onClick: JSX.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} class="my-button text-mytext font-bold px-2 py-1 rounded-lg">{content}</button>
  )
}

function Header({
  loggedIn,
  handleHome,
  handleModules,
  handleRoadmap,
  handleAdvisor,
  handleGames,
  handleForum,
  handleTax,
  handleRegisterPage,
  handleLoginPage,
  handleLogout }:
  { loggedIn: boolean,
  handleHome: JSX.MouseEventHandler<HTMLButtonElement>,
  handleModules: JSX.MouseEventHandler<HTMLButtonElement>,
  handleRoadmap: JSX.MouseEventHandler<HTMLButtonElement>,
  handleAdvisor: JSX.MouseEventHandler<HTMLButtonElement>,
  handleGames: JSX.MouseEventHandler<HTMLButtonElement>,
  handleForum: JSX.MouseEventHandler<HTMLButtonElement>,
  handleTax: JSX.MouseEventHandler<HTMLButtonElement>,
  handleRegisterPage: JSX.MouseEventHandler<HTMLButtonElement>,
  handleLoginPage: JSX.MouseEventHandler<HTMLButtonElement>,
  handleLogout: JSX.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <header class="flex flex-row flex-wrap mx-2 mt-2 gap-2 md:items-center md:flex-nowrap md:h-auto text-myheading shadow-xl">
      <input type="checkbox" id="menu" class="peer hidden" />
      <label for="menu" class="my-gradient-r cursor-pointer rounded-xl bg-cyan-900 p-1 shadow-xl"><Hamburger /></label>
      <button onClick={handleHome} class="my-gradient md:peer-checked:hidden order-first bg-cyan-900 rounded-xl p-1 grow text-3xl font-bold text-left pl-4">FinEd Connect.</button>
      <div class="my-gradient-r my-slidein hidden peer-checked:flex flex-col md:peer-checked:flex-row peer-checked:basis-full gap-4 bg-cyan-800 rounded-xl py-2 px-2 grow">
          <Button onClick={handleModules} content="Learn" />
          {loggedIn &&
          <Button onClick={handleRoadmap} content="Personalized Financial Roadmap" />
          }
          <Button onClick={handleAdvisor} content="Virtual Advisor" />
          <Button onClick={handleGames} content="Games" />
          <Button onClick={handleForum} content="Forum" />
          <Button onClick={handleTax} content="Tax Section" />
          {loggedIn
          ?
          <Button onClick={handleLogout} content="Logout" />
          :
          <>
            <Button onClick={handleRegisterPage} content="Register" />
            <Button onClick={handleLoginPage} content="Login" />
          </>
          }
      </div>
    </header>
  )
}

function Home({ handleRegisterPage }: { handleRegisterPage: JSX.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <div class="grow flex gap-4 m-2">
      <div class="basis-0 grow flex flex-col gap-8 justify-around rounded-2xl my-gradient p-2 shadow-xl text-mytext">
        <div class="flex flex-col gap-8 mx-6 my-6">
          <div class="flex flex-col items-center md:items-start md:py-0">
            <h1 class="md:text-8xl font-mysans font-bold text-myheading md:pr-14 text-6xl">FinEd Connect.</h1>
            <p class="font-medium font-mysans text-myheading text-xl">Make <span class="underline">smarter</span> decisions</p>
          </div>
          <div class="md:hidden">
            <img src={landing} class="object-scale-down" />
          </div>
          <p class="text-center md:text-left text-xl font-mysans">Welcome to <span class="text-myheading">FinEd Connect</span>, the ultimate online resource for improving your financial literacy. Whether you are a student, a professional, or a retiree, you will find valuable information and guidance on how to manage your money, plan for your future, and achieve your financial goals. Learn from the best finance websites, courses, and experts in the field, and discover how to make smart and informed decisions about your finances. Join us today and start your journey to financial freedom and success.</p>
        </div>
        <button onClick={handleRegisterPage} class="text-3xl font-black bg-white self-center text-myaccent py-4 px-8 rounded-full">JOIN NOW</button>
      </div>
      <div class="basis-0 grow hidden md:block">
        <img src={landing} class="" alt="" width="3200" height="2400" />
      </div>
    </div>
  )
}

function Modules() {
  return (
    <div class="mx-2 my-4 text-cyan-400 flex flex-col gap-4">
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
  const [messages, setMessages] = useState([] as string[]);
  const handleSubmit = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = event.currentTarget.message;
    setMessages([...messages, message.value]);
    message.value = "";
  };
  return (
    <div class="mx-2 mt-4 text-black flex flex-col gap-2 h-full justify-between grow">
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
    <div class="grow mx-2 mt-4 text-cyan-400 flex flex-col gap-4">
      <h1 class="text-4xl font-bold text-myheading my-gradient rounded-xl col-span-2 p-2 font-mysans shadow-xl">Games</h1>
      <div class="grow grid grid-cols-2 grid-rows-2 gap-4 mx-4">
        <div class="col-span-2 bg-red-600 rounded-xl flex flex-col justify-center items-center shadow-xl bg-chall">
          <h1 class="font-serif text-5xl text-white">Financial challenges</h1>
          <p class="font-serif text-2xl text-white">Monthly challenges to encourage practical application of knowledge.</p>
        </div>
        <div class="bg-gray-900 rounded-xl px-4 py-3 shadow-xl bg-gradient-to-tr from-[#272727] to-[#1D1D1D] col-span-1">
          <h1 class="text-white text-5xl font-bold">Investment simulator</h1>
          <div class="flex">
            <p class="basis-0 grow text-xl text-white">Virtual stock market simulation for hands-on experience</p>
            <div class="basis-0 grow"><img src={graph} /></div>
          </div>
        </div>
        <div class="bg-emerald-600 rounded-xl text-right px-4 py-3 shadow-xl bg-gradient-to-tr from-[#81C32C] to-[#43771A] col-span-1">
          <h1 class="text-5xl font-bold text-white">Money Master</h1>
          <div class="flex">
            <div class="basis-0 grow"><img src={money_master} /></div>
            <p class="basis-0 grow text-xl text-white">Gamified experiences to simulate financial decision making</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Forum() {
  return (
    <div class="mx-2 mt-4 text-cyan-400 flex flex-col gap-4 h-full">
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
    <div class="mx-2 mt-4 flex flex-col gap-4 h-full text-myheading">
      <div class="flex justify-between my-gradient rounded-xl p-2">
        <h1 class="text-4xl font-bold font-mysans">Tax Section</h1>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-4 my-gradient rounded-xl p-2">
          <h1 class="text-3xl font-bold">Taxes and their types</h1>
          <div class="flex flex-wrap gap-2">
            <div class="basis-0 grow flex items-center justify-center">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4XZIv4__sQA?si=M2STbyjNAOg9tnpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div class="basis-0 grow flex items-center justify-center">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LrTejUbR_Zs?si=K9JqVctnAdwW8RP9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div class="basis-0 grow flex items-center justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/p7HKvqRI_Bo?si=PlmilD6HPvwCRihN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 items-start my-gradient rounded-xl p-2">
          <h1 class="text-3xl font-bold">How to calculate your taxes</h1>
          <a class="text-3xl font-black bg-white text-myaccent py-4 px-8 rounded-full" href="https://incometaxindia.gov.in/pages/tools/tax-calculator.aspx">Tax Calculator</a>
        </div>
        <div class="flex flex-col gap-4 items-start my-gradient rounded-xl p-2">
          <h1 class="text-3xl font-bold">Tax rebates</h1>
          <a class="text-3xl font-black bg-white text-myaccent py-4 px-8 rounded-full" href="https://scripbox.com/tax/tax-saving-options/">Tax Saving Options</a>
        </div>
      </div>
    </div>
  )
}

function Register({ handleLoginPage }: { handleLoginPage: JSX.MouseEventHandler<HTMLButtonElement> }) {
  enum State {
    Form,
    Success
  }
  const [state, setState] = useState(State.Form);
  const handleRegister = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState(State.Success);
  };
  if (state == State.Form) {
    return (
      <div class="grow flex items-stretch justify-center">
        <div class="container md:w-1/2 lg:w-3/7 xl:w-2/5 flex flex-col items-center justify-center gap-4 my-gradient rounded-xl m-4 py-4">
          <h1 class="text-5xl text-myheading font-black">SIGN UP</h1>
          <form class="flex flex-col items-center p-2 justify-around gap-4 w-4/5" onSubmit={handleRegister}>
            <input required name="email" type="email" placeholder="Email" class="w-full rounded-xl p-2 text-xl" />
            <input required name="username" placeholder="Username" class="w-full rounded-xl p-2 text-xl" />
            <input required name="password" type="password" placeholder="Password" class="w-full rounded-xl p-2 text-xl" />
            <input required name="cnfpassword" type="password" placeholder="Re-enter Password" class="w-full rounded-xl p-2 text-xl" />
            <button class="text-3xl text-myaccent bg-white px-8 py-2 rounded-full font-black">SIGN UP</button>
          </form>
          <p class="text-mytext">Already have an account? <span class="underline">Log in</span></p>
        </div>
      </div>
    )
  }
  /* state is State.Success */
  return (
    <div class="grow flex items-stretch justify-center">
      <div class="container md:w-1/2 lg:w-3/7 xl:w-2/5 flex flex-col gap-2 items-center justify-center my-gradient rounded-xl m-4">
        <h1 class="text-myheading text-4xl font-bold">Registration Successful</h1>
        <button onClick={handleLoginPage} class="text-xl text-myaccent bg-white px-6 py-2 rounded-full font-black">LOG IN</button>
      </div>
    </div>
  )
}

function Login({ handleLogin }: { handleLogin: JSX.GenericEventHandler<HTMLFormElement> }) {
  return (
    <div class="grow flex items-stretch justify-center">
      <div class="container md:w-1/2 lg:w-3/7 xl:w-2/5 flex flex-col items-center justify-center gap-4 my-gradient rounded-xl py-4 m-4">
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

function App() {
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
  const [state, setState] = useState(State.Home);
  const [username, setUsername] = useState("");
  const loggedIn = username !== "";

  const handleHome = () => {
    setState(State.Home);
  };
  const handleModules = () => {
    setState(State.Modules);
  };
  const handleRoadmap = () => {
    setState(State.Roadmap);
  };
  const handleAdvisor = () => {
    setState(State.Advisor);
  };
  const handleGames = () => {
    setState(State.Games);
  };
  const handleForum = () => {
    setState(State.Forum);
  };
  const handleTax = () => {
    setState(State.Tax);
  };
  const handleRegisterPage = () => {
    setState(State.Register);
  };
  const handleLoginPage = () => {
    setState(State.Login);
  };
  const handleLogout = () => {
    setUsername("");
    setState(State.Home);
  }

  const handleLogin = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername(event.currentTarget.username.value);
    setState(State.Roadmap);
  };

  if (state == State.Home) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Home
          handleRegisterPage={handleRegisterPage}
        />
      </div>
    )
  } else if (state == State.Modules) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Modules />
      </div>
    )
  } else if (state == State.Advisor) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Advisor />
      </div>
    )
  } else if (state == State.Games) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Games />
      </div>
    )
  } else if (state == State.Forum) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Forum />
      </div>
    )
  } else if (state == State.Tax) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Tax />
      </div>
    )
  } else if (state == State.Register) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Register
          handleLoginPage={handleLoginPage}
        />
      </div>
    )
  } else if (state == State.Login) {
    return (
      <div class="flex flex-col min-h-screen">
        <Header
          loggedIn={loggedIn}
          handleHome={handleHome}
          handleModules={handleModules}
          handleRoadmap={handleRoadmap}
          handleAdvisor={handleAdvisor}
          handleGames={handleGames}
          handleForum={handleForum}
          handleTax={handleTax}
          handleRegisterPage={handleRegisterPage}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
        <Login handleLogin={handleLogin} />
      </div>
    )
  }
  /* This should never happen */
  return (
    <div class="flex flex-col min-h-screen">
      <Header
        loggedIn={loggedIn}
        handleHome={handleHome}
        handleModules={handleModules}
        handleRoadmap={handleRoadmap}
        handleAdvisor={handleAdvisor}
        handleGames={handleGames}
        handleForum={handleForum}
        handleTax={handleTax}
        handleRegisterPage={handleRegisterPage}
        handleLoginPage={handleLoginPage}
        handleLogout={handleLogout}
      />
      <Roadmap username={username} />
    </div>
  )
}

render(<App />, document.getElementById("app")!)
/* vim: set et sw=2: */
