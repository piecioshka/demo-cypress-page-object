import { BlogPage } from "./blog-page.po";

export class HomePage {
  url = "https://piecioshka.pl";

  open() {
    cy.visit(this.url);
  }

  getBlogLink() {
    return cy.get('a[href="/blog/"]');
  }

  openBlogPage() {
    this.getBlogLink().click();
    return new BlogPage();
  }
}
