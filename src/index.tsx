/**
 * @source: https://github.com/pranjalkole/fin-ed-connect
 *
 * @license AGPL-3.0-only
 *
 * Copyright (C) 2023  Pranjal Kole <pranjal.kole7@gmail.com>
 */

import { render, JSX } from "preact"
import { useState } from "preact/hooks"
import "./headeranimation.css"

import "tailwindcss/tailwind.css";

function Hamburger() {
  return (
    <svg height="32px" viewBox="0 0 32 32" width="32px">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
  )
}

function Button({ content, onClick }: { content: string, onClick: JSX.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} class="bg-green-900 px-2 py-1 rounded-lg">{content}</button>
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
    <header class="flex flex-row flex-wrap mx-2 gap-2 md:items-center md:flex-nowrap md:h-auto">
      <input type="checkbox" id="menu" class="peer hidden" />
      <label for="menu" class="cursor-pointer rounded-lg bg-cyan-800 p-1"><Hamburger /></label>
      <button onClick={handleHome} class="md:peer-checked:hidden order-first bg-cyan-800 rounded-lg p-1 grow text-3xl font-bold">FinEd Connect</button>
      <div id="features" class="hidden peer-checked:flex peer-checked:flex-col md:peer-checked:flex-row peer-checked:basis-full gap-2 bg-cyan-800 rounded-lg p-1 grow">
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

function Home() {
  return (
    <div class="flex gap-2 grow items-stretch m-4">
      <div class="basis-1/2 flex flex-col justify-between rounded-lg bg-cyan-800 text-white p-2">
        <h1 class="text-4xl font-black">FinEd Connect</h1>
        <p class="font-bold">Make smarter decisions</p>
        <p>Welcome to FinEd Connect, the ultimate online reource for improving your financial literacy. Whether you are a student, a professional, or a retiree, you will find valuable information and guidance on how to manage your money, plan for your future, and achieve your financial gols. Lear from the best finance website, courses. Learn from the best finance websites, courses, and experts in the field, and discover how to make smart and informed decisions about your finances. Join us today and start your journey to financial freedom and success</p>
        <button class="text-xl font-black bg-white self-center text-green-700 py-2 px-4 rounded-full">JOIN NOW</button>
      </div>
      <div class="basis-1/2 bg-gray-800 text-white">Image</div>
    </div>
  )
}

function Modules() {
  return (
    <>
      <h1>Interactive Learning Modules</h1>
      <p>Read our modules on budgeting, investing, and financial planning</p>
    </>
  )
}

function Advisor() {
  return (
    <>
      <h1>Virtual Finance Advisor</h1>
      <div>
        <p>Hello there, I am your personal virtual finance advisor. How may I help you?</p>
      </div>
      <label>
        <input />
        Send
      </label>
    </>
  )
}

function Games() {
  return (
    <>
      <h1>Games</h1>
      <div>
        <h1>Financial challenges</h1>
        <p>Monthly challenges to encourage practical application of knowledge.</p>
      </div>
      <div>
        <h1>Investment simulator</h1>
        <p>Virtual stock market simulation for hands-on experience</p>
      </div>
      <div>
        <h1>Money Master</h1>
        <p>Gamified experience to simulate financial decision making</p>
      </div>
    </>
  )
}

function Forum({ username }: { username: string }) {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages([...messages, (username === "" ? "Anon" : username) + ": " + event.currentTarget.message.value]);
    event.currentTarget.message.value = "";
  };

  return (
    <>
      <h1>Community Forum</h1>
      <div class="border border-pink-800 rounded-lg">{messages.map((message) => <p>{message}</p>)}</div>
      <form onSubmit={handleSend}>
        <input required name="message" placeholder="Message" class="border border-pink-800 rounded-lg p-1 ml-1 outline-none focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-sky-900" />
        <button class="text-pink-600 rounded-lg border border-white hover:text-pink-200 hover:bg-pink-700 hover:border-pink-800">Send</button>
      </form>
    </>
  )
}

function Tax() {
  return (
    <>
      <h1>Tax Section</h1>
      <p>TODO</p>
    </>
  )
}

function Register() {
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
      <form class="flex flex-col items-start" onSubmit={handleRegister}>
        <label>
          Username:
          <input required name="username" class="border border-pink-800 rounded-lg p-1 ml-1" />
        </label>
        <label>
          Email:
          <input required name="email" type="email" class="border border-pink-800 rounded-lg p-1 ml-1" />
        </label>
        <label>
          Password:
          <input required name="password" type="password" class="border border-pink-800 rounded-lg p-1 ml-1" />
        </label>
        <button class="text-pink-600 rounded-lg border border-white hover:text-pink-200 hover:bg-pink-700 hover:border-pink-800">Register</button>
      </form>
    )
  }
  /* state is State.Success */
  return (
    <p>Registration Successful</p>
  )
}

function Login({ handleLogin }: { handleLogin: JSX.GenericEventHandler<HTMLFormElement> }) {
  return (
    <form class="flex flex-col items-start" onSubmit={handleLogin}>
      <label>
        Username:
        <input required name="username" class="border border-pink-800 rounded-lg p-1 ml-1" />
      </label>
      <label>
        Password:
        <input required name="password" type="password" class="border border-pink-800 rounded-lg p-1 ml-1" />
      </label>
      <button class="text-pink-600 rounded-lg border border-white hover:text-pink-200 hover:bg-pink-700 hover:border-pink-800">Login</button>
    </form>
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
  }

  const handleLogin = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername(event.currentTarget.username.value);
  };

  if (state == State.Home) {
    return (
      <div class="md:h-screen flex flex-col">
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
        <Home />
      </div>
    )
  } else if (state == State.Modules) {
    return (
      <div class="md:h-screen flex flex-col">
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
      <div class="md:h-screen flex flex-col">
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
      <div class="md:h-screen flex flex-col">
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
      <div class="md:h-screen flex flex-col">
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
        <Forum username={username} />
      </div>
    )
  } else if (state == State.Tax) {
    return (
      <div class="md:h-screen flex flex-col">
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
      <div class="md:h-screen flex flex-col">
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
        <Register />
      </div>
    )
  } else if (state == State.Login) {
    return (
      <div class="md:h-screen flex flex-col">
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
  return <>Bug in application</>
}

render(<App />, document.getElementById("app")!)
/* vim: set et sw=2: */
