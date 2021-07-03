# dockerify
learn how to build Dockerfile for image and docker-compose to manage container

## requirement
nodejs 14 or docker

## running using node
1. npm install
2. set ```.env``` for your environment
3. npm run dev

## running using docker
1. docker-compose up -d --build
2. docker-compose logs -f ==> to see logs and very usefull for debugging
3. docker-compose down ==> to stop and remove container

## aditional docker commands
1. docker-compose exec dockerify-app bash ==> this is your container terminal

</br>
</br>
</br>

# TODO
1. fix file change on host but on container not change, even nodemon is installed. Maybe on other OS have different result. I use windows for now tf