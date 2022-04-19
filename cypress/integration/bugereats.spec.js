/// <reference types="cypress" />

import { curry, xorBy } from "lodash";

describe('Testes BugEats', () => {
    it('Testes de aceitação app BugerEats', () => {
        cy.visit('https://buger-eats.vercel.app/');
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
        cy.get('strong').click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Diogo Borba');
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('80322972011');
        cy.get(':nth-child(3) > :nth-child(1) > input').type('dsdborba@gmail.com');
        cy.get(':nth-child(3) > :nth-child(2) > input').type('51992885939');
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('91270650');
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click();
        cy.get(':nth-child(4) > :nth-child(1) > input').type('3300');
        cy.get(':nth-child(4) > :nth-child(2) > input').type('452');
        cy.get('.delivery-method > :nth-child(1) > img').click();
        cy.get('p > svg > line').click();



        
    });
});