# EMSI Website Clone

Un clone moderne du site web EMSI (École Marocaine des Sciences de l'Ingénieur) développé avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

- 🎨 Design moderne et responsive
- 🏫 Section héro avec présentation de l'école
- 📊 Chiffres clés animés (39 ans d'expérience, 19 campus, 20K diplômés)
- 🎓 Section formations avec 6 filières d'ingénierie
- 💼 Section employabilité et centres de carrières
- 🔬 Section recherche et innovation
- 🏢 Section campus avec localisation des 19 sites
- 📰 Section actualités avec articles récents
- 📝 Formulaire d'inscription fonctionnel
- 🍪 Bannière de gestion des cookies
- 📱 Navigation mobile responsive

## Technologies utilisées

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Express.js + TypeScript
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod
- **Database**: PostgreSQL avec Drizzle ORM

## Installation et utilisation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <url-du-repo>
cd emsi-website-clone

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5000`

### Scripts disponibles
- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build

## Structure du projet

```
├── client/                 # Application React
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── pages/         # Pages de l'application
│   │   ├── lib/           # Utilitaires et configuration
│   │   └── hooks/         # Hooks personnalisés
├── server/                # Serveur Express
├── shared/                # Types et schémas partagés
└── attached_assets/       # Assets fournis
```

## Composants principaux

- **Header**: Navigation avec réseaux sociaux et CTA d'inscription
- **Hero**: Section principale avec titre et boutons d'action
- **KeyFigures**: Chiffres clés avec animation au scroll
- **Formations**: Présentation des 6 filières d'ingénierie
- **Employability**: Services d'accompagnement professionnel
- **Research**: Stratégie de recherche et partenariats
- **Campus**: Présentation des 19 campus au Maroc
- **News**: Actualités et événements de l'école
- **Inscription**: Formulaire de candidature
- **Footer**: Liens institutionnels et réseaux sociaux

## Personnalisation

### Couleurs EMSI
Les couleurs officielles EMSI sont définies dans `client/src/index.css`:
- Vert principal: `hsl(142, 76%, 36%)`
- Vert foncé: `hsl(142, 71%, 24%)`
- Vert clair: `hsl(142, 76%, 94%)`

### Logo
Le logo officiel EMSI est utilisé depuis le site web officiel.

## Déploiement

Le projet est optimisé pour le déploiement sur Replit avec la configuration Vite intégrée.

## Licence

Ce projet est un clone éducatif du site officiel EMSI à des fins de démonstration.