describe('Verificar la información del hotel en la página', () => {
  beforeEach(() => {
    // Navegar a la página antes de cada prueba
    cy.visit('https://automationintesting.online/');
  });

  it('Debe mostrar la dirección del hotel', () => {
   // Verifica que la dirección completa del hotel esté presente y visible
    cy.contains('Shady Meadows B&B The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
      .should('be.visible');
  });

  it('Debe mostrar el teléfono del hotel', () => {
    // Verifica que el teléfono del hotel esté presente y visible
    cy.contains('012345678901').should('be.visible');
  });

  it('Debe mostrar el email del hotel', () => {
    // Verifica que el email del hotel esté presente y visible
    cy.contains('fake@fakeemail.com').should('be.visible');
  });

  it('Debe haber al menos una imagen visible en la página', () => {
    // Verifica que al menos una imagen esté presente y visible
    cy.get('img').should('be.visible');
  });

  it('Debe mostrar el texto de bienvenida esperado', () => {
    // Verifica que el texto de bienvenida sea el correcto y esté presente
    cy.contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
      .should('be.visible');
  });
});


// Esta prueba verifica que los íconos que representan las diferentes áreas de prueba en la aplicación 
// se encuentren presentes y visibles en la página.

describe('Confirmar íconos de las áreas de prueba principales', () => {

    beforeEach(() => {
      cy.visit('https://automationintesting.online/');
    });
  
    const logos = [
      { alt: 'Magnifying glass' },  // Ícono para Exploración
      { alt: 'Brackets' },           // Ícono para Automatización
      { alt: 'Building blocks' },    // Ícono para Infraestructura
      { alt: 'Go arrow' },           // Ícono para Inicio
    ];
  
    // Recorremos la lista de "alts" esperados y generamos pruebas individuales para cada uno.
    logos.forEach((logo) => {
      it(`Debe mostrar el logo con alt: "${logo.alt}"`, () => {
        // Verificamos que la imagen con el atributo "alt" específico esté visible en la página.
        cy.get(`img[alt="${logo.alt}"]`)
          .should('be.visible')             // Verifica que la imagen sea visible.
          .and('have.attr', 'src')          // Verifica que tenga un atributo "src".
          .and('not.be.empty');             // Asegura que el "src" no esté vacío.
      });
    });
  
  });
  