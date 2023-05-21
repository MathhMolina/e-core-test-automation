class InvoiceDetailsPage {
	BookingCode = () => cy.get("td").contains("Booking Code").siblings("td");
	Room = () => cy.get("td").contains("Room").siblings("td");
	TotalStayCount = () =>
		cy.get("td").contains("Total Stay Count").siblings("td");
	TotalStayAmount = () =>
		cy.get("td").contains("Total Stay Amount").siblings("td");
	CheckIn = () => cy.get("td").contains("Check-In").siblings("td");
	CheckOut = () => cy.get("td").contains("Check-Out").siblings("td");
	CustomerDetails = () =>
		cy.get("h5").contains("Customer Details").siblings("div");
	DepositNow = () => cy.get("thead ~ tbody > tr > td:first-child");
	TaxVAT = () => cy.get("thead ~ tbody > tr > td:nth-child(2)");
	TotalAmount = () => cy.get("thead ~ tbody > tr > td:nth-child(3)");
	HotelName = () => cy.get("h4");
	InvoiceDate = () => cy.get("div > ul > li:first-child");
	DueDate = () => cy.get("div > ul > li:nth-child(2)");
	InvoiceNumber = () => cy.get("h6");
}

export default new InvoiceDetailsPage();
