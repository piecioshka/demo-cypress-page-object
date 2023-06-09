export class BlogPage {
  url = "https://piecioshka.pl/blog/";

  open() {
    cy.visit(this.url);
  }

  getPageTitle() {
    return cy.get("h1");
  }
}
