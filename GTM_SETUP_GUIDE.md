# 🎯 Guide de configuration Google Tag Manager

## ✅ **Configuration de base terminée**

Votre Google Tag Manager est déjà configuré avec l'ID : **GTM-PPS9H3ZD**

## 📊 **Événements déjà trackés**

### **1. Vues de projets**
- **Événement** : `project_view`
- **Variables** : `project_name`, `project_type`
- **Déclencheur** : Ouverture d'une modale de projet

### **2. Soumissions de formulaire**
- **Événement** : `contact_form_submit`
- **Variables** : `form_type`, `success`
- **Déclencheur** : Soumission du formulaire de contact

### **3. Clics sur liens externes**
- **Événement** : `external_link_click`
- **Variables** : `link_url`, `link_text`
- **Déclencheur** : Clic sur GitHub, LinkedIn, démos

### **4. Navigation**
- **Événement** : `navigation`
- **Variables** : `section`, `action`
- **Déclencheur** : Navigation entre sections

### **5. Performances**
- **Événement** : `performance_metric`
- **Variables** : `metric_name`, `metric_value`
- **Déclencheur** : Mesures de performance

### **6. Engagement utilisateur**
- **Événement** : `user_engagement`
- **Variables** : `engagement_type`, `engagement_value`
- **Déclencheur** : Scroll, temps passé, etc.

## 🔧 **Configuration dans GTM**

### **1. Accéder à GTM**
1. Aller sur [tagmanager.google.com](https://tagmanager.google.com)
2. Se connecter avec votre compte Google
3. Sélectionner le conteneur : **GTM-PPS9H3ZD**

### **2. Configurer Google Analytics 4**
1. **Variables** → **Nouvelle variable**
   - Nom : `GA4 Configuration`
   - Type : **Configuration Google Analytics**
   - ID de mesure : `G-XXXXXXXXXX` (créer dans GA4)

2. **Déclencheurs** → **Nouveau déclencheur**
   - Nom : `All Pages`
   - Type : **Vue de page**
   - Déclenchement : **Toutes les vues de page**

3. **Balises** → **Nouvelle balise**
   - Nom : `GA4 - Page View`
   - Type : **Google Analytics : Configuration GA4**
   - Configuration : `{{GA4 Configuration}}`
   - Déclenchement : `{{All Pages}}`

### **3. Configurer les objectifs de conversion**

#### **Objectif 1 : Contact Form Submit**
1. **Déclencheurs** → **Nouveau déclencheur**
   - Nom : `Contact Form Success`
   - Type : **Événement personnalisé**
   - Nom de l'événement : `contact_form_submit`
   - Condition : `success equals true`

2. **Balises** → **Nouvelle balise**
   - Nom : `GA4 - Contact Conversion`
   - Type : **Google Analytics : Événement GA4**
   - Configuration : `{{GA4 Configuration}}`
   - Nom de l'événement : `contact_form_submit`
   - Déclenchement : `{{Contact Form Success}}`

#### **Objectif 2 : Project View**
1. **Déclencheurs** → **Nouveau déclencheur**
   - Nom : `Project View`
   - Type : **Événement personnalisé**
   - Nom de l'événement : `project_view`

2. **Balises** → **Nouvelle balise**
   - Nom : `GA4 - Project View`
   - Type : **Google Analytics : Événement GA4**
   - Configuration : `{{GA4 Configuration}}`
   - Nom de l'événement : `project_view`
   - Paramètres :
     - `project_name` : `{{project_name}}`
     - `project_type` : `{{project_type}}`
   - Déclenchement : `{{Project View}}`

### **4. Configurer les rapports personnalisés**

#### **Rapport 1 : Performance des projets**
- **Métrique** : Nombre de vues par projet
- **Dimension** : Nom du projet
- **Filtre** : Événement = `project_view`

#### **Rapport 2 : Conversions de contact**
- **Métrique** : Taux de conversion du formulaire
- **Dimension** : Date
- **Filtre** : Événement = `contact_form_submit`

#### **Rapport 3 : Engagement utilisateur**
- **Métrique** : Temps de session moyen
- **Dimension** : Section la plus visitée
- **Filtre** : Événement = `user_engagement`

## 📈 **Métriques à surveiller**

### **Trafic et visibilité**
- Sessions par jour/semaine
- Utilisateurs uniques
- Pages vues par session
- Taux de rebond

### **Engagement**
- Temps passé sur le site
- Profondeur de scroll
- Sections les plus visitées
- Projets les plus consultés

### **Conversions**
- Soumissions de formulaire
- Clics sur liens externes
- Téléchargements de CV
- Taux de conversion global

### **Performance**
- Temps de chargement des pages
- Core Web Vitals
- Erreurs JavaScript
- Performance mobile

## 🎯 **Objectifs de conversion recommandés**

1. **Contact Form Submit** (Objectif principal)
2. **Project View** (Engagement)
3. **External Link Click** (Sortie qualifiée)
4. **Scroll Depth > 75%** (Engagement)
5. **Time on Site > 2 minutes** (Engagement)

## 🔍 **Tests à effectuer**

### **1. Test des événements**
1. Ouvrir la console de développement
2. Aller dans l'onglet **Network**
3. Filtrer par **gtm**
4. Tester chaque action :
   - Ouvrir un projet
   - Soumettre le formulaire
   - Cliquer sur un lien externe

### **2. Test en mode aperçu**
1. Dans GTM, cliquer sur **Aperçu**
2. Entrer l'URL de votre site
3. Tester toutes les actions
4. Vérifier que les événements se déclenchent

### **3. Validation dans GA4**
1. Aller dans **Rapports en temps réel**
2. Tester les actions
3. Vérifier que les événements apparaissent

## 📝 **Notes importantes**

1. **Délai** : Les données peuvent prendre 24-48h à apparaître
2. **Mode aperçu** : Utilisez-le pour tester avant publication
3. **Version** : Publiez toujours après tests
4. **Backup** : Sauvegardez vos configurations
5. **Monitoring** : Vérifiez régulièrement les erreurs

## 🚀 **Prochaines étapes**

1. ✅ Configurer Google Analytics 4 dans GTM
2. ✅ Créer les objectifs de conversion
3. ✅ Configurer les rapports personnalisés
4. ✅ Tester tous les événements
5. ✅ Publier la configuration
6. ✅ Surveiller les données pendant 1 semaine
7. ✅ Optimiser selon les résultats
