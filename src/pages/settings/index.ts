import Page from "../../core/templates/page";
import { IdPage } from "../models";

class SettingsPage extends Page {
  static TextObject = {
    MainTitle: "Settings Page",
  };

  constructor(id: IdPage) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default SettingsPage;
