# nginx 이미지 사용하기
FROM nginx

COPY ./build /usr/share/nginx/html

EXPOSE 80