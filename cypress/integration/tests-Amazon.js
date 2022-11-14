function add5Items() {
    cy.get('#twotabsearchtextbox').type('Lápis Grafite{enter}')
    cy.contains('Lápis Grafite Nº 2B Redondo, Faber-Castell, SM1210PER, EcoLápis, Pérola, 4 Unidades').click()
    cy.get('input[title="Adicionar ao carrinho"]').click()
    
    cy.get('#twotabsearchtextbox').type('Borracha{enter}')
    cy.contains('Borracha Branca, Faber-Castell, Dust Free, SM/187137, 2 Unidades').click()
    cy.get('input[title="Adicionar ao carrinho"]').click()

    cy.get('#twotabsearchtextbox').type('Caneta{enter}')
    cy.contains('Caneta Esferográfica BIC Cristal Fashion, 12 Cores Vibrantes, Ponta Média de 1.2mm, 970910, Blister 1 Unidade').click()
    cy.get('input[title="Adicionar ao carrinho"]').click()

    cy.get('#twotabsearchtextbox').type('Apontador{enter}')
    cy.contains('Apontador com Deposito Plástico, Faber-Castell, SM/060124ZF, Cores Sortidas').click()
    cy.get('input[title="Adicionar ao carrinho"]').click()
    
    cy.get('#twotabsearchtextbox').type('Corretivo Escolar{enter}')
    cy.contains('Corretivo, Faber-Castell, SM/107070, Branca ').click()
    cy.get('input[title="Adicionar ao carrinho"]').click()
}

describe('Amazon', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/')
        cy.reload()
    })

    afterEach(() => {
        cy.wait(2000)
    })

    it('1.3	Verifique se o sistema pode remover itens cadastrados.', () => {
        cy.get('#twotabsearchtextbox').type('Borracha{enter}')
        cy.contains('Borracha Branca, Faber-Castell, Dust Free, SM/187137, 2 Unidades').click()
        cy.get('input[title="Adicionar ao carrinho"]').click()
        cy.get('#nav-cart').click()
        cy.get('input[value="Excluir"][data-action="delete"]').click()
    })

    it('1.4	Verifique se um novo item pode ser cadastrado.', () => {
        cy.get('#twotabsearchtextbox').type('Lápis Grafite{enter}')
        cy.contains('Lápis Grafite Nº 2B Redondo, Faber-Castell, SM1210PER, EcoLápis, Pérola, 4 Unidades').click()
        cy.get('input[title="Adicionar ao carrinho"]').click()
        cy.get('#nav-cart').click()
    })

    it('1.5	Verifique se os produtos buscados podem ser agrupados por categoria.', () => {
        cy.get('#nav-hamburger-menu').click()
        cy.wait(3000)
        cy.get('a[data-menu-id="8"]').contains('Alimentos e Bebidas').click()
        cy.get('ul[data-menu-id="8"]').contains('Tudo em Alimentos e Bebidas').click()
        cy.get('img[alt="Navegue por categoria"]').scrollIntoView()
    })
    
    it('1.6	Verifique se as informações dos fornecedores cadastrados possam ser consultadas pelos usuários.', () => {
        cy.get('#twotabsearchtextbox').type('Playstation 5{enter}')
        cy.contains('Console PlayStation®5 + Horizon Forbidden West').click()
        cy.get('#bylineInfo').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        cy.get('li > a > span').contains('Pré-vendas e Lançamentos').click({ force: true })
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })
        
    it('1.7	Verifique se as informações úteis cadastradas possam ser consultadas.', () => {
        cy.get('#twotabsearchtextbox').type('Xbox{enter}')
        cy.contains('Xbox Series S').click()
        cy.get('h2').contains('Detalhes do produto').scrollIntoView({ duration: 2000 })
        cy.wait(2000)
        cy.get('h2').contains('Procurando informações específicas?').scrollIntoView({ duration: 2000 })
        cy.wait(2000)
        cy.get('h3').contains('Principais avaliações do Brasil').scrollIntoView({ duration: 2000 })
    })

    it('1.9	Verifique se o sistema é capaz de buscar e mostrar informações atualizadas de experiências e opiniões de outros usuários.', () => {
        cy.get('#twotabsearchtextbox').type('Playstation 5{enter}')
        cy.contains('Console PlayStation®5 + Horizon Forbidden West').click()
        cy.scrollTo('0%', '50%', {  duration: 2000 })
        cy.get('a.a-link-normal.5star').contains('5 estrelas').click()
        cy.get('#sort-order-dropdown').select('recent', { force: true })
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })

    it('3.1	Navegue através de todos os use cases, verificando que cada tela de interface gráfica pode ser rapidamente entendida e facilmente utilizada.', () => {
        cy.get('a').contains('Mais Vendidos').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        cy.get('a').contains('Eletrônicos').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        cy.get('a[aria-label="Ofertas"]').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        cy.get('#nav-cart').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })

    it('3.2	Verifique se toda ajuda online funciona', () => {
        cy.get('a').contains('Ajuda').click()
        cy.get('img[alt="Amazon e COVID-19"]').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        cy.go('back')
        cy.get('li.csg-category').contains('Onde está meu pedido?').trigger('mouseover')
        cy.wait(1000)
        cy.get('li.csg-category').contains('Pagamento, preços e promoções').trigger('mouseover')
        cy.wait(1000)
        cy.get('li.csg-category').contains('Devoluções e reembolsos').trigger('mouseover')
        cy.wait(1000)
        cy.get('li.csg-category').contains('Gerenciando sua conta').trigger('mouseover')
        cy.wait(1000)
        cy.get('li.csg-category').contains('Pedidos').trigger('mouseover')
        cy.wait(1000)
        cy.get('a[href="https://www.amazon.com.br/gp/help/customer/contact-us?ref=footer_gw_m_b_cu"]').click()
    })

    it('4.1	Verifique se o tempo de resposta das iterações e alterações entre as interfaces.', () => {
        cy.get('a').contains('Mais Vendidos').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        cy.get('a').contains('Games e Consoles').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        cy.get('a[aria-label="PC"]').get('span.nav-a-content').contains('PC').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })

    it('4.2	Verifique se o tempo de resposta para operações que envolvam dados multimídia (imagens, vídeos etc.) não ultrapassam 30 segundos.', () => {
        cy.get('#twotabsearchtextbox').type('a{enter}')
        cy.get('#s-result-sort-select').select('review-rank', { force: true })
        cy.get('span', { timeout: 10000 }).contains('RESULTADOS')
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })

    it('4.3 Verificar a resposta do sistema com a inclusão 5 produtos.', () => {
        add5Items()
        cy.get('#nav-cart').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })

    it('4.4	Verificar a resposta do sistema com a inclusão 10 produtos.', () => {
        add5Items()
        add5Items()
        cy.get('#nav-cart').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })

    it('4.5	Verificar a resposta do sistema com a inclusão 15 produtos.', () => {
        add5Items()
        add5Items()
        add5Items()
        cy.get('#nav-cart').click()
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })

    it('4.6	Verificar a resposta do sistema na busca dos produtos.', () => {
        cy.get('#twotabsearchtextbox').type('a{enter}')
        cy.scrollTo('0%', '100%', {  duration: 2000 })
        
        cy.get('#twotabsearchtextbox').clear().type('Playstation 5{enter}')
        cy.scrollTo('0%', '100%', {  duration: 2000 })
    })
})
