import loginPage from "../pages/login-page";

Cypress.Commands.add("login", () => {
	cy.session("login", () => {
		cy.visit("/");
		cy.fixture("login/login-successful-fixture").then((userData) => {
			loginPage.Login(userData.Username, userData.Password);
		});
	});
});
