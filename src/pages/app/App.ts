import Page from "../../core/templates/page";
import MainPage from "../main";
import { IdPage } from "../models";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";
import CorrectPage from "../../core/templates/CorrectPage";

class App {
  private container: HTMLElement;
  private initialPage: Page;
  private static ID = "root";

  static renderNewPage(idPage: IdPage) {
    document.body.innerHTML = "";
    const page = new CorrectPage(idPage);
    const getCorrectPage = page.getPage();
    if (getCorrectPage) {
      const pageHTML = getCorrectPage.render();
      document.body.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener("hashChange", () => {
      console.log("hash change");
    });
  }

  constructor() {
    this.container = this.getRoot(App.ID);
    this.initialPage = new MainPage("main-page");
  }

  private getRoot(id: string): HTMLElement {
    const rootEl = document.getElementById(id);
    if (!rootEl) {
      const bodyEl = document.body;
      const rootElCandidate = document.createElement("div");
      rootElCandidate.id = id;
      bodyEl.appendChild(rootElCandidate);
      return rootElCandidate;
    }
    return rootEl;
  }

  run() {
    App.renderNewPage("main-page");
    this.enableRouteChange();
  }
}

export default App;
