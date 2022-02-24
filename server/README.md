docker run -d -p 27017:27017 --name mongo mongo:latest
docker inspec mongo
docker build -t mb-test-app .
docker run -d -p 8080:8080 mb-test-app:latest