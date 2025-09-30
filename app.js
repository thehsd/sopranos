const menuData = [
    {
        title: 'Antipasti',
        items: [
            {
                title: 'Tagliere affettati e formaggi',
                subHeader: '',
                price: 16,
            },
            {
                title: 'Bufala Prosciutto',
                subHeader: '',
                price: 12,
            },

            {
                title: 'Caprese',
                subHeader: '',
                price: 12,
            },

            {
                title: 'Caponatina Agrodolce',
                subHeader: '',
                price: 9,
            },


            {
                title: 'Caponatina Agrodolce',
                subHeader: '(Berenjena salio)',
                price: 9,
            },




        ]
    },
    {
        title: 'Primi',
        items: [
            {
                title: 'Spaghettini alle Vongole',
                subHeader: '',
                price: 14,
            },

            {
                title: 'Bombolotti Cacioe Pepe',
                subHeader: '',
                price: 14,
            },


            {
                title: 'Lasagna alla Bolognese',
                subHeader: '',
                price: 11,
            },


            {
                title: 'Trofie al pesto',
                subHeader: '',
                price: 9,
            },


            {
                title: 'Carbonara',
                subHeader: '',
                price: 12,
            },


            {
                title: 'Amatriclana',
                subHeader: '',
                price: 12,
            },

        ]
    },
    {
        title: 'dolci',
        items: [
            {
                title: 'Tiramisu classico',
                subHeader: '',
                price: 5,
            },


            {
                title: 'Tiramisu Pistochio',
                subHeader: '',
                price: 6,
            },


            {
                title: 'Gelato Vaniglia Caffe',
                subHeader: '',
                price: 6,
            },
        ]
    },
    {
        title: 'secondi',
        items: [
            {
                title: 'Pollo alla cacciatora',
                subHeader: '',
                price: 16,
            },


            {
                title: 'Polpette al sugo con pecorino',
                subHeader: '',
                price: 14,
            },


            {
                title: 'Ossobuco alla Romana',
                subHeader: '',
                price: 18,
            },


            {
                title: 'Salmone al pistachio',
                subHeader: '',
                price: 20,
            },


            {
                title: 'Straccio Romano',
                subHeader: '(Carne ajo y pimienta)',
                price: 22,
            },


        ]
    },
    {
        title: 'Cocktail',
        items: [
            {
                title: 'Apérol spritz',
                subHeader: '',
                price: 5,
            },
            {
                title: 'Campari spritz',
                subHeader: '',
                price: 5,
            },
            {
                title: 'Negroni gin',
                subHeader: '',
                price: 5,
            },

            {
                title: 'Vodka Lemon',
                subHeader: '',
                price: 5,
            },
            {
                title: 'Gin lemon',
                subHeader: '',
                price: 5,
            },
            {
                title: 'Vodka menta e limone',
                subHeader: '',
                price: 0,
            },
            {
                title: 'Dry martini',
                subHeader: '',
                price: 0,
            },
            {
                title: 'Cuba libre',
                subHeader: '',
                price: 0,
            },
            {
                title: 'Cocktail più pinsa',
                subHeader: '',
                price: 12,
            },
            {
                title: 'Gli altri cocktail',
                subHeader: '',
                price: 8,
            }

        ]
    }
]
const menuItemsSection = document.querySelector('.menu-items-section');

menuData.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-items-group');
    menuItem.innerHTML = `
        <div class="menu-items-header">
            <h3>
                ${item.title.toUpperCase()}
            </h3>
        </div>
        <div class="menu-items-content">
            ${item.items.map(subItem => `
                <div class="menu-item">
                <div class="menu-item-price-top">
                ${subItem.price > 0 ? `
                            <span>€</span>
                            <span>${subItem.price}</span>
                            ` : '-'}
                        </div>
                    <div class="menu-item-info">
                        <p class="menu-item-title">
                            ${subItem.title.toUpperCase()}
                        </p>
                        <span class="menu-item-sub-header">
                            ${subItem.subHeader.toUpperCase()}
                        </span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    menuItemsSection.appendChild(menuItem);
});
