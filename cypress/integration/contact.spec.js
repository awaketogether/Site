/// <reference types="cypress" />

context('Contact Page', () => {
    beforeEach(() => {
        cy.visit('/contact');
    });

    describe('Verify Sections', () => {
        it('Should contain a header section', () => {
            cy.get('[data-cy=header]');
            cy.contains('about');
            cy.contains('team');
            cy.contains('contact');
            cy.contains('faq');
            cy.contains('privacy');
        });

        it('Should contain a newsletter form', () => {
            cy.get('#newsletter');
        });

        it('Should contain a contact form', () => {
            cy.get('#contact');
        });
    });

    describe('Contact Form', () => {
        it('Should contain a form structure', () => {
            const section = cy.get('#contact');

            section.find('form');
            section.get('h1');
            section.get('h3');

            section.get('#input-name');
            section.get('#input-email');
            section.get('#input-message');
            section.get('button');
        });

        it('Should be able to use the form', () => {
            const section = cy.get('#contact');

            section.find('form');
            section.get('input[name="name"]')
                .type('Molly')
                .should('have.value', 'Molly');
            section.get('input[name="email"]')
                .type('hello@hello.com')
                .should('have.value', 'hello@hello.com');
            section.get('textarea[name="message"]')
                .type('This is my cypress E2E test!')
                .should('have.value', 'This is my cypress E2E test!');
        });
    });
});