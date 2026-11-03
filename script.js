const menuItems = [
["biryani","Veg Handi Biryani","Medium ₹150 · Large ₹250","https://images.unsplash.com/photo-1697155406055-2db32d47ca07?auto=format&fit=crop&w=900&q=85"],
["biryani","Paneer Handi Biryani","Serve 1 ₹170 · Serve 1–2 (XL) ₹300","https://images.unsplash.com/photo-1684409642850-b48e5ab8e67c?auto=format&fit=crop&w=900&q=85"],
["biryani","Mushroom Handi Biryani","Serve 1 ₹200 · Serve 1–2 ₹320","https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Dum Biryani","Serve 1 ₹150 · Serve 1–2 ₹260","https://images.unsplash.com/photo-1782541370275-6761522e39d1?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Egg Biryani","Serve 1 ₹160 · Serve 1–2 ₹270","https://images.unsplash.com/photo-1764315652645-81e5c2bdafb9?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Biryani – Gravy","Served with egg curry · Serve 1 ₹180 · Serve 1–2 ₹290","https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Egg Dum Biryani","Serve 1 ₹130 · Serve 1–2 ₹200","https://images.unsplash.com/photo-1644677859249-e0c8f5b4a74b?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Chicken Dum Biryani – Menu Special","Serve 1 ₹150 · Serve 1–2 ₹250","https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Mutton Dum Biryani","Serve 1 ₹250 · Serve 1–2 ₹320","https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Paneer Dum Biryani","Serve 1 ₹150 · Serve 1–2 ₹200","https://images.unsplash.com/photo-1642972420043-4736c570a716?auto=format&fit=crop&w=900&q=85"],
["biryani","Hyderabadi Egg Dum Biryani – Menu Special","Serve 1 ₹120 · Serve 2 ₹150","https://images.unsplash.com/photo-1681546898018-961e2a05c6fa?auto=format&fit=crop&w=900&q=85"],

["noodles","Veg Chowmein","₹80 / ₹120","https://images.unsplash.com/photo-1634864572865-1cf8ff8bd23d?auto=format&fit=crop&w=900&q=85"],
["noodles","Paneer Chowmein","₹120 / ₹180","https://images.unsplash.com/photo-1757445060049-0531425f8643?auto=format&fit=crop&w=900&q=85"],
["noodles","Mushroom Chowmein","₹200","https://images.unsplash.com/photo-1772729219154-2f5d5ddd732b?auto=format&fit=crop&w=900&q=85"],
["noodles","Veg Mix Chowmein","₹220","https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85"],
["noodles","Egg Chowmein","₹100 / ₹140","https://images.unsplash.com/photo-1733907557440-e8f8e179cd56?auto=format&fit=crop&w=900&q=85"],
["noodles","Chicken Chowmein","₹120 / ₹180","https://images.unsplash.com/photo-1781332152753-1199601d73d2?auto=format&fit=crop&w=900&q=85"],
["noodles","Egg Chicken Chowmein","₹130 / ₹200","https://images.unsplash.com/photo-1705088294364-05f713d9f0d5?auto=format&fit=crop&w=900&q=85"],

["chinese","Veg Manchurian (4 pcs / 8 pcs)","₹120 / ₹170","https://images.unsplash.com/photo-1632992468854-7b1d83134bc4?auto=format&fit=crop&w=900&q=85"],
["chinese","Veg Manchurian Dry (4 pcs / 8 pcs)","₹120 / ₹180","https://images.unsplash.com/photo-1682622110433-65513a55d7da?auto=format&fit=crop&w=900&q=85"],
["chinese","Paneer Chilly (4 pcs / 8 pcs)","₹130 / ₹210","https://images.unsplash.com/photo-1781332146569-9c5093bc2ca5?auto=format&fit=crop&w=900&q=85"],
["chinese","Paneer Chilly Dry (4 pcs / 8 pcs)","₹130 / ₹210","https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85"],
["chinese","Paneer Pops Chilly (Dry / Semi Gravy)","₹200","https://images.unsplash.com/photo-1775717427684-75b886ebbfc9?auto=format&fit=crop&w=900&q=85"],
["chinese","Baby Corn Chilly","₹200","https://images.unsplash.com/photo-1781941622545-911ee391c451?auto=format&fit=crop&w=900&q=85"],
["chinese","Mushroom Chilly","₹200","https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&w=900&q=85"],
["chinese","Chicken Chilly (4 pcs / 8 pcs, B/L)","₹130 / ₹200","https://images.unsplash.com/photo-1645066803665-d16a79a21566?auto=format&fit=crop&w=900&q=85"],
["chinese","Chicken Chilly Dry (4 pcs / 8 pcs, B/L)","₹140 / ₹210","https://images.unsplash.com/photo-1710508774177-7ac2f3492675?auto=format&fit=crop&w=900&q=85"],

["main","Paneer / Mushroom Masala (4 pcs / 8 pcs)","₹170 / ₹280","https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?auto=format&fit=crop&w=900&q=85"],
["main","Paneer / Mushroom Butter Masala (4 pcs / 8 pcs)","₹200 / ₹320","https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?auto=format&fit=crop&w=900&q=85"],
["main","Kadhai Paneer / Mushroom (4 pcs / 8 pcs)","₹180 / ₹290","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"],
["main","Paneer / Mushroom Do Pyaza (4 pcs / 8 pcs)","₹180 / ₹290","https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=900&q=85"],
["main","Delhi Paneer Butter Masala","₹380","https://images.unsplash.com/photo-1631452180539-96aca7d48617?auto=format&fit=crop&w=900&q=85"],
["main","Butter Smokey Egg Curry (2 pcs / 4 pcs)","₹80 / ₹150","https://images.unsplash.com/photo-1681546897975-592f87121960?auto=format&fit=crop&w=900&q=85"],
["main","Chicken Masala (2 pcs / 4 pcs)","₹170 / ₹280","https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?auto=format&fit=crop&w=900&q=85"],
["main","Chicken Butter Masala (2 pcs / 4 pcs)","₹210 / ₹320","https://images.unsplash.com/photo-1772730064951-89b427965dbc?auto=format&fit=crop&w=900&q=85"],
["main","Butter Chicken (2 pcs / 4 pcs)","₹200 / ₹310","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"],
["main","Kadhai Handi (2 pcs / 4 pcs)","₹190 / ₹290","https://images.unsplash.com/photo-1764304733301-3a9f335f0c67?auto=format&fit=crop&w=900&q=85"],
["main","Delhi Chicken Butter Masala (4 pcs)","₹380","https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?auto=format&fit=crop&w=900&q=85"],

["rolls","Veg Roll","₹50","https://images.unsplash.com/photo-1646530208887-8a791bff4701?auto=format&fit=crop&w=900&q=85"],
["rolls","Paneer Roll","₹65","https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Paneer Roll","₹80","https://images.unsplash.com/photo-1671572579845-52270341950f?auto=format&fit=crop&w=900&q=85"],
["rolls","Egg Roll","₹60","https://images.unsplash.com/photo-1760888548893-bc2f7e09e972?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Egg Roll","₹70","https://images.unsplash.com/photo-1666819615040-eff5e52c778a?auto=format&fit=crop&w=900&q=85"],
["rolls","Chicken Roll","₹70","https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Chicken Roll","₹85","https://images.unsplash.com/photo-1773620494884-940e0db95e46?auto=format&fit=crop&w=900&q=85"],
["rolls","Egg Chicken Roll","₹80","https://images.unsplash.com/photo-1762284513008-08f897ff5041?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Egg Double Chicken Roll","₹90","https://images.unsplash.com/photo-1719282431565-3b30bb7d2658?auto=format&fit=crop&w=900&q=85"],
["rolls","Double Egg Double Paneer Roll","₹100","https://images.unsplash.com/photo-1762284513142-e1f7d64c1d96?auto=format&fit=crop&w=900&q=85"],

["drinks","Cold Drink","₹25 / ₹45","https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?auto=format&fit=crop&w=900&q=85"],
["drinks","Virgin Mojito","₹70","https://images.unsplash.com/photo-1775717427643-2b0fc39a81f8?auto=format&fit=crop&w=900&q=85"],
["drinks","Green Mint Mojito","₹80","https://images.unsplash.com/photo-1632995561645-86a7777d3e7a?auto=format&fit=crop&w=900&q=85"],
["drinks","Blue Lagoon Mojito","₹80","https://images.unsplash.com/photo-1654074518423-750767f571a9?auto=format&fit=crop&w=900&q=85"],
["drinks","Zeera Masala Mojito","₹70","https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=900&q=85"],
["drinks","Pink Lady","₹100","https://images.unsplash.com/photo-1760754726576-cd27f9857eaf?auto=format&fit=crop&w=900&q=85"],

["extras","Steam Rice","₹80","https://images.unsplash.com/photo-1705147271933-5c7052f15a90?auto=format&fit=crop&w=900&q=85"],
["extras","Laccha Paratha","₹35","https://images.unsplash.com/photo-1788538397295-41114c76044d?auto=format&fit=crop&w=900&q=85"],
["extras","Extra Rice – Mini Cup","₹40","https://images.unsplash.com/photo-1705147289789-6df2593f1b1e?auto=format&fit=crop&w=900&q=85"],
["extras","Extra Rice – Medium Bowl","₹80","https://images.unsplash.com/photo-1606728099646-68d5a0a4d423?auto=format&fit=crop&w=900&q=85"],
["extras","Extra Chicken","₹80","https://images.unsplash.com/photo-1641873933980-fcff60026f50?auto=format&fit=crop&w=900&q=85"],
["extras","Boiled Egg","₹10","https://images.unsplash.com/photo-1577111064880-4601019411fe?auto=format&fit=crop&w=900&q=85"],
["extras","Water","₹20","https://images.unsplash.com/photo-1561041695-d2fadf9f318c?auto=format&fit=crop&w=900&q=85"]
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
      image.onerror = () => { image.onerror = null; image.src = 'hero-poster.jpg'; };

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
