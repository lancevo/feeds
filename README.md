This is RSS Reader, give it a RSS url, it will parse and return in a formatted content. Default port:5678

# modify the nginx above, below location / {….} add

location /rssreader {
proxy_pass http://127.0.0.1:5678;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
proxy_cache_bypass \$http_upgrade;
}
