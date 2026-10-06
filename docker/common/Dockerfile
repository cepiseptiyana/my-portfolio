# STAGE 1: Base
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# STAGE 2: Development
FROM base AS development
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# STAGE 3: Build
FROM base AS build
RUN npm ci --silent
COPY . .
RUN npm run build

# STAGE 4: Production (nginx saja, tanpa Node)
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html/my-portfolio
COPY docker/production/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80