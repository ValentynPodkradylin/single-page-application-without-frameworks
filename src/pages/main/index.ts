import Page from "../../core/templates/page";
import { IdPage } from "../models";

class MainPage extends Page {
  static TextObject = {
    MainTitle: "Main Page 123",
  };

  constructor(id: IdPage) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
