// import: serve para trazer funções de outro lugar para que possamos utilizá-las no nosso arquivo.
// test: é usado para criar e organizar nossos testes automatizados.
// expect: é usado para verificar se o resultado do teste está de acordo com o que esperamos.
import { test, expect } from '@playwright/test';

test.describe('TAT CSC form', () => {

  test.beforeEach(async ({ page }) => {
    // Abre a página antes de cada teste.
    await page.goto('/index.html')
  })

  test('Envio Formulário com Sucesso', async ({ page }) => {
    
    // localizando e escrevendo no Campo First Name
    await page.getByLabel('First name').fill('João')

    // Localizando e escrevendo no campo Last name
    await page.getByLabel('Last name').fill('Silva Sousa')

    // Localizando e escrevendo no campo E-mail
    await page.getByLabel('Email').fill('teste@teste.com.br')

    // Usando o Localizados id
    // locator('#open-text-area'): localiza o elemento pelo id. O # indica que estamos procurando um id no CSS.
    await page.locator('#open-text-area').fill('Estou gostando muito do atendimento!');

    // Clicando na Opção Enviar
    await page.getByRole('button', { name: 'Send' }).click()

    // Faz asserção do texto exato renderizado dentro do elemento
    await expect(page.locator('.success')).toBeVisible()
    await expect(page.locator('.success')).toHaveText('Message successfully sent.')

  })

    test('Envio Formulário com Falha - Campos sem Prrenchimento', async ({ page }) => {
    
    // localizando e escrevendo no Campo First Name
    await page.getByLabel('First name').fill('João')
    await page.getByLabel('First name').clear() // Apagando o nome

    // Localizando e escrevendo no campo Last name
    await page.getByLabel('Last name').fill('Silva Sousa')
    await page.getByLabel('Last name').clear() // Apagando

    // Localizando e escrevendo no campo E-mail
    await page.getByLabel('Email').fill('teste@teste.com.br')
    await page.getByLabel('Email').clear()

    // Usando o Localizados id
    // locator('#open-text-area'): localiza o elemento pelo id. O # indica que estamos procurando um id no CSS.
    await page.locator('#open-text-area').fill('Estou gostando muito do atendimento!')
    await page.locator('#open-text-area').clear()

    // Clicando na Opção Enviar
    await page.getByRole('button', { name: 'Send' }).click()

    // Faz asserção do texto exato renderizado dentro do elemento
    await expect(page.locator('.error')).toBeVisible()
    await expect(page.locator('.error')).toHaveText('Validate the required fields!')

  })

    test('Envio Formulário com Falha -E-mail Incorreto', async ({ page }) => {
    
    // localizando e escrevendo no Campo First Name
    await page.getByLabel('First name').fill('João')

    // Localizando e escrevendo no campo Last name
    await page.getByLabel('Last name').fill('Silva Sousa')

    // Localizando e escrevendo no campo E-mail
    await page.getByLabel('Email').fill('testeteste.com.br')

    // Usando o Localizados id
    // locator('#open-text-area'): localiza o elemento pelo id. O # indica que estamos procurando um id no CSS.
    await page.locator('#open-text-area').fill('Estou gostando muito do atendimento!')

    // Clicando na Opção Enviar
    await page.getByRole('button', { name: 'Send' }).click()

    // Faz asserção do texto exato renderizado dentro do elemento
    await expect(page.locator('.error')).toBeVisible()
    await expect(page.locator('.error')).toHaveText('Validate the required fields!')

  })


})