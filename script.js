 
    // ── NAV responsive
    function updateNav() {
      const deskNav = document.getElementById('desk-nav');
      const ham = document.getElementById('ham-btn');
      if (window.innerWidth >= 768) {
        deskNav.style.display = 'flex';
        ham.style.display = 'none';
      } else {
        deskNav.style.display = 'none';
        ham.style.display = 'flex';
      }
    }
    updateNav();
    window.addEventListener('resize', updateNav);

    // ── MOBILE MENU
    const ham = document.getElementById('ham-btn');
    const mMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('menu-close');
    function openMenu() { mMenu.classList.add('open'); overlay.classList.add('open'); }
    function closeMenu() { mMenu.classList.remove('open'); overlay.classList.remove('open'); }
    ham.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.mob-link').forEach(a => a.addEventListener('click', closeMenu));

    // ── SLIDER
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let cur = 0, timer;
    function goTo(i) {
      slides[cur].classList.remove('active'); dots[cur].classList.remove('active');
      cur = i; slides[cur].classList.add('active'); dots[cur].classList.add('active');
    }
    timer = setInterval(() => goTo((cur + 1) % slides.length), 5000);
    dots.forEach(d => d.addEventListener('click', () => { clearInterval(timer); goTo(+d.dataset.idx); timer = setInterval(() => goTo((cur + 1) % slides.length), 5000); }));

    // ── MENU
    const menuData = {
      coffee: [
        { name: "Latte", price: "6.2", img: "https://semicode.tech/build/assets/1-bf38d1f2.jpg" },
        { name: "Cappuccino", price: "8", img: "https://semicode.tech/build/assets/2-f5a29704.jpg" },
        { name: "Flat White", price: "7.8", img: "https://semicode.tech/build/assets/3-8ea3fe2c.jpg" },
        { name: "Flat Black", price: "4.5", img: "https://semicode.tech/build/assets/4-2e5a59f1.jpg" },
        { name: "Mocha", price: "6.4", img: "https://semicode.tech/build/assets/5-37e3bc01.jpg" },
        { name: "Cortado", price: "4.6", img: "https://semicode.tech/build/assets/6-43aba120.jpg" },
        { name: "Caramel Cortado", price: "4.8", img: "https://semicode.tech/build/assets/7-34317fe8.jpg" },
        { name: "Mocha Cortado", price: "7.2", img: "https://semicode.tech/build/assets/8-f82a4f22.jpg" },
      ],
      caramel: [
        { name: "Golden Caramel Latte", price: "6.2", img: "https://semicode.tech/build/assets/1-c20ad105.jpg" },
        { name: "Golden Caramel Iced Latte", price: "8", img: "https://semicode.tech/build/assets/2-6ea614c3.jpg" },
        { name: "Golden Caramel Cappuccino", price: "7.8", img: "https://semicode.tech/build/assets/3-f0994cae.jpg" },
        { name: "Golden Caramel Iced Cappuccino", price: "4.5", img: "https://semicode.tech/build/assets/4-d179cbf8.jpg" },
        { name: "Caramel Frostino", price: "6.4", img: "https://semicode.tech/build/assets/5-ffdedb46.jpg" },
      ],
      iced: [
        { name: "Iced Latte", price: "6.2", img: "https://semicode.tech/build/assets/1-2c9d9e43.jpg" },
        { name: "Iced Cappuccino", price: "8", img: "https://semicode.tech/build/assets/2-2b233949.jpg" },
        { name: "Cold Brew Black", price: "7.8", img: "https://semicode.tech/build/assets/3-d5193492.jpg" },
        { name: "Cold Brew Whipped", price: "4.5", img: "https://semicode.tech/build/assets/4-82a5e07b.jpg" },
        { name: "Iced Americano", price: "6.4", img: "https://semicode.tech/build/assets/5-4dbf7cc0.jpg" },
        { name: "Iced Mocha", price: "6.4", img: "https://semicode.tech/build/assets/6-8f9029a3.jpg" },
      ],
      frostino: [
        { name: "Salted Caramel Frostino", price: "6.2", img: "https://semicode.tech/build/assets/1-418d559a.jpg" },
        { name: "Ruby Chocolate Frostino", price: "8", img: "https://semicode.tech/build/assets/2-62fd5230.jpg" },
        { name: "Belgian Chocolate Frostino", price: "7.8", img: "https://semicode.tech/build/assets/3-5a40abbb.jpg" },
        { name: "Mint Choc Chip Frostino", price: "4.5", img: "https://semicode.tech/build/assets/4-6abfbeb2.jpg" },
        { name: "Strawberry Frostino", price: "6.4", img: "https://semicode.tech/build/assets/5-0708b131.jpg" },
        { name: "Coffee Chocolate", price: "6.4", img: "https://semicode.tech/build/assets/6-d360cd45.jpg" },
      ],
      fruit: [
        { name: "Fresh Lemonade", price: "6.2", img: "https://semicode.tech/build/assets/1-77f70534.jpg" },
        { name: "Mango Passion Cooler", price: "8", img: "https://semicode.tech/build/assets/2-172f96ad.jpg" },
        { name: "Red Berries Cooler", price: "7.8", img: "https://semicode.tech/build/assets/3-5fb5c772.jpg" },
        { name: "Strawberry Lemonade", price: "4.5", img: "https://semicode.tech/build/assets/4-7f797c71.jpg" },
      ],
      choco: [
        { name: "Hot Chocolate", price: "6.2", img: "https://semicode.tech/build/assets/1-0b9d57f6.jpg" },
        { name: "White Hot Chocolate", price: "8", img: "https://semicode.tech/build/assets/2-729f880a.jpg" },
        { name: "Ruby Hot Chocolate", price: "7.8", img: "https://semicode.tech/build/assets/3-df177aed.jpg" },
      ],
    };

    const fallback = [
      'https://images.unsplash.com/photo-1561882468-9110d70f098d?w=400',
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400',
      'https://images.unsplash.com/photo-1574920162043-b872873f19bc?w=400',
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400',
      'https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400',
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
    ];

    function renderMenu(cat) {
      document.getElementById('menu-grid').innerHTML = menuData[cat].map((item, i) => `
    <div class="mcard">
      <img src="${item.img}" alt="${item.name}" loading="lazy"
        onerror="this.src='${fallback[i % fallback.length]}'" />
      <div class="mcard-info">
        <h4>${item.name}</h4>
        <span>${item.price} $</span>
      </div>
    </div>
  `).join('');
    }

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.cat);
      });
    });

    renderMenu('coffee');
  