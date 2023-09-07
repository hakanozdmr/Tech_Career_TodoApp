FROM openjdk:20 AS build

COPY pom.xml mvnw ./
COPY .mvn .mvn
RUN ./mvnw dependency:resolve

COPY src src
RUN ./mvnw package

FROM openjdk:17
WORKDIR todo-api
COPY --from=build target/*.jar todo-api.jar
ENTRYPOINT ["java", "-jar", "todo-api.jar"]