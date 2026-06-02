/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

import commum_page from "../support/pages/commum_page"
import login_page from "../support/pages/login_page"

describe ('Login', () => {

    beforeEach(' Acessar Login', () => {
        commum_page.acessarLogin()
    })

    it ('Campo E-mail vazio', () => {
        login_page.clicarCadastrar()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it ('Campo E-mail inválido', () => {
        login_page.preencheEmail('inválido')
         login_page.clicarCadastrar()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it ('Campo senha vazio', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.clicarCadastrar()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it ('Campo senha inválida', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('123')
        login_page.clicarCadastrar()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it ('Login com sucesso', () => {
        const email = faker.internet.email()

        login_page.preencheEmail(email)
        login_page.preencheSenha('123456')
        login_page.clicarCadastrar()
        login_page.validarCadastro(email)


    })
})