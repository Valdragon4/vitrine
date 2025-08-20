#!/bin/bash
# Script de restauration pour migration du site vitrine
# Usage: ./restore-site.sh <backup-file.tar.gz>

set -e

BACKUP_FILE=$1

if [ -z "$BACKUP_FILE" ]; then
    echo "❌ Usage: ./restore-site.sh <backup-file.tar.gz>"
    echo "Exemple: ./restore-site.sh vitrine-backup-20250101-120000.tar.gz"
    exit 1
fi

if [ ! -f "$BACKUP_FILE" ]; then
    echo "❌ Fichier de sauvegarde introuvable: $BACKUP_FILE"
    exit 1
fi

echo "🔄 Migration du site vitrine - Restauration"
echo "==========================================="
echo "📁 Fichier: $BACKUP_FILE"

# Vérification des prérequis
echo "🔍 Vérification des prérequis..."

if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Installation..."
    sudo apt update
    sudo apt install -y docker.io docker-compose
    sudo systemctl enable docker
    sudo systemctl start docker
    sudo usermod -aG docker $USER
    echo "⚠️  Veuillez redémarrer votre session ou exécuter: newgrp docker"
fi

if ! command -v nginx &> /dev/null; then
    echo "❌ Nginx n'est pas installé. Installation..."
    sudo apt install -y nginx
fi

# Extraction de l'archive
echo "📦 Extraction de l'archive..."
cd /opt
sudo tar -xzf "$BACKUP_FILE"

# Configuration des permissions
echo "🔧 Configuration des permissions..."
sudo chown -R $USER:$USER vitrine/
chmod +x vitrine/*.sh

# Construction et démarrage des services Docker
echo "🐳 Construction et démarrage des services Docker..."
cd /opt/vitrine

# Nettoyage préventif
docker-compose down --remove-orphans 2>/dev/null || true
docker system prune -f

# Construction et démarrage
docker-compose build --no-cache
docker-compose up -d

# Attendre que les services démarrent
echo "⏳ Attente du démarrage des services..."
sleep 10

# Vérification des services
echo "🔍 Vérification des services Docker..."
docker-compose ps

# Configuration Nginx
echo "🌐 Configuration Nginx..."
if [ -f nginx-backup.conf ]; then
    sudo cp nginx-backup.conf /etc/nginx/sites-available/valentin-marot.fr
    sudo ln -sf /etc/nginx/sites-available/valentin-marot.fr /etc/nginx/sites-enabled/
    
    # Test de la configuration Nginx
    if sudo nginx -t; then
        sudo systemctl reload nginx
        echo "✅ Configuration Nginx appliquée"
    else
        echo "❌ Erreur dans la configuration Nginx"
    fi
else
    echo "⚠️  Configuration Nginx non trouvée dans la sauvegarde"
fi

# Tests de fonctionnement
echo "🧪 Tests de fonctionnement..."

# Test application locale
if curl -s http://localhost:3002 > /dev/null; then
    echo "✅ Application accessible en local (port 3002)"
else
    echo "❌ Application non accessible en local"
fi

# Test Nginx
if curl -s http://localhost > /dev/null; then
    echo "✅ Nginx fonctionne"
else
    echo "❌ Nginx ne répond pas"
fi

echo ""
echo "✅ Restauration terminée!"
echo ""
echo "📋 Prochaines étapes:"
echo "1. Mettre à jour l'enregistrement DNS A dans Cloudflare"
echo "   valentin-marot.fr → $(curl -s ifconfig.me)"
echo "2. Configurer SSL avec Certbot:"
echo "   sudo certbot --nginx -d valentin-marot.fr -d www.valentin-marot.fr"
echo "3. Tester l'accès externe: curl -I http://valentin-marot.fr"
echo ""
echo "🔧 Commandes utiles:"
echo "- Voir les logs: docker-compose logs -f"
echo "- Redémarrer: docker-compose restart"
echo "- Status Nginx: sudo systemctl status nginx"
