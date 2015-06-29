# react-exercise

Simple client side user management system which shows how to deal with many-to-many relationship with React+Flux application.

To compile project:
```npm run build```

To run server :
```npm run server```
then go to : http://localhost:8000/


***


Domain models are visible in stores :
https://github.com/jakubzloczewski/react-exercise/tree/master/frontend/scripts/stores
-   Users
-   Groups
-   Assignments (Users_Groups which joins previous entities with many-to-many relation)


***


REST API for this application could look like this:

GET /users/

DELETE /users/{id}

POST /users/ ( with body: { name })

GET /group/

DELETE /group/{id}

POST /group/ ( with body: { name })


GET /assignments/

DELETE /assignments/ ( with body: {userId, groupId} )

POST /assignments/ ( with body: {userId, groupId} )

