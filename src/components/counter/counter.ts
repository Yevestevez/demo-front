import './counter.css';
export const counter = () => {
    const selector = 'app-counter';
    const template =
        /*HTML*/
        `
        <div class="card">
            <button id="counter" type="button">0</button>
        </div>
        `;
    const target = document.querySelector(selector);

    if (!target) {
        throw new Error(`No se puede encontrar ${target}`);
    }

    target.outerHTML = template;

    let counter = 0;
    const element = document.querySelector('#counter') as HTMLButtonElement;
    element.addEventListener('click', () => {
        counter++;
        element.innerHTML = `${counter}`;
    });
};
