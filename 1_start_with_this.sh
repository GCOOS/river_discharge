npm run build
npm run generate
docker-compose down
docker build -t skobara/river_discharge . --force-rm
docker-compose up -d --build
