# 🚀 PACK LANCEMENT 72H++ - PAGE DE VENTE
## Mode d'emploi complet

---

## 📦 FICHIERS LIVRÉS

Tu as reçu 3 fichiers :

1. **pack72h-index.html** → La structure HTML complète de ta page
2. **pack72h-style.css** → Tous les styles (couleurs de marque incluses)
3. **pack72h-script.js** → Les interactions (FAQ accordéon, smooth scroll)

---

## 🎨 TES COULEURS DE MARQUE (DÉJÀ INTÉGRÉES)

Les variables CSS dans `pack72h-style.css` utilisent déjà tes couleurs :

```css
--color-bg: #f4f0eb;          /* Blanc cassé - fond principal */
--color-bg-alt: #e9e1d3;      /* Beige principal - sections alternées */
--color-bg-chic: #f7eee3;     /* Beige chic - cartes et accents */
--color-primary: #3d2a52;     /* Violet profond - titres & CTA */
--color-accent: #d4a65a;      /* Doré - accents et détails */
--color-text: #121212;        /* Noir - texte principal */
--color-text-muted: #8a8580;  /* Gris - texte secondaire */
--color-card: #ffffff;        /* Blanc pur - cartes */
```

✅ **Tu n'as RIEN à modifier dans les couleurs, tout est déjà optimisé.**

---

## 📸 CE QUE TU DOIS REMPLACER

### 1. IMAGES À AJOUTER

Crée un dossier `assets/` dans le même répertoire que ton HTML.

**Images nécessaires :**

```
assets/
├── logo-sabrina.png          (ton logo - format PNG transparent)
├── placeholder-sabrina-hero.jpg  (ta photo pour le hero)
├── placeholder-pack72h.jpg   (mockup de ton pack)
└── og-image.jpg             (image pour partage social - 1200x630px)
```

**Où sont-elles dans le code :**

- **Logo** : apparaît dans le header et le footer
  - Ligne 35 du HTML : `<img src="assets/logo-sabrina.png" ...`
  - Ligne 656 du HTML : `<img src="assets/logo-sabrina.png" ...`

- **Photo Hero** : grande photo de toi dans la section hero
  - Ligne 65 du HTML : `<img src="assets/placeholder-sabrina-hero.jpg" ...`

- **Mockup Pack** : visuel de ton produit dans la section système
  - Ligne 349 du HTML : `<img src="assets/placeholder-pack72h.jpg" ...`

- **OG Image** : image de partage social (dans le `<head>`)
  - Ligne 16 du HTML : `content="https://monbusinessdigital.com/assets/og-image.jpg"`

### 2. LIENS À MODIFIER

**Dans `pack72h-index.html` :**

1. **Ligne 15** : Remplace par ton URL réelle
   ```html
   <meta property="og:url" content="https://monbusinessdigital.com/pack-72h">
   ```

2. **Ligne 16** : Remplace par le chemin vers ton image OG
   ```html
   <meta property="og:image" content="https://monbusinessdigital.com/assets/og-image.jpg">
   ```

3. **LIENS STRIPE (TRÈS IMPORTANT)** : 
   
   Cherche dans le HTML tous les liens avec `href="#paiement"` et remplace-les par ton lien Stripe.
   
   Il y a **7 CTA** à remplacer :
   - Ligne 40 : Header CTA
   - Ligne 58 : Hero CTA principal
   - Ligne 569 : Section pricing CTA
   - Ligne 625 : Section appel final CTA
   - Ligne 674 : CTA sticky mobile
   
   Remplace `#paiement` par ton vrai lien Stripe :
   ```html
   <a href="https://buy.stripe.com/TON-LIEN-PRODUIT" class="btn-primary">
   ```

4. **Liens footer** :
   - Ligne 663 : `<a href="#mentions">Mentions légales</a>`
   - Ligne 664 : `<a href="#cgv">CGV</a>`
   - Ligne 665 : `<a href="#contact">Contact</a>`

---

## 🚀 COMMENT UTILISER LA PAGE

### Option 1 : GitHub Pages (RECOMMANDÉ)

1. **Crée un repo GitHub :**
   - Va sur github.com
   - New repository
   - Nomme-le `pack-72h-landing`
   - Public

2. **Upload tes fichiers :**
   ```
   pack-72h-landing/
   ├── index.html  (renomme pack72h-index.html en index.html)
   ├── style.css   (renomme pack72h-style.css en style.css)
   ├── script.js   (renomme pack72h-script.js en script.js)
   └── assets/
       ├── logo-sabrina.png
       ├── placeholder-sabrina-hero.jpg
       ├── placeholder-pack72h.jpg
       └── og-image.jpg
   ```

3. **Active GitHub Pages :**
   - Settings > Pages
   - Source : Deploy from a branch
   - Branch : main
   - Save

4. **Ton URL sera :**
   ```
   https://ton-username.github.io/pack-72h-landing/
   ```

### Option 2 : Hébergeur classique (OVH, O2Switch, etc.)

1. Upload tous les fichiers via FTP
2. Structure :
   ```
   public_html/
   ├── index.html
   ├── style.css
   ├── script.js
   └── assets/
       └── (tes images)
   ```

### Option 3 : Lovable.dev

1. Crée un nouveau projet sur Lovable
2. Remplace le contenu par ton HTML/CSS/JS
3. Déploie

---

## ✏️ MODIFICATIONS DANS LE HTML

**Dans le `<head>`, modifie AUSSI les liens CSS et JS :**

Si tu renommes les fichiers (recommandé pour GitHub Pages) :

```html
<!-- Ligne 21 : change le lien CSS -->
<link rel="stylesheet" href="style.css">

<!-- Ligne 676 : change le lien JS -->
<script src="script.js"></script>
```

---

## 🎯 FAQ PERSONNALISÉE

Les questions de la FAQ sont **génériques pour l'instant**.

Tu peux les modifier dans le HTML entre les lignes **571-622**.

Structure d'une question FAQ :
```html
<div class="faq-item">
    <button class="faq-question">
        <span>Ta question ici ?</span>
        <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
        <p>Ta réponse détaillée ici.</p>
    </div>
</div>
```

---

## 📱 RESPONSIVE & MOBILE-FIRST

✅ La page est **100% responsive**
✅ CTA sticky sur mobile (disparaît automatiquement sur desktop)
✅ Layout adaptatif sur tablette et desktop
✅ Touch-friendly pour mobile

**Test sur mobile :**
- Ouvre les DevTools (F12)
- Toggle device toolbar
- Teste sur iPhone 12 Pro / Galaxy S20

---

## 🔧 PERSONNALISATIONS FACILES

### Changer le prix :

Cherche dans le HTML :

```html
<!-- Ligne 543 : prix barré -->
<span class="pricing-old">57€</span>

<!-- Ligne 544 : prix actuel -->
<span class="pricing-current">27€</span>
```

### Modifier la valeur totale du pack :

Ligne 492 du HTML :
```html
<p class="value-intro">Valeur totale : <strong>699€</strong></p>
```

### Changer le texte des CTA :

Cherche tous les `<a>` avec class `btn-primary` et modifie le texte.

---

## ⚡ OPTIMISATIONS SEO INCLUSES

✅ Balises meta title & description optimisées
✅ Open Graph pour partage Facebook/LinkedIn
✅ Structure HTML sémantique (header, main, section, footer)
✅ Alt text sur toutes les images (à personnaliser)
✅ Fast load (pas de framework lourd)

---

## 🎨 SI TU VEUX CHANGER LES COULEURS

(Normalement pas nécessaire, mais si besoin)

Va dans `pack72h-style.css` lignes 8-16, modifie les variables :

```css
:root {
    --color-bg: #f4f0eb;      /* Change cette valeur */
    --color-primary: #3d2a52; /* Change celle-ci */
    /* etc. */
}
```

Toute la page se mettra à jour automatiquement.

---

## 🚨 CHECKLIST AVANT MISE EN LIGNE

- [ ] Remplacer toutes les images placeholder
- [ ] Modifier tous les liens Stripe (#paiement → ton lien)
- [ ] Mettre à jour les URLs dans les meta tags OG
- [ ] Personnaliser les questions FAQ
- [ ] Ajouter tes vraies mentions légales / CGV
- [ ] Tester sur mobile (iPhone + Android)
- [ ] Tester tous les CTA
- [ ] Vérifier que la FAQ s'ouvre/ferme bien
- [ ] Tester le scroll fluide vers les sections

---

## 💡 AMÉLIORATIONS FUTURES POSSIBLES

1. **Scarcity Timer** : Ajouter un compte à rebours pour le prix de lancement
2. **Social Proof Popup** : "Marie vient d'acheter le Pack" (comme ta v3)
3. **Exit Intent Popup** : Offre spéciale quand l'utilisateur veut partir
4. **Analytics** : Ajouter Google Analytics 4 ou Plausible
5. **Pixel Meta/TikTok** : Pour tracking des conversions

---

## 📞 SUPPORT

Si tu as besoin d'aide :
1. Vérifie que les 3 fichiers sont dans le même dossier
2. Vérifie que le dossier `assets/` existe avec tes images
3. Ouvre la console du navigateur (F12) pour voir les erreurs

---

## 🎉 C'EST TOUT !

Ta page est **niveau expert**, **mobile-first**, et respecte **toutes les best practices** de conversion.

**Next steps :**
1. Remplace les images
2. Connecte Stripe
3. Upload sur GitHub Pages ou ton hébergeur
4. Lance ta promo

**GO CRUSH IT ! 🔥**

---

**Créé avec ❤️ par Claude pour Mon Business Digital Boutique**
**Sabrina Heydel - Décembre 2024**