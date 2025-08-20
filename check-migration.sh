#!/bin/bash
# Script de vérification avant migration
# Usage: ./check-migration.sh

echo "🔍 Vérification de l'état du système avant migration"
echo "=================================================="

# Vérification des services Docker
echo "🐳 État des services Docker:"
docker-compose ps

echo ""
echo "📊 Utilisation des ressources:"
echo "CPU et Mémoire:"
top -bn1 | head -5

echo ""
echo "💾 Espace disque:"
df -h /opt/vitrine

echo ""
echo "🌐 Configuration réseau:"
echo "IP publique actuelle: $(curl -s ifconfig.me)"
echo "Port 3002 en écoute: $(ss -tlnp | grep :3002 || echo 'Non utilisé')"

echo ""
echo "📁 Taille du projet (sans node_modules et .next):"
du -sh --exclude=node_modules --exclude=.next /opt/vitrine

echo ""
echo "🔧 Configuration Nginx:"
if [ -f /etc/nginx/sites-available/valentin-marot.fr ]; then
    echo "✅ Configuration Nginx présente"
    nginx -t 2>/dev/null && echo "✅ Configuration Nginx valide" || echo "❌ Configuration Nginx invalide"
else
    echo "❌ Configuration Nginx manquante"
fi

echo ""
echo "🌍 Test d'accès:"
echo "Local (3002): $(curl -s -o /dev/null -w '%{http_code}' http://localhost:3002)"
echo "Nginx (80): $(curl -s -o /dev/null -w '%{http_code}' http://localhost)"

echo ""
echo "📋 Checklist de migration:"
echo "[ ] Services Docker arrêtés"
echo "[ ] Archive créée"
echo "[ ] Configuration Nginx sauvegardée"
echo "[ ] Nouvelle machine préparée (Docker, Nginx installés)"
echo "[ ] DNS Cloudflare prêt à être modifié"
echo ""
echo "🚀 Prêt pour la migration avec: ./backup-site.sh"
