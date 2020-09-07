/// <reference types="cypress" />

context('Home', () => {
    beforeEach(() => {
        cy.visit('/');
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

        it('Should contain a hero section', () => {
            cy.get('[data-cy=hero]');
            cy.contains('Let’s correctly detect sleep disorders.');
        });

        it('Should contain an about section', () => {
            cy.get('#about').find('img');
            cy.get('#about').find('img');
        });

        it('Should contain the team section', () => {
            cy.get('#team').find('img');
            cy.get('#team').contains('Our team');
            cy.get('#team').contains('Michele');
            cy.get('#team').contains('Simon');
            cy.get('#team').contains('Leos');
            cy.get('#team').contains('Alexandre');
            cy.get('#team').contains('Raphael');
            cy.get('#team').contains('Mathis');
        });

        it('Should contain the FAQ section', () => {
            cy.get('#faq');
        });

        it('Should contain a newsletter form', () => {
            cy.get('#newsletter');
        });
    });
});