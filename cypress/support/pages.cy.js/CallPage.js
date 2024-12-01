class CallPage {
  // Locators for the call page
  getContactList() {
    return cy.get('.contact-list'); 
  }

  getSearchField() {
    return cy.get('.contact-search'); 
  }

  getContact(contactName) {
    return cy.get('.contact-list').contains(contactName); 
  };

  getCallStatus() {
    return cy.get('#call_status'); 
  }

  // Actions for the call page
  initiateCallFromContact(contactName) {
    
    this.getContactList().click(); 

    if (this.getSearchField().should('be.visible')) {
      this.getSearchField().type(contactName); 
    }

    this.getContact(contactName).click(); 

    // Start the call
    this.getStartCallButton().click();
  }

  validateCallStatus(expectedStatus) {
    this.getCallStatus().should('contain.text', expectedStatus);
  }
}

export default CallPage;
