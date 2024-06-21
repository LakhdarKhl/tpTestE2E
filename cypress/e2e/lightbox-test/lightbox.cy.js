/// <reference types="cypress" />

describe('Lightbox Tests', () => {
    beforeEach(() => {
      // Remplacez l'URL par le chemin vers votre fichier HTML ou l'URL où l'application est hébergée
      cy.visit('./components/lightbox.html');
    });
  
    it('should open the lightbox on image click', () => {

      //test de clic de l'img, ne pas oublier, mettre en premier l'encrage dans l'html, tjrs modifier l'html puis le réutiliser dans le code
        cy.get('[data-cy=thumbnail]').click();
        cy.dataCy('lightbox').should('be.visible');


    });

    it('should close the tab on clic outside ', () => {

      cy.get('[data-cy=thumbnail]').click();
      cy.get('[x-show="isLightboxVisible"]', { timeout: 5000 }).should('be.visible');
      cy.get('[data-cy=lightbox-overlay]').click('topLeft');
      cy.get('[data-cy=lightbox-overlay]', { timeout: 5000 }).should('be.visible');
    });

    it('should add like counter and update counter', () => {
    cy.get('[data-cy=like').click();
    cy.get('[clicked()]').should('be.true');
    })



  });
  