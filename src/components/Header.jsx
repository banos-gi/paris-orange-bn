import React from "react";
import { useState } from "react";
import Edit from "./Edit";
import Input from "./input/Input";
import Modal from "./modal/Modal";

const Header = () => {
  const [isShow, setIsShow] = useState("");
  const [state, setState] = useState({
    brandName: "Richard",
    chatContent: 'Let’s Chat',
    chatLink: 'Emaz4me@gmail.com'
  });

  return (
    <header className="header">
      <h1>
        {state.brandName}
        <span>.</span>
        <Edit onClick={() => setIsShow("brandName")} />
      </h1>
      <div className="button-wrapper">
        <a href={`mailTo: ${state.chatLink}`} className="menu-cta-menu">{state.chatContent}</a>
        <Edit onClick={() => setIsShow("chat")} />
      </div>

      {isShow==='brandName' ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            value={state.brandName}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                brandName: e.target.value,
              }))
            }
          />
        </Modal>
      ) : null}

      {isShow==='chat' ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            value={state.chatLink}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                chatLink: e.target.value,
              }))
            }
          />
          <Input
            value={state.chatContent}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                chatContent: e.target.value,
              }))
            }
          />
        </Modal>
      ) : null}
    </header>
  );
};

export default Header;
