FROM node:24.9.0-alpine3.21
WORKDIR /app
COPY package.json .
RUN npm install
COPY .  .
ENV PORT 3000
CMD ["npm","start"]
