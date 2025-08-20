#!/bin/bash
# Script de sauvegarde pour migration du site vitrine
# Usage: ./backup-site.sh

set -e

BACKUP_DATE=$(date +%Y%m%d-%H%M%S)
BACKUP_NAME="vitrine-backup-${BACKUP_DATE}"

echo "🔄 Migration du site vitrine - Sauvegarde"
echo "========================================"

# Arrêt des services Docker
echo "🛑 Arrêt des services Docker..."
cd /opt/vitrine
docker-compose down --remove-orphans

# Création de l'archive du projet
echo "📦 Création de l'archive du projet..."
cd /opt
sudo tar -czf "${BACKUP_NAME}.tar.gz" \
    --exclude='vitrine/node_modules' \
    --exclude='vitrine/.next' \
    --exclude='vitrine/.git' \
    vitrine/

# Sauvegarde de la configuration Nginx
echo "💾 Sauvegarde de la configuration Nginx..."
if [ -f /etc/nginx/sites-available/valentin-marot.fr ]; then
    sudo cp /etc/nginx/sites-available/valentin-marot.fr vitrine/nginx-backup.conf
    echo "✅ Configuration Nginx sauvegardée"
else
    echo "⚠️  Configuration Nginx non trouvée"
fi

# Informations sur la sauvegarde
echo ""
echo "✅ Sauvegarde terminée!"
echo "📁 Fichier créé: ${BACKUP_NAME}.tar.gz"
ls -lh "${BACKUP_NAME}.tar.gz"

echo ""
echo "📋 Prochaines étapes:"
echo "1. Transférer ${BACKUP_NAME}.tar.gz vers la nouvelle machine"
echo "2. Mettre à jour l'IP dans Cloudflare"
echo "3. Exécuter le script de restauration sur la nouvelle machine"
echo ""
echo "💡 Commande de transfert (remplacer NEW_SERVER_IP):"
echo "scp ${BACKUP_NAME}.tar.gz valdragon@192.168.1.80:/tmp/"
