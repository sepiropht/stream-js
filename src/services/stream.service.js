import wsock from "websocket-stream";
import to from "to2";
export const stream = wsock("ws://localhost:5000");

export default (state, emitter) => {
  stream.pipe(
    to((buf, enc, next) => {
      emitter.emit("newMsg", buf.toString());
      next();
    })
  );
};
