FROM node:16
WORKDIR /app

# Copy package
COPY package.json ./

RUN npm install

# Add others
COPY . .

CMD ["node", "app.js"]
