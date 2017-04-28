import { configure } from '@kadira/storybook';
import "../src/global.css"

function loadStories() {
  require("../src/ChatThread/story");
  require("../src/MessageBox/story");
  require("../src/AppButton/story");
  require("../src/Avatar/story");
}

configure(loadStories, module);
