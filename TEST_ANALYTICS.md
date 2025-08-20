# 🧪 Guide de test - Google Analytics 4 & GTM

## ✅ **Configuration terminée**

Votre site est maintenant configuré avec :
- **Google Tag Manager** : `GTM-PPS9H3ZD`
- **Google Analytics 4** : `G-ZY4ZEM3HXM`

## 🔍 **Test 1 : Vérification des scripts**

### **1. Ouvrir la console de développement**
1. Aller sur votre site : `https://valentin-marot.fr`
2. Appuyer sur `F12` ou clic droit → **Inspecter**
3. Aller dans l'onglet **Console**

### **2. Vérifier que les scripts sont chargés**
Tapez dans la console :
```javascript
// Vérifier GTM
console.log('GTM ID:', window.dataLayer);

// Vérifier GA4
console.log('GA4 gtag:', typeof window.gtag);
```

**Résultat attendu :**
- `GTM ID:` devrait afficher un tableau avec des événements
- `GA4 gtag:` devrait afficher `"function"`

## 🔍 **Test 2 : Test des événements en temps réel**

### **1. Ouvrir Google Analytics en temps réel**
1. Aller sur [analytics.google.com](https://analytics.google.com)
2. Sélectionner votre propriété : `valentin-marot.fr`
3. Aller dans **Rapports en temps réel** → **Vue d'ensemble**

### **2. Tester la navigation**
1. Garder GA4 ouvert dans un onglet
2. Ouvrir votre site dans un autre onglet
3. Naviguer sur le site
4. Vérifier que les données apparaissent en temps réel

**Données à voir :**
- **Utilisateurs actifs** : Au moins 1
- **Pages vues** : Augmentation
- **Événements** : Navigation entre sections

## 🔍 **Test 3 : Test des événements personnalisés**

### **1. Ouvrir la console Network**
1. Dans la console de développement
2. Aller dans l'onglet **Network**
3. Filtrer par `gtm` ou `google-analytics`

### **2. Tester les événements**

#### **Test A : Vue de projet**
1. Cliquer sur **"Voir plus"** d'un projet
2. Vérifier dans Network :
   - Événement `project_view` envoyé
   - Paramètres `project_name` et `project_type`

#### **Test B : Formulaire de contact**
1. Remplir le formulaire de contact
2. Soumettre le formulaire
3. Vérifier dans Network :
   - Événement `contact_form_submit` envoyé
   - Paramètre `success: true`

#### **Test C : Liens externes**
1. Cliquer sur **GitHub** ou **LinkedIn**
2. Vérifier dans Network :
   - Événement `external_link_click` envoyé
   - Paramètres `link_url` et `link_text`

## 🔍 **Test 4 : Test en mode aperçu GTM**

### **1. Activer le mode aperçu**
1. Aller sur [tagmanager.google.com](https://tagmanager.google.com)
2. Sélectionner votre conteneur : `GTM-PPS9H3ZD`
3. Cliquer sur **"Aperçu"** (bouton vert)

### **2. Entrer l'URL de test**
1. **URL de test** : `https://valentin-marot.fr`
2. Cliquer sur **"Commencer"**

### **3. Tester toutes les actions**
1. **Navigation** : Vérifier que `All Pages` se déclenche
2. **Projets** : Vérifier que `Project View` se déclenche
3. **Contact** : Vérifier que `Contact Form Success` se déclenche
4. **Liens externes** : Vérifier que `External Link Click` se déclenche

## 📊 **Test 5 : Vérification dans GA4**

### **1. Vérifier les événements**
1. Aller dans **Rapports** → **Engagement** → **Événements**
2. Vérifier que les événements apparaissent :
   - `page_view`
   - `project_view`
   - `contact_form_submit`
   - `external_link_click`

### **2. Vérifier les conversions**
1. Aller dans **Rapports** → **Monétisation** → **Conversions**
2. Vérifier que les objectifs sont configurés :
   - Contact form submit
   - Project view
   - External link click

## 🚨 **Problèmes courants et solutions**

### **Problème 1 : Aucune donnée en temps réel**
**Solution :**
- Vérifier que les scripts sont chargés
- Attendre 5-10 minutes pour les premières données
- Vérifier les bloqueurs de publicités

### **Problème 2 : Événements non envoyés**
**Solution :**
- Vérifier la console pour les erreurs JavaScript
- Tester en mode aperçu GTM
- Vérifier les filtres de la console Network

### **Problème 3 : GA4 ne reçoit pas les données**
**Solution :**
- Vérifier que l'ID GA4 est correct : `G-ZY4ZEM3HXM`
- Vérifier que le script GA4 est chargé
- Tester avec l'extension Google Analytics Debugger

## 📱 **Test mobile**

### **1. Test sur mobile**
1. Ouvrir votre site sur mobile
2. Tester les mêmes actions
3. Vérifier dans GA4 que les données mobiles apparaissent

### **2. Test de performance**
1. Utiliser **PageSpeed Insights**
2. Vérifier que les scripts n'impactent pas les performances
3. Optimiser si nécessaire

## 📈 **Métriques à surveiller après 24h**

### **Trafic de base**
- **Sessions** : Nombre de visites
- **Utilisateurs** : Visiteurs uniques
- **Pages vues** : Contenu consulté

### **Engagement**
- **Temps de session** : Durée moyenne
- **Pages par session** : Navigation
- **Taux de rebond** : Qualité de l'engagement

### **Conversions**
- **Formulaires soumis** : Contacts reçus
- **Vues de projets** : Intérêt pour votre travail
- **Clics externes** : Engagement avec vos profils

## 🎯 **Objectifs de test**

### **Objectif 1 : Vérification technique**
- ✅ Scripts chargés correctement
- ✅ Événements envoyés
- ✅ Données reçues dans GA4
- ✅ Mode aperçu GTM fonctionne

### **Objectif 2 : Validation des données**
- ✅ Données en temps réel
- ✅ Événements personnalisés
- ✅ Conversions trackées
- ✅ Performance acceptable

### **Objectif 3 : Optimisation**
- ✅ Aucune erreur JavaScript
- ✅ Temps de chargement < 3s
- ✅ Compatibilité mobile
- ✅ Respect RGPD

## 🚀 **Prochaines étapes après validation**

1. ✅ **Configurer les objectifs de conversion** dans GA4
2. ✅ **Créer des rapports personnalisés**
3. ✅ **Configurer les alertes**
4. ✅ **Analyser les premières données**
5. ✅ **Optimiser selon les résultats**

## 📞 **Support**

Si vous rencontrez des problèmes :
1. Vérifier ce guide de test
2. Consulter la console de développement
3. Tester en mode aperçu GTM
4. Vérifier les logs dans GA4

**Votre configuration est maintenant complète et prête à analyser le trafic de votre site !** 🎯✨
