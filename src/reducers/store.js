export default (state, emitter) => {
  state.count = 0;
  state.msg = [];
  emitter.on("increment", function(count) {
    state.count += count;
    emitter.emit("render");
  });
  emitter.on("newMsg", function(msg) {
    state.msg.push(msg);
    emitter.emit("render");
  });
};
