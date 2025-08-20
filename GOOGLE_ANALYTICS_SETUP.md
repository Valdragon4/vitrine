# 📊 Guide Google Analytics 4 - Analyse du trafic

## 🎯 **Étape 1 : Créer un compte Google Analytics**

### **1. Accéder à Google Analytics**
1. Aller sur [analytics.google.com](https://analytics.google.com)
2. Se connecter avec votre compte Google
3. Cliquer sur **"Commencer à mesurer"**

### **2. Créer un compte**
1. **Nom du compte** : `Valentin MAROT Portfolio`
2. **Paramètres de partage des données** : ✅ Activer
3. Cliquer sur **"Suivant"**

### **3. Créer une propriété**
1. **Nom de la propriété** : `valentin-marot.fr`
2. **Fuseau horaire** : `Europe/Paris`
3. **Devise** : `Euro (€)`
4. Cliquer sur **"Suivant"**

### **4. Informations sur votre entreprise**
1. **Taille de l'entreprise** : `Petite entreprise (1-10 employés)`
2. **Secteur d'activité** : `Technologie`
3. **Objectif principal** : `Générer des prospects`
4. Cliquer sur **"Suivant"**

### **5. Choisir les objectifs**
Sélectionner :
- ✅ **Générer des prospects**
- ✅ **Mesurer l'engagement**
- ✅ **Analyser le comportement des utilisateurs**
- Cliquer sur **"Créer"**

## 🔧 **Étape 2 : Récupérer l'ID de mesure**

### **1. Copier l'ID GA4**
- Format : `G-XXXXXXXXXX` (ex: G-ABC123DEF4)
- Notez cet ID, vous en aurez besoin

### **2. Ajouter dans votre .env.local**
```bash
NEXT_PUBLIC_GA_ID=G-VOTRE_ID_ICI
```

## 🎯 **Étape 3 : Configurer dans Google Tag Manager**

### **1. Accéder à GTM**
1. Aller sur [tagmanager.google.com](https://tagmanager.google.com)
2. Sélectionner votre conteneur : `GTM-PPS9H3ZD`

### **2. Créer la variable GA4**
1. **Variables** → **Nouvelle variable**
2. **Nom** : `GA4 Configuration`
3. **Type** : `Configuration Google Analytics`
4. **ID de mesure** : `G-VOTRE_ID_ICI`
5. **Enregistrer**

### **3. Créer le déclencheur de page**
1. **Déclencheurs** → **Nouveau déclencheur**
2. **Nom** : `All Pages`
3. **Type** : `Vue de page`
4. **Déclenchement** : `Toutes les vues de page`
5. **Enregistrer**

### **4. Créer la balise GA4**
1. **Balises** → **Nouvelle balise**
2. **Nom** : `GA4 - Page View`
3. **Type** : `Google Analytics : Configuration GA4`
4. **Configuration** : `{{GA4 Configuration}}`
5. **Déclenchement** : `{{All Pages}}`
6. **Enregistrer**

### **5. Publier**
1. Cliquer sur **"Soumettre"**
2. **Nom de version** : `Ajout GA4`
3. **Description** : `Configuration Google Analytics 4`
4. **Publier**

## 📈 **Étape 4 : Configurer les objectifs de conversion**

### **1. Objectif : Contact Form Submit**
1. **Déclencheurs** → **Nouveau déclencheur**
   - Nom : `Contact Form Success`
   - Type : `Événement personnalisé`
   - Nom de l'événement : `contact_form_submit`
   - Condition : `success equals true`

2. **Balises** → **Nouvelle balise**
   - Nom : `GA4 - Contact Conversion`
   - Type : `Google Analytics : Événement GA4`
   - Configuration : `{{GA4 Configuration}}`
   - Nom de l'événement : `contact_form_submit`
   - Déclenchement : `{{Contact Form Success}}`

### **2. Objectif : Project View**
1. **Déclencheurs** → **Nouveau déclencheur**
   - Nom : `Project View`
   - Type : `Événement personnalisé`
   - Nom de l'événement : `project_view`

2. **Balises** → **Nouvelle balise**
   - Nom : `GA4 - Project View`
   - Type : `Google Analytics : Événement GA4`
   - Configuration : `{{GA4 Configuration}}`
   - Nom de l'événement : `project_view`
   - Paramètres :
     - `project_name` : `{{project_name}}`
     - `project_type` : `{{project_type}}`
   - Déclenchement : `{{Project View}}`

## 📊 **Étape 5 : Configurer les rapports**

### **1. Rapports par défaut disponibles**
- **Rapports en temps réel** : Données instantanées
- **Acquisition** : D'où viennent vos visiteurs
- **Engagement** : Comportement sur le site
- **Monétisation** : Conversions et objectifs
- **Démographique** : Âge, genre, localisation

### **2. Rapports personnalisés recommandés**

#### **Rapport 1 : Performance des projets**
1. **Explorations** → **Nouvelle exploration**
2. **Dimensions** : `Nom du projet`
3. **Métriques** : `Nombre d'événements`
4. **Filtre** : `Nom de l'événement = project_view`

#### **Rapport 2 : Conversions de contact**
1. **Explorations** → **Nouvelle exploration**
2. **Dimensions** : `Date`
3. **Métriques** : `Nombre d'événements`
4. **Filtre** : `Nom de l'événement = contact_form_submit`

#### **Rapport 3 : Sources de trafic**
1. **Acquisition** → **Trafic**
2. **Voir les détails** → **Source/Support**
3. **Période** : 30 derniers jours

## 🔍 **Étape 6 : Tester la configuration**

### **1. Test en temps réel**
1. Aller dans **Rapports en temps réel**
2. Ouvrir votre site dans un autre onglet
3. Naviguer sur le site
4. Vérifier que les données apparaissent

### **2. Test des événements**
1. Ouvrir la console de développement
2. Onglet **Network** → Filtrer par `gtm`
3. Tester :
   - Ouverture d'un projet
   - Soumission du formulaire
   - Clic sur un lien externe
4. Vérifier que les événements sont envoyés

### **3. Test en mode aperçu GTM**
1. Dans GTM, cliquer sur **"Aperçu"**
2. Entrer l'URL de votre site
3. Tester toutes les actions
4. Vérifier les déclenchements

## 📈 **Métriques importantes à surveiller**

### **Trafic de base**
- **Sessions** : Nombre de visites
- **Utilisateurs** : Visiteurs uniques
- **Pages vues** : Nombre total de pages consultées
- **Pages par session** : Engagement moyen

### **Sources de trafic**
- **Organique** : Recherche Google
- **Direct** : Saisie directe de l'URL
- **Social** : Réseaux sociaux
- **Référents** : Autres sites

### **Engagement**
- **Temps de session** : Durée moyenne
- **Taux de rebond** : % de visiteurs qui partent
- **Pages les plus visitées** : Contenu populaire
- **Comportement** : Parcours utilisateur

### **Conversions**
- **Taux de conversion** : % de visiteurs qui contactent
- **Objectifs atteints** : Formulaires soumis
- **Valeur des conversions** : ROI potentiel

## 🎯 **Objectifs de conversion recommandés**

### **1. Contact Form Submit (Principal)**
- **Type** : Événement
- **Valeur** : 100€ (estimation)
- **Funnel** : Page d'accueil → Contact → Soumission

### **2. Project View (Engagement)**
- **Type** : Événement
- **Valeur** : 10€
- **Funnel** : Page d'accueil → Projets → Vue détaillée

### **3. External Link Click (Sortie qualifiée)**
- **Type** : Événement
- **Valeur** : 5€
- **Funnel** : Clic sur GitHub/LinkedIn

### **4. Scroll Depth > 75% (Engagement)**
- **Type** : Événement
- **Valeur** : 2€
- **Funnel** : Engagement profond

## 📱 **Configuration mobile**

### **1. Application mobile GA4**
- Télécharger **Google Analytics** sur mobile
- Se connecter avec votre compte
- Accéder aux données en temps réel

### **2. Alertes automatiques**
1. **Admin** → **Alertes personnalisées**
2. **Nouvelle alerte** :
   - Nom : `Trafic élevé`
   - Condition : `Sessions > 50 par jour`
   - Notification : Email

## 🔧 **Optimisations avancées**

### **1. Filtres de données**
1. **Admin** → **Vues** → **Filtres**
2. **Nouveau filtre** :
   - Nom : `Exclure localhost`
   - Type : `Préfixe`
   - Champ : `Nom d'hôte`
   - Filtre : `localhost`

### **2. Audiences personnalisées**
1. **Admin** → **Audiences**
2. **Nouvelle audience** :
   - Nom : `Visiteurs engagés`
   - Condition : `Sessions > 3`
   - Durée : `30 jours`

### **3. Rapports automatisés**
1. **Rapports** → **Rapport personnalisé**
2. **Planifier** → **Email hebdomadaire**
3. **Destinataires** : Votre email

## 📊 **Exemples de tableaux de bord**

### **Tableau de bord quotidien**
- Sessions du jour
- Nouveaux utilisateurs
- Pages les plus visitées
- Conversions du jour
- Sources de trafic

### **Tableau de bord hebdomadaire**
- Évolution du trafic
- Performance des projets
- Taux de conversion
- Sources de trafic
- Comportement utilisateur

### **Tableau de bord mensuel**
- ROI global
- Tendances long terme
- Optimisations SEO
- Performance mobile
- Objectifs atteints

## 🚀 **Prochaines étapes**

1. ✅ **Configurer GA4** dans GTM
2. ✅ **Tester** tous les événements
3. ✅ **Publier** la configuration
4. ✅ **Surveiller** pendant 1 semaine
5. ✅ **Analyser** les premières données
6. ✅ **Optimiser** selon les résultats
7. ✅ **Configurer** les alertes
8. ✅ **Créer** des rapports personnalisés

## 📝 **Notes importantes**

- **Délai** : Les données peuvent prendre 24-48h
- **Mode aperçu** : Testez avant publication
- **Backup** : Sauvegardez vos configurations
- **RGPD** : Respectez la vie privée
- **Monitoring** : Vérifiez régulièrement les erreurs
