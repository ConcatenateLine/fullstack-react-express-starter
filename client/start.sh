#!/bin/sh
# Replace placeholder with actual env var at runtime
envsubst '$API_URL' < /etc/nginx/templates/nginx.template.conf > /etc/nginx/conf.d/default.conf

# Log config for Nginx
cat /etc/nginx/conf.d/default.conf

# Start Nginx
exec nginx -g 'daemon off;'

