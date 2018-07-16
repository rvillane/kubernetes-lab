# kubernetes-lab

cd hello-world

## 1.0 run the app as a regular nodejs app
npm run start

## 2.0 create the image under local registry
docker build -t hello-world .

## 2.1 run dockerized app 
docker run -p 8080:8080 hello-world

## 3.0 Tag image with the registry name
docker tag hello-world gcr.io/k8s-sandbox-198803/hello-world

## 3.1 push image to GCR
### 3.1.1 authenticate to google cloud
gcloud auth login
### 3.1.2 Setup gcloud as a Docker credential helper
gcloud auth configure-docker 
### 3.1.3 Container Registry API must be enabled 
https://console.cloud.google.com/apis/api/containerregistry.googleapis.com/overview?project=k8s-sandbox-198803
#### 3.1.4 verify that your user has the "Storage Admin" role on the project

docker push gcr.io/k8s-sandbox-198803/hello-world

## 3.2 kubernetes deployment
### 3.2.1 verify your user has "container.deployments.create", "container.services.create" permission - grant "Kubernetes Engine Admin" and "Kubernetes Engine Developer" roles.
MUST RUN FROM VM ON GCP
kubectl create -f deployment-k8s.yaml 

## 4.0 play with the app
kubectl get pods
kubectl get svc

try curl http://EXTERNAL-IP:8080 for liveness probe
try curl http://EXTERNAL-IP:8080/hello for service response

## 5.0 Stop the cluster
gcloud container clusters resize sandbox --size=0