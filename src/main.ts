import './style.css';
import { counter } from '@/components/counter/counter';
import { hero } from '@/components/hero/hero';

const setTemplate = () => {
    return `
  <div>
    <app-hero></app-hero>
    <app-counter></app-counter>
    
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
};

const target = document.querySelector<HTMLDivElement>('#app');

if (target) {
    target.innerHTML = setTemplate();
}

hero();
counter();
