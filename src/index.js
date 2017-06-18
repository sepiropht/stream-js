import choo from "choo";
import mainView from "./components/mainView";
import Store from "./reducers/store";
import stream from "./services/stream.service";

const app = choo();
app.use(logger);
app.use(Store);
app.route("/", mainView);
app.mount("body");

function logger(state, emit) {
  emit.on("*", function(messageName, data) {
    console.log(state);
    console.log("event", messageName, data);
  });
}
app.use(stream);
