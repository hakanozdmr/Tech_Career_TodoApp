FROM openjdk:20
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} todo-api-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","/todo-api-0.0.1-SNAPSHOT.jar"]