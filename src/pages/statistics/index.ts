import Page from "../../core/templates/page";
import { IdPage } from "../models";

class StatisticsPage extends Page {
  static TextObject = {
    MainTitle: "Statistics Page",
  };
  constructor(id: IdPage) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle);
    this.container.append(title);

    return this.container;
  }
}

export default StatisticsPage;
