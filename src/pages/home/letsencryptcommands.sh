sudo certbot certonly --standalone  -d router.knnect.com
sudo certbot renew
sudo ln -s /etc/nginx/sites-available/cam