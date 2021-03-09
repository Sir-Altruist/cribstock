FROM node as build-stage

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./ .

RUN npm run build

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf