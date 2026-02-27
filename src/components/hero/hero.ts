/*
Vanilla Component (2)

1. Función
2. Selector
3. Template
4. Elemento HTML a partir del template
5. Lógica
6. Renderiza
*/

import typescriptLogo from '@/assets/typescript.svg';
import viteLogo from '@/assets/vite.svg';

export const hero = () => {
    const selector = 'app-hero';
    const template =
        /*HTML*/
        `
        <a href="https://vite.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
        <h1>Vite + TypeScript 5.9</h1>
        `;

    const element = document.createElement('div');
    element.classList.add('hero');
    element.innerHTML = template;

    const target = document.querySelector(selector);
    if (!target) {
        throw new Error(
            `No se encontró el elemento con el selector ${selector}`,
        );
    }

    target.replaceWith(element);
};
