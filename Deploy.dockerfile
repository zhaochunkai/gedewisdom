FROM node as build-image

WORKDIR /app
COPY package.json ./package.json

# 配置国内的镜像源。
RUN npm config rm proxy && npm config rm https-proxy & \
    npm install -g cnpm --registry=https://registry.npm.taobao.org

# 构建镜像。
RUN cnpm install
#RUN cnpm install core-js@2

COPY ./ ./

RUN npm run build

FROM nginx
COPY --from=build-image /app/dist /usr/share/nginx/html
COPY --from=build-image /app/default.conf /etc/nginx/conf.d
