# Wild Code Sales

Une application web simple qui visualise les prévisions de ventes par rapport aux ventes réelles à l'aide de Chart.js.

## 📋 Description

Ce projet crée un graphique comparatif entre les ventes prévisionnelles et les ventes réelles sur une période de 12 mois. Il utilise Chart.js pour la visualisation des données et Parcel comme bundler.

## 📊 Fonctionnalités

- **Graphique combiné** - Affiche simultanément des barres (ventes réelles) et une ligne (prévisions)
- **Données mensuelles** - Visualisation mois par mois sur une année complète
- **Design responsive** - Le graphique s'adapte à la largeur de l'écran

## 🛠️ Technologies utilisées

- JavaScript ES6+
- Chart.js pour la visualisation de données
- Parcel pour le bundling et le serveur de développement
- JSON pour le stockage des données

## 💻 Installation

1. Clonez ce dépôt
```bash
git clone git@github.com:techmefr/responsiveChartjs.git
cd responsiveChartjs
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez le serveur de développement
```bash
npm start
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:1234)

## 🔧 Structure du projet

```
wildcodesales/
├── index.html           # Page HTML principale
├── script.js            # Script JS principal qui initialise le graphique
├── style.css            # Styles CSS simples
├── package.json         # Configuration npm et dépendances
└── src/
    └── json/
        ├── forecasts.json  # Données des prévisions de ventes
        └── sales.json      # Données des ventes réelles
```

## 📝 Détails techniques

Le graphique est configuré comme suit:

```javascript
new Chart(canvas.getContext("2d"), {
  type: "line",
  // Configuration avec deux datasets:
  // - Un graphique en barres pour les ventes réelles
  // - Un graphique en ligne pour les prévisions
  data: {
    datasets: [
      {
        type: "bar",
        label: "Monthly sales",
        // ...
      },
      {
        type: "line",
        label: "Sales forecast",
        // ...
      }
    ],
    // ...
  }
});
```

## 🔄 Personnalisation

Pour mettre à jour les données:
1. Modifiez les fichiers JSON dans le dossier `src/json/`
2. Les changements seront automatiquement reflétés dans le graphique

Pour modifier l'apparence du graphique:
1. Ajustez les propriétés dans l'objet de configuration de Chart.js dans `script.js`
2. Consultez la [documentation de Chart.js](https://www.chartjs.org/docs/latest/) pour plus d'options

## 📈 Exemple de données

**Prévisions mensuelles:**
```json
{
  "monthlyForecasts": [
    5000, 4000, 2000, 3200, 3500, 3900, 3400, 3800, 1500, 2300, 2700, 8000
  ]
}
```

**Ventes mensuelles réelles:**
```json
{
  "monthlySales": [
    2000, 2500, 1800, 3000, 3200, 4000, 3500, 3800, 2000, 2100, 2800, 3200
  ]
}
```

## 📝 Licence

[MIT](https://choosealicense.com/licenses/mit/)

---

Créé par [Gaëtan Compigni](https://github.com/techmefr)
