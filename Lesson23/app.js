const apiRequest = fetch('https://dummyjson.com/products?limit=15&skip=5')
  .then((res) => res.json())
  .then((data) => {
    console.log('data.products', data.products);
    const allProducts = [...data.products];
    for (let i = 0; i < allProducts.length; i++) {
      createProductCart(allProducts[i]);
    }
  })
  .catch((error) => console.error(error));

console.log('apiRequest', apiRequest);

function createProductCart(product) {
  const row = document.createElement('div');
  row.classList.add(
    'p-4',
    'flex',
    'items-stretch',
    'justify-between',
    'gap-4',
    'rounded-xl',
  );

  const div2 = document.createElement('div');
  div2.classList.add('flex', 'flex-[2_2_0px]', 'flex-col', 'gap-4');

  const div3 = document.createElement('div');
  div3.classList.add('flex', 'flex-col', 'gap-1');

  const h2 = document.createElement('h2');
  h2.classList.add('text-[#1b0e0f]', 'text-base', 'font-bold', 'leading-tight');
  h2.textContent = product.title;

  const button = document.createElement('button');
  button.classList.add(
    'flex',
    'min-w-[84px]',
    'max-w-[480px]',
    'cursor-pointer',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'rounded-full',
    'h-8',
    'px-4',
    'flex-row-reverse',
    'bg-[#f3e7e8]',
    'text-[#1b0e0f]',
    'text-sm',
    'font-medium',
    'leading-normal',
    'w-fit',
  );
  button.textContent = 'Add to Cart';

  div3.appendChild(h2);
  div2.appendChild(div3);
  div2.appendChild(button);
  row.appendChild(div2);

  document.getElementById('main').appendChild(row);
}
