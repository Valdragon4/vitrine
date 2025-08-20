
# Script de déploiement pour le site vitrine Valentin MAROT
# Usage: ./deploy.sh

set -e  # Arrêter le script en cas d'erreur

echo "🚀 Déploiement du site vitrine Valentin MAROT..."

# Vérifier que Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Arrêter et supprimer les conteneurs existants
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down --remove-orphans

# Nettoyer les images Docker non utilisées
echo "🧹 Nettoyage des images Docker..."
docker system prune -f

# Construire et démarrer les conteneurs
echo "🔨 Construction de l'image Docker..."
docker-compose build --no-cache

echo "🚀 Démarrage des conteneurs..."
docker-compose up -d

# Attendre que le conteneur soit prêt
echo "⏳ Attente du démarrage du conteneur..."
sleep 30

# Vérifier que le conteneur fonctionne
echo "🔍 Vérification du statut du conteneur..."
if docker-compose ps | grep -q "Up"; then
    echo "✅ Le conteneur est démarré avec succès!"
else
    echo "❌ Erreur: Le conteneur n'a pas démarré correctement."
    docker-compose logs
    exit 1
fi

# Tester l'accessibilité du site
echo "🌐 Test de l'accessibilité du site..."
if curl -f -s http://localhost:3002 > /dev/null; then
    echo "✅ Le site est accessible sur le port 3002"
else
    echo "❌ Erreur: Le site n'est pas accessible sur le port 3002"
    docker-compose logs
    exit 1
fi

# Configuration Nginx
echo "🔧 Configuration de Nginx..."

# Copier la configuration nginx
sudo cp nginx-vitrine.conf /etc/nginx/sites-available/valentin-marot.fr

# Créer le lien symbolique
if [ -L /etc/nginx/sites-enabled/valentin-marot.fr ]; then
    sudo rm /etc/nginx/sites-enabled/valentin-marot.fr
fi
sudo ln -s /etc/nginx/sites-available/valentin-marot.fr /etc/nginx/sites-enabled/

# Tester la configuration nginx
echo "🔍 Test de la configuration Nginx..."
if sudo nginx -t; then
    echo "✅ Configuration Nginx valide"
    
    # Recharger nginx
    echo "🔄 Rechargement de Nginx..."
    sudo systemctl reload nginx
    
    echo "✅ Nginx rechargé avec succès"
else
    echo "❌ Erreur dans la configuration Nginx"
    exit 1
fi

# Afficher les informations de déploiement
echo ""
echo "🎉 Déploiement terminé avec succès!"
echo ""
echo "📋 Informations de déploiement:"
echo "   🌐 Site accessible sur: http://localhost:3002"
echo "   🐳 Conteneur Docker: valentin-marot-vitrine"
echo "   📁 Configuration Nginx: /etc/nginx/sites-available/valentin-marot.fr"
echo ""
echo "🔧 Commandes utiles:"
echo "   - Voir les logs: docker-compose logs -f"
echo "   - Arrêter: docker-compose down"
echo "   - Redémarrer: docker-compose restart"
echo "   - Mettre à jour: ./deploy.sh"
echo ""
echo "⚠️  N'oubliez pas de:"
echo "   1. Configurer votre DNS pour pointer valentin-marot.fr vers ce serveur"
echo "   2. Obtenir un certificat SSL (Let's Encrypt) pour HTTPS"
echo "   3. Décommenter la section HTTPS dans la config nginx"
echo ""
