import Page from "../../core/templates/page";
import MainPage from "../main";
import { IdPage } from "../models";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";

class CorrectPage {
  private pageId: IdPage;

  constructor(id: IdPage) {
    this.pageId = id;
  }

  getPage(): Page | null {
    let page: Page | null = null;

    switch (this.pageId) {
      case "main-page": {
        return (page = new MainPage(this.pageId));
      }
      case "settings-page": {
        return (page = new SettingsPage(this.pageId));
      }
      case "statistics-page": {
        return (page = new StatisticsPage(this.pageId));
      }
      default: {
        ((x: never) => {
          throw new Error(`${x} was unhandled!`);
        })(this.pageId);
      }
    }
  }
}

export default CorrectPage;
