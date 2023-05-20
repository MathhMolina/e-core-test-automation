class LoginPage {
	Username = () => cy.get("input[name=username]");
	Password = () => cy.get("input[name=password]");
	LoginButton = () => cy.get("button[type=submit]");
	Alert = () => cy.get("div[role=alert]");

	Login(username, password) {
		this.Username().type(username);
		this.Password().type(password);
		this.LoginButton().click();
	}
}

export default new LoginPage();
