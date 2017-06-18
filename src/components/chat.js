import html from "choo/html";

const Chat = (props, send) => {
  return html`
  <div>
    <form onsubmit=${onsubmit}>
      <input name="msg" type="text">
    </form>
    <ul>
      ${props.msg.map(msg => html`<li> ${msg} </li>`)}
    </ul>
  </div>`;
  function onsubmit(ev) {
    ev.preventDefault();
    send.write(this.elements.msg.value + "\n");
    this.reset();
  }
};
export default Chat;
