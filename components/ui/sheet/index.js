// index.js
export { default as SheetOverlay } from './SheetOverlay.svelte';
export { default as SheetPortal } from './SheetPortal.svelte';
export const sheetTransitions = {
    right: { in: { duration: 300 }, out: { duration: 300 } },
    // Добавьте другие стороны и их переходы
};
export const sheetVariants = (options) => {
    // Ваша логика для обработки вариантов
};
