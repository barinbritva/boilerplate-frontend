# prepare dependencies
# todo use node:24.20.0-alpine when it will be available on docker hub
FROM node:24.18.0-alpine AS dependencies
RUN npm install -g pnpm@11.5.2 && npm cache clean --force
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

# build frontend
FROM dependencies AS frontend-build
COPY package.json ./
RUN pnpm --offline --frozen-lockfile -r install --ignore-scripts
COPY .prettierignore .prettierrc.json index.html tsconfig.base.json tsconfig.json ./
COPY src ./src
RUN pnpm lint
RUN pnpm check-types:app
RUN pnpm check-imports
RUN pnpm build

# use whatever server you want, here we use serve for simplicity
FROM node:24.18.0-alpine AS final
RUN npm install -g serve && npm cache clean --force
WORKDIR /app
COPY --from=frontend-build /app/dist ./dist
COPY setup-app-env.mts ./
COPY src/bootstrap/configuration/validateAppEnvironment.mts ./src/bootstrap/configuration/

CMD ["sh", "-c", "node ./setup-app-env.mts ./dist/scripts && serve -s dist"]
