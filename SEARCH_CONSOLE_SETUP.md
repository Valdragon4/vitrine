# 🔍 Guide Google Search Console - Trafic de recherche

## 🎯 **Étape 1 : Créer un compte Search Console**

### **1. Accéder à Search Console**
1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Se connecter avec votre compte Google
3. Cliquer sur **"Ajouter une propriété"**

### **2. Ajouter votre domaine**
1. **Type de propriété** : `Préfixe d'URL`
2. **URL** : `https://valentin-marot.fr`
3. Cliquer sur **"Continuer"**

### **3. Vérifier la propriété**
Choisir une méthode de vérification :

#### **Option A : Fichier HTML (Recommandé)**
1. Télécharger le fichier HTML
2. Le placer dans `public/` de votre projet
3. Redéployer le site
4. Cliquer sur **"Vérifier"**

#### **Option B : Balise HTML**
1. Copier la balise meta
2. L'ajouter dans `src/app/layout.tsx`
3. Redéployer le site
4. Cliquer sur **"Vérifier"**

## 📊 **Données disponibles dans Search Console**

### **1. Performance de recherche**
- **Requêtes** : Mots-clés recherchés
- **Clics** : Clics sur vos résultats
- **Impressions** : Affichages dans Google
- **CTR** : Taux de clic
- **Position** : Rang dans les résultats

### **2. Indexation**
- **Pages indexées** : Pages dans Google
- **Erreurs d'indexation** : Problèmes détectés
- **Sitemap** : Validation de votre sitemap
- **Couverture** : État de l'indexation

### **3. Expérience utilisateur**
- **Core Web Vitals** : Performance
- **Mobile Usability** : Compatibilité mobile
- **HTTPS** : Sécurité du site

## 🔧 **Configuration recommandée**

### **1. Soumettre le sitemap**
1. **Sitemaps** → **Ajouter un sitemap**
2. **URL** : `https://valentin-marot.fr/sitemap.xml`
3. **Soumettre**

### **2. Configurer les paramètres**
1. **Paramètres** → **Paramètres de la propriété**
2. **Domaine cible** : `valentin-marot.fr`
3. **Pays cible** : `France`
4. **Enregistrer**

### **3. Configurer les notifications**
1. **Paramètres** → **Préférences**
2. **Notifications par email** : ✅ Activer
3. **Types d'erreurs** : Tous sélectionner

## 📈 **Rapports utiles**

### **1. Rapport de performance**
- **Période** : 28 derniers jours
- **Requêtes** : Mots-clés populaires
- **Pages** : Pages les plus cliquées
- **Pays** : Géolocalisation

### **2. Rapport d'indexation**
- **Pages** : État de l'indexation
- **Erreurs** : Problèmes à corriger
- **Avertissements** : Améliorations possibles

### **3. Rapport Core Web Vitals**
- **LCP** : Largest Contentful Paint
- **FID** : First Input Delay
- **CLS** : Cumulative Layout Shift

## 🚀 **Actions recommandées**

### **1. Surveiller les erreurs**
- Vérifier **Couverture** régulièrement
- Corriger les erreurs d'indexation
- Optimiser les pages lentes

### **2. Analyser les requêtes**
- Identifier les mots-clés populaires
- Optimiser le contenu
- Améliorer les positions

### **3. Optimiser l'expérience**
- Améliorer les Core Web Vitals
- Optimiser pour mobile
- Corriger les erreurs de sécurité

## 📊 **Métriques importantes**

### **Trafic de recherche**
- **Clics** : Visiteurs depuis Google
- **Impressions** : Visibilité dans Google
- **CTR** : Efficacité des résultats
- **Position moyenne** : Rang dans Google

### **Mots-clés**
- **Requêtes populaires** : Mots-clés qui marchent
- **Requêtes à faible CTR** : Optimisations possibles
- **Nouvelles requêtes** : Opportunités

### **Pages**
- **Pages populaires** : Contenu qui fonctionne
- **Pages non indexées** : Problèmes à résoudre
- **Pages lentes** : Optimisations nécessaires
