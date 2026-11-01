const menuItems = [
["biryani","Veg Handi Biryani","Medium ₹150 · Large ₹250","https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85"],
["biryani","Paneer Handi Biryani","Serve 1 ₹170 · Serve 1–2 (XL) ₹300","https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85"],
["biryani","Mushroom Handi Biryani","Serve 1 ₹200 · Serve 1–2 ₹320","https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Dum Biryani","Serve 1 ₹150 · Serve 1–2 ₹260","https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Egg Biryani","Serve 1 ₹160 · Serve 1–2 ₹270","https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Biryani – Gravy","Served with egg curry · Serve 1 ₹180 · Serve 1–2 ₹290","https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Egg Dum Biryani","Serve 1 ₹130 · Serve 1–2 ₹200","https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Dum Biryani – Menu Special","Serve 1 ₹150 · Serve 1–2 ₹250","https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Mutton Dum Biryani","Serve 1 ₹250 · Serve 1–2 ₹320","https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Paneer Dum Biryani","Serve 1 ₹150 · Serve 1–2 ₹200","https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Egg Dum Biryani – Menu Special","Serve 1 ₹120 · Serve 2 ₹150","https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85"],

["noodles","Veg Chowmein","₹80 / ₹120","https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85"],
["noodles","Paneer Chowmein","₹120 / ₹180","https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85"],
["noodles","Mushroom Chowmein","₹200","https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85"],
["noodles","Veg Mix Chowmein","₹220","https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85"],
["noodles","Egg Chowmein","₹100 / ₹140","https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85"],
["noodles","Chicken Chowmein","₹120 / ₹180","https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85"],
["noodles","Egg Chicken Chowmein","₹130 / ₹200","https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85"],

["chinese","Veg Manchurian (4 pcs / 8 pcs)","₹120 / ₹170","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["chinese","Veg Manchurian Dry (4 pcs / 8 pcs)","₹120 / ₹180","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["chinese","Paneer Chilly (4 pcs / 8 pcs)","₹130 / ₹210","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["chinese","Paneer Chilly Dry (4 pcs / 8 pcs)","₹130 / ₹210","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["chinese","Paneer Pops Chilly (Dry / Semi Gravy)","₹200","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["chinese","Baby Corn Chilly","₹200","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["chinese","Mushroom Chilly","₹200","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["chinese","Chicken Chilly (4 pcs / 8 pcs, B/L)","₹130 / ₹200","https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"],
["chinese","Chicken Chilly Dry (4 pcs / 8 pcs, B/L)","₹140 / ₹210","https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"],

["main","Paneer / Mushroom Masala (4 pcs / 8 pcs)","₹170 / ₹280","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["main","Paneer / Mushroom Butter Masala (4 pcs / 8 pcs)","₹200 / ₹320","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["main","Kadhai Paneer / Mushroom (4 pcs / 8 pcs)","₹180 / ₹290","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["main","Paneer / Mushroom Do Pyaza (4 pcs / 8 pcs)","₹180 / ₹290","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["main","Delhi Paneer Butter Masala","₹380","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["main","Butter Smokey Egg Curry (2 pcs / 4 pcs)","₹80 / ₹150","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["main","Chicken Masala (2 pcs / 4 pcs)","₹170 / ₹280","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["main","Chicken Butter Masala (2 pcs / 4 pcs)","₹210 / ₹320","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["main","Butter Chicken (2 pcs / 4 pcs)","₹200 / ₹310","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["main","Kadhai Handi (2 pcs / 4 pcs)","₹190 / ₹290","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["main","Delhi Chicken Butter Masala (4 pcs)","₹380","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],

["rolls","Veg Roll","₹50","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Paneer Roll","₹65","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Paneer Roll","₹80","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Egg Roll","₹60","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Egg Roll","₹70","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Chicken Roll","₹70","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Chicken Roll","₹85","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Egg Chicken Roll","₹80","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Egg Double Chicken Roll","₹90","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Egg Double Paneer Roll","₹100","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],

["drinks","Cold Drink","₹25 / ₹45","https://images.unsplash.com/photo-1513558161293-cde?auto=format&fit=crop&w=900&q=85"],
["drinks","Virgin Mojito","₹70","https://images.unsplash.com/photo-1513558161293-cde?auto=format&fit=crop&w=900&q=85"],
["drinks","Green Mint Mojito","₹80","https://images.unsplash.com/photo-1513558161293-cde?auto=format&fit=crop&w=900&q=85"],
["drinks","Blue Lagoon Mojito","₹80","https://images.unsplash.com/photo-1513558161293-cde?auto=format&fit=crop&w=900&q=85"],
["drinks","Zeera Masala Mojito","₹70","https://images.unsplash.com/photo-1513558161293-cde?auto=format&fit=crop&w=900&q=85"],
["drinks","Pink Lady","₹100","https://images.unsplash.com/photo-1513558161293-cde?auto=format&fit=crop&w=900&q=85"],

["extras","Steam Rice","₹80","https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85"],
["extras","Laccha Paratha","₹35","https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"],
["extras","Extra Rice – Mini Cup","₹40","https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85"],
["extras","Extra Rice – Medium Bowl","₹80","https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85"],
["extras","Extra Chicken","₹80","https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"],
["extras","Boiled Egg","₹10","https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85"],
["extras","Water","₹20","https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85"]
];

const grid = document.querySelector('#menuGrid');

function renderMenu(filter = 'all') {
  if (!grid) return;

  grid.innerHTML = '';

  menuItems
    .filter(item => filter === 'all' || item[0] === filter)
    .forEach(([cat, name, price, img]) => {
      const card = document.createElement('article');
      card.className = 'food-card';

      const image = document.createElement('img');
      image.src = img;
      image.alt = name;
      image.loading = 'lazy';

      const info = document.createElement('div');
      info.className = 'food-info';

      const title = document.createElement('div');
      title.className = 'food-title';

      const heading = document.createElement('h3');
      heading.textContent = name;

      const priceElement = document.createElement('b');
      priceElement.textContent = price;

      title.append(heading, priceElement);
      info.append(title);

      const label = document.createElement('span');
      label.className = 'tag';

      label.textContent = cat
        .replace('biryani', 'HYDERABADI BIRYANI')
        .replace('noodles', 'CHOWMEIN / NOODLES')
        .replace('chinese', 'CHINESE STARTERS')
        .replace('main', 'MAIN COURSE')
        .replace('rolls', 'KOLKATA ROLLS')
        .replace('drinks', 'DRINKS / MOJITO')
        .replace('extras', 'RICE & EXTRAS')
        .toUpperCase();

      info.append(label);
      card.append(image, info);
      grid.append(card);
    });
}

// Display all menu items
renderMenu();

// Category filter buttons
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    renderMenu(button.dataset.filter);
  });
});

// Mobile navigation toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Automatically update copyright year
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
