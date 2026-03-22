# Reto-atom


# 1. Creando VM para alojar la instancia: GCP -> Seleccionar proyecto -> Compute Engine -> Crear instancia -> Crear VM a partir de.. (Acá vamos a selecionar el SO y recursos para que la instancia pueda alojar el servicio que este caso será n8n)
# 2. Crear VM a partir de.. -> Seleccionar Bajo costo -> Aplicar la configuración predeterminada.
# 3.



# Configuración de Google Cloud Docker, Nginx y Cerbot para n8n

### video: https://www.youtube.com/watch?v=9aQhSa5lw98
### Step 1: Update the system
```bash
sudo apt update
```

### Step 2: Install Docker
```bash
sudo apt install docker.io
```

### Step 3: Start Docker service
```bash
sudo systemctl start docker
```

### Step 4: Enable Docker service
```bash
sudo systemctl enable docker
```

### Step 5: Run N8N Docker Container
```bash
sudo docker run -d --restart unless-stopped -it \
--name n8n \
-p 5678:5678 \
-e N8N_HOST="retoatomn8n.zapto.orgm" \
-e WEBHOOK_TUNNEL_URL="https://retoatomn8n.zapto.org/" \
-e WEBHOOK_URL="https://retoatomn8n.zapto.org/" \
-v ~/.n8n:/root/.n8n \
n8nio/n8n
```

### Step 6: Install Nginx
```bash
sudo apt install nginx
```

### Step 7: Create an Nginx configuration file for N8N
```bash
sudo nano /etc/nginx/sites-available/n8n
```
Add the following content:
```nginx
server {
    listen 80;
    server_name retoatomn8n.zapto.org;

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        chunked_transfer_encoding off;
        proxy_buffering off;
        proxy_cache off;

        # Headers for WebSocket support
        proxy_set_header Connection 'Upgrade';
        proxy_set_header Upgrade $http_upgrade;

        # Additional headers for forwarding client info
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Save and exit using:
```bash
CTRL+O, ENTER, CTRL+X
```

### Step 8: Enable the Nginx configuration
```bash
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
```

### Step 9: Test Nginx configuration
```bash
sudo nginx -t
```

### Step 10: Restart Nginx service
```bash
sudo systemctl restart nginx
```

### Step 11: Install Certbot for SSL Certificates
```bash
sudo apt install certbot python3-certbot-nginx
```

### Step 12: Obtain SSL Certificate
```bash
sudo certbot --nginx -d retoatomn8n.zapto.org
```



### Step 14: Restart Nginx service
```bash
sudo systemctl restart nginx
