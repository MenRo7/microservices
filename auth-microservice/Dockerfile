# Utilise une image officielle de Node.js
FROM node:20

# Crée le dossier de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le projet
COPY . .

# Expose le port utilisé dans .env (3001)
EXPOSE 3001

# Commande de démarrage
CMD ["node", "index.js"]
