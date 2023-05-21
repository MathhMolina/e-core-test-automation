class InvoiceListPage {
	InvoiceList = () => cy.get("div.row");
	InvoiceListHeader = () => cy.get("h2");
	InvoiceDetailsLink = (index) =>
		cy
			.get(`div > div.row:nth-child(${index + 2})`)
			.contains("Invoice Details");
}

export default new InvoiceListPage();
