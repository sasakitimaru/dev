"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const ShowAllCommand = () => {
  return (
    <>
      <p className="ml-2">{"framework"}</p>
      <SkillsframeworkCommand />
      <p className="ml-2">{"language"}</p>
      <SkillslanguageCommand />
      <p className="ml-2">{"contact"}</p>
      <ContactCommand />
    </>
  );
};
const AliasCommand = () => {
  return (
    <>
      <p className="ml-2">{"Here are some commands you can try :"}</p>
      <p className="ml-2">{"show all"}</p>
      <p className="ml-2">{"ls skills"}</p>
      <p className="ml-2">{"ls skills/language"}</p>
      <p className="ml-2">{"ls skills/framework"}</p>
      <p className="ml-2">{"ls contact"}</p>
    </>
  );
};
const SkillsCommand = () => {
  return (
    <>
      <div className=" text-green-200">
        <p className="text-lg m-2">{"> language"}</p>
        <p className="text-lg m-2">{"> framework"}</p>
      </div>
    </>
  );
};

const SkillslanguageCommand = () => {
  return (
    <>
      <div className=" text-blue-300">
        <p className="text-lg m-2">{"> TypeScript"}</p>
        <p className="text-lg m-2">{"> Java"}</p>
      </div>
    </>
  );
};

const SkillsframeworkCommand = () => {
  return (
    <>
      <div className="text-red-300">
        <p className="text-lg m-2">{"> React"}</p>
        <p className="text-lg m-2">{"> Next.js"}</p>
        <p className="text-lg m-2">{"> Tailwind CSS"}</p>
        <p className="text-lg m-2">{"> Spring Boot"}</p>
      </div>
    </>
  );
};

const ContactCommand = () => {
  return (
    <>
      <div className=" text-purple-300 flex flex-col">
        <Link
          href={"https://github.com/sasakitimaru"}
          className="text-lg m-2 text-inherit w-fit"
          target="blank"
        >
          {"> Github"}
        </Link>
        <Link
          href={"https://twitter.com/sasakiti_maru"}
          className="text-lg m-2 text-inherit w-fit"
          target="blank"
        >
          {"> Twitter"}
        </Link>
        <Link
          href={"https://www.linkedin.com/in/tomoya-ohki-35aa79213/"}
          className="text-lg m-2 text-inherit w-fit"
          target="blank"
        >
          {"> Linkedin"}
        </Link>
      </div>
    </>
  );
};

const Terminal = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
  const [commandHistoryIndex, setCommandHistoryIndex] =
    React.useState<number>(0);
  const [commandElements, setCommandElements] = React.useState<
    React.ReactNode[]
  >([]);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const title = "sasakiti-dev@Mac-mini";

  const setValueToInputRef = (value: string) => {
    if (inputRef.current != null) {
      inputRef.current.value = value;
      inputRef.current.focus();
    }
  };

  function scrollToBottomOfConsole() {
    const consoleElement = document.getElementById("console");
    if (consoleElement) {
      consoleElement.scrollTop = consoleElement.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottomOfConsole();
  }, [commandElements]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      doSelectedCommand();
      setInputValue("");
      setValueToInputRef("");
    }
    // 上矢印キーで履歴を遡る
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistoryIndex > 0) {
        const newIndex = commandHistoryIndex - 1;
        setCommandHistoryIndex(newIndex);
        const currentCommand = commandHistory[newIndex];
        setInputValue(currentCommand);
        setValueToInputRef(currentCommand);
      } else {
        setCommandHistoryIndex(0);
      }
    }
    // 下矢印キーで履歴を進める
    if (e.key === "ArrowDown") {
      if (commandHistoryIndex < commandHistory.length - 1) {
        const newIndex = commandHistoryIndex + 1;
        setCommandHistoryIndex(newIndex);
        const currentCommand = commandHistory[newIndex];
        setInputValue(currentCommand);
        setValueToInputRef(currentCommand);
      } else {
        setCommandHistoryIndex(commandHistory.length);
        setInputValue("");
        setValueToInputRef("");
      }
    }
  };

  const doSelectedCommand = () => {
    setCommandHistory((prev) => [...prev, inputValue]);
    setCommandHistoryIndex(commandHistory.length + 1);
    switch (inputValue) {
      case "show all":
        setCommandElements((prev) => [
          ...prev,
          <ShowAllCommand key={prev.length} />,
        ]);
        break;
      case "alias":
        setCommandElements((prev) => [
          ...prev,
          <AliasCommand key={prev.length} />,
        ]);
        break;
      case "ls":
        setCommandElements((prev) => [
          ...prev,
          <AliasCommand key={prev.length} />,
        ]);
        break;
      case "ls skills":
        setCommandElements((prev) => [
          ...prev,
          <SkillsCommand key={prev.length} />,
        ]);
        break;
      case "ls skills/language":
        setCommandElements((prev) => [
          ...prev,
          <SkillslanguageCommand key={prev.length} />,
        ]);
        break;
      case "ls skills/framework":
        setCommandElements((prev) => [
          ...prev,
          <SkillsframeworkCommand key={prev.length} />,
        ]);
        break;
      case "ls contact":
        setCommandElements((prev) => [
          ...prev,
          <ContactCommand key={prev.length} />,
        ]);
        break;
      default:
        setCommandElements((prev) => [
          ...prev,
          <p
            key={prev.length}
            className="ml-2"
          >{`command not found: ${inputValue}`}</p>,
        ]);
        break;
    }
  };

  return (
    <div className="w-full mx-auto mt-10">
      <div className="w-full shadow-md subpixel-antialiased rounded-lg bg-black border-black mx-auto">
        <div
          className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div className="mx-auto pr-16" id="terminaltitle">
            <p className="text-center">{title}</p>
          </div>
        </div>
        <div
          className="p-1 h-[610px]  text-white font-mono text-xs bg-black rounded-b-lg overflow-y-auto"
          id="console"
          onClick={() => {
            if (inputRef.current != null) inputRef.current.focus();
          }}
        >
          <p className="m-2">Last login: Wed May 26 10:30:00 on console</p>
          <div className="flex flex-col">
            <p className="m-2 flex-shrink-0">
              {"Mac-mini:~ sasakiti$ show all"}
            </p>
            <ShowAllCommand />
            {commandElements.map((commandElement, index) => (
              <div key={index}>
                <p className="m-2 flex-shrink-0">
                  {"Mac-mini:~ sasakiti$ " + commandHistory[index]}
                </p>
                {commandElement}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <p className="m-2 flex-shrink-0">Mac-mini:~ sasakiti$</p>
            <div className="w-full">
              <input
                className={`ml-1 bg-inherit outline-none w-full border-l-4 rounded-none
                ${isFocus ? "caret-white border-none" : "animate-blinkBorder"}`}
                value={inputValue}
                ref={inputRef}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder={`${!isFocus ? "alias: show all command" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terminal;
