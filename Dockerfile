# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY . .

ARG VITE_APP_PORTFOLIO_DOMAIN_NAME
ARG NODE_ENV
ARG VITE_APP_ADMIN_NAME
ARG VITE_APP_ADMIN_EMAIL_ADDRESS
ARG VITE_APP_PUBLIC_API_EMAILJS_KEY
ARG VITE_APP_EMAILJS_SERVICE_ID
ARG VITE_APP_EMAILJS_TEMPLATE_ID

RUN npm run build

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 35000

CMD ["nginx", "-g", "daemon off;"]
