let fetchPolyfill;

before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';

    cy.request(polyfillUrl)
    .then((response) => {
        fetchPolyfill = response.body;
    });

    cy.visit('http://127.0.0.1:5500', {
        onBeforeLoad(contentWindow) {
            delete contentWindow.fetch;
            contentWindow.eval(fetchPolyfill);
            contentWindow.fetch = contentWindow.unfetch;
        },
    });
});


describe ('Verificar funcionamiento de los botones',() => {
    it('Verificar funcionamiento de boton Home',()=>{
        cy.get('#homebutton').click()
        cy.contains('Next generation')
    })
    it('Verificar funcionamiento de boton About',()=>{
        cy.get('#aboutbutton').click()
        cy.contains('One app for all things money')
    })
    it('Verificar funcionamiento de boton Contact',()=>{
        cy.get('#contactbutton').click()
        cy.contains('How can we help you?')
    })
})