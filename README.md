# Web Design Integration

Intégration fidèle d'une maquette graphique d'une boutique de meubles de salon, en HTML5 et CSS3, adaptée aux écrans desktop et mobiles.

## Technologies

- HTML5
- CSS3
- Git / GitHub

## Structure du projet

```
.
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/        # images produits
│   └── js/
│       └── stars.js
├── integration-design-and-assets/  # maquettes et icônes source
└── README.md
```

## Fonctionnalités

- Page d'accueil boutique : header, recherche, tri, filtres (collection, couleur, catégorie, prix), grille de produits, pagination.
- Responsive : adaptation desktop (1440px) et mobile (320px).
- Utilisation de CSS Grid pour la mise en page.
- Typographies : Avenir (locale/licence) avec fallback Roboto (Google Fonts).
- SEO : balises meta, titre, description, alt des images, structure sémantique.

## Utilisation

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un serveur statique :

```bash
python3 -m http.server 8000
```

Puis visiter http://localhost:8000.

## Git / GitHub

Dépôt initialisé localement. Pour publier :

```bash
git remote add origin <url-du-depot>
git push -u origin master
```
