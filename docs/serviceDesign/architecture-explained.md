# Architecture of url-shortener service

####Claudia Terés Prieto
###

For a service similar to tinyurl the best option would be to build a microservice contained in a docker container, 
for example, that should only be up when the service is being called. This way  we would save money by not having the container running when the service is not being called. Also clients could adapt it to their applications without us having to customize the service itself.

This microservice would be built using the Domain Driven Design architecture with S.O.L.I.D. principles. There are two pictures attached, one depicting the microservice architecture and another one displaying the internal structure of the application.

