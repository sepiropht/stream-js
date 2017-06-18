import html from "choo/html";
import Chat from "./chat";
import { stream } from "../services/stream.service";

const mainView = (state, emit) => html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${() => emit("increment", 1)}>Increment</button>
      ${Chat({ msg: state.msg }, stream)}
    </body>`;

export default mainView;
