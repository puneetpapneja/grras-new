#node block
FROM node:18 as data-dip-web
RUN apt-get upgrade -y && rm -rf /var/lib/apt/lists/*	
# the build env for front end
# ARG buildenv=test
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# RUN npm install -g yarn@berry
# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --legacy-peer-deps


# add app
COPY . /usr/src/app


# run tests
# RUN ng test --watch=false

# generate build
# buildenv is defined in openshift envs
ENV NODE_ENV=production 
RUN npm run build:prod



#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=data-dip-web /usr/src/app/dist .


ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
