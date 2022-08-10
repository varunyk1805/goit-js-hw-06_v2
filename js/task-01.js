const items = document.querySelector('#categories').children;

console.log(`Number of categories: ${items.length}`);

[...items].map(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});