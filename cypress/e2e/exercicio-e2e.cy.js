/// <reference types="cypress" />

import EnderecoPage from '../support/page_objects/endereco.page'
//const dadosEndereco = require('../fixtures/endereco.json')
describe('Funcionalidade Página de Produtos', () => {

before(() => {
cy.visit('produtos/')
});

it('Deve adicionar 4 produtos ao carrinho e ir para o checkout', () => {
    cy.addProdutos('Aero Daily Fitness Tee', 'L', 'Black', 4)
    cy.get('button').contains('Comprar').click()
    cy.get('a').contains('Ver carrinho').click()
    cy.get('a').contains('Concluir compra').click()
    cy.get('h3').contains('Detalhes de faturamento')
          
});
    it('Deve fazer checkout', () => {
        EnderecoPage.editarEnderecoFaturamento('ana', 'euzebio')
        cy.get('input[id="payment_method_cod"]').click()
        cy.get('input[class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"]').click({ multiple: true });
        cy.get('input[name="woocommerce_checkout_place_order"').click();
});
});

