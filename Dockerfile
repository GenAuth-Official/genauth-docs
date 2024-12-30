FROM node:14.19.3 as PATH_IMAGE
ENV NODE_OPTIONS=--max_old_space_size=5120
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN npm run docs:build

FROM nginx:alpine
COPY --from=PATH_IMAGE /app/docs/.vuepress/dist /docs
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 