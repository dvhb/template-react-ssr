FROM docker.dvhb.io/devops/iso/node:12.14.1

ARG NODE_ENV
ARG APP_ENV=development
ARG SASS_PATH=./node_modules:./src
ARG REACT_APP_SENTRY_DSN
ARG REACT_APP_API_URL
ARG WORK_PATH=/opt/app

WORKDIR ${WORK_PATH}
RUN apk update --no-cache && apk upgrade && chown -R node:node ${WORK_PATH}
USER node

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .

RUN npm run build

RUN if [ "$APP_ENV" == "development" ]; then npm run storybook:build; fi

EXPOSE 3000
CMD npm start
