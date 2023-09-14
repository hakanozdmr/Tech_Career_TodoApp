# Todo Uygulaması

## Proje Tanımı

Bu proje, Java Spring backend, React frontend ve PostgreSQL veritabanını kullanarak geliştirilen bir Todo uygulamasını içerir. Bu uygulama, kullanıcıların görevleri yönetmelerine olanak tanır ve temel işlevler sunar: görev oluşturma, güncelleme, silme ve durum değiştirme.

### Proje Demosu

##### ANA SAYFA</u>

<img src="https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/img/Output.PNG?raw=true" width="500">
 
##### <u>GÜNCELLE</u>

<img src="https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/img/OutputUpdate.PNG?raw=true" width="500">

## Başlangıç

Projeyi yerel bir geliştirme ortamında çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

Projeyi çalıştırmak için aşağıdaki gereksinimlere ihtiyacınız vardır:

- Java JDK 17 veya daha yeni bir sürüm

- Node.js ve npm (Node Paket Yöneticisi)

- PostgreSql veritabanı

- Ayrıca proje bağımlılıkları için [pom.xml](https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/todo-api/pom.xml) ve [application.properties](https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/todo-api/src/main/resources/application.properties) dosyalarına bakabilir.


### Kurulum

1. Bu depoyu yerel makinenize klonlayın:

```bash
git clone https://github.com/hakanozdmr/Tech_Career_TodoApp.git
```

2. Backend'i başlatın: Intellij Idea Ultimate Edition kullanmanızı tavsite ederim

```bash
./mvnw spring-boot:run
```

3. Frontend'i başlatın: VSCode kullanmanızı tavsiye ederim.

```bash
cd todo-fe
node -v //Versiyon Kontrolü
npm -v  //Versiyon Kontrolü
npm install  
npm start
```

4. PostgreSQL veritabanınızı oluşturun ve `application.properties` dosyasında veritabanı bağlantı ayarlarını yapılandırın:(Mevcut dosya içerisindeki bilgiler aşağıdadır)

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todo?autocommit=true
spring.datasource.username=username
spring.datasource.password=password
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto = update
spring.jpa.properties.hibernate.format_sql =true
spring.jpa.properties.hibernate.show_sql=true
```

5. Veritabanına gerekli tabloyu oluşturmak için backend'i başlatın.

Uygulama şimdi http://localhost:3000 adresinde çalışıyor olmalıdır. Tarayıcıdan bu URL'yi ziyaret ederek uygulamayı kullanmaya başlayabilirsiniz.

#### Docker için Kurulum
```
git clone https://github.com/hakanozdmr/Tech_Career_TodoApp.git
cd todo-api
mvn clean install
docker build -t todo-api .
cd ..
cd todo-fe
docker build -t todo-fe .
docker-compose up -d
```

## Kullanım

Uygulama, aşağıdaki temel işlevlere sahiptir:

- **Görev Ekleme**: Yeni bir görev eklemek için "Yeni Görev" kısmında olan alanı doldurarak "Ekle" düğmesine tıklayarak görevi kaydedin.

- **Görev Güncelleme**: Varolan bir görevi güncellemek için, görevin olduğu satırda ve güncelle sütünunda yer alan işarete tıklayarak düzenleme moduna geçin. Ardından bilgileri güncelleyin ve "Güncelle" düğmesine tıklayarak değişiklikleri kaydedin.

- **Görev Silme**: Bir görevi silmek için görevin olduğu satırda ve sil sütünunda yer alan işarete tıklayarak ya da "Göster" işaretine tıklayarak çıkan alanda "Sil" butonuna tıklayarak silin.

- **Durum Değiştirme**: Görevin durumunu tamamlandı veya tamamlanmadı olarak değiştirmek için görevin "Durum" alanına tıklayın .

- **Görevleri Listeleme**: Tüm görevleri görüntülemek için görev listesinin üstünde bulunan butonları kullanabilirsiniz.  "Hepsi", "Bitenler" ve "Yapılacaklar" şeklinde 3 buton bulunmaktadır.

- **Görevleri Silme**: Tüm görevleri  silmek için Hepsini Sil" ya da biten görevleri silmek için "Bitenleri Sil" düğmesine tıklayın. Bu alan görev listesinin altında yer almaktadır.

## API Endpointleri

Bu uygulama ayrıca aşağıdaki API endpointlerini sunar:

- `POST /v1/todo`: Yeni bir görev ekler.
- `GET /v1/todo`: Tüm görevleri listeler.
- `GET /v1/todo/getAllTodosIsDoneTrue`: isDone = true durumunda olanları listeler.
- `GET /v1/todo/getAllTodosIsDoneFalse`: isDone = false durumunda olanları listeler
- `PUT /v1/todo/update/1/updateContent/?content=content`: Görevin ismini günceller.
- `PUT /v1/todo/update/updateTodoIsDone/1`: Belirli bir görevin durumunu değiştirir.
- `DELETE /v1/todo/delete/{id}`: Belirli bir görevi siler.
- `DELETE /v1/todo/delete/deleteTodoIsDoneTrue`: isDone = true durumunda olan tüm görevleri siler.
- `DELETE /task/api/v1/delete`: Tüm görevleri siler.

API endpointlerini kullanarak bu işlevleri programatik olarak da gerçekleştirebilirsiniz.

## Katkıda Bulunanlar

Bu proje techcareer.net tarafından düzenlenen eğitmenliğini Sayın Hamit Mızrak'ın yaptığı **Full-Stack Bootcamp** kapsamında hazırlanmıştır.

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

# Todo Application

## Project Description

This project includes a Todo application developed using Java Spring for the backend, React for the frontend, and PostgreSQL for the database. This application allows users to manage their tasks and provides essential functionalities such as task creation, update, deletion, and status change.

### Project Demo

##### HOME PAGE
<img src="https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/img/Output.PNG?raw=true" width="500">

##### <u>Update</u>

<img src="https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/img/OutputUpdate.PNG?raw=true" width="500">

## Getting Started

Follow the steps below to run the project in a local development environment.

### Requirements

To run the project, you need the following requirements:

- Java JDK 17 or a newer version.

- Node.js and npm (Node Package Manager).

- PostgreSQL database.

- You can check the project dependencies in [pom.xml](https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/todo-api/pom.xml) and the configuration for the database connection in [application.properties](https://github.com/hakanozdmr/Tech_Career_TodoApp/blob/master/todo-api/src/main/resources/application.properties).



### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/hakanozdmr/Tech_Career_TodoApp.git
```

2. Start the backend: It is recommended to use Intellij Idea Ultimate Edition.

```bash
./mvnw spring-boot:run
```

3. Start the frontend: It is recommended to use VSCode.

```bash
cd todo-api
node -v //Versiyon Kontrolü
npm -v  //Versiyon Kontrolü
npm install  
npm start
```

4. Create your PostgreSQL database and configure the database connection in the `application.properties` file (existing information is provided below):

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todo?autocommit=true
spring.datasource.username=username
spring.datasource.password=password
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto = update
spring.jpa.properties.hibernate.format_sql =true
spring.jpa.properties.hibernate.show_sql=true
```

5. Start the backend to create the necessary table in the database.

The application should now be running at http://localhost:3000. You can start using the application by visiting this URL in your web browser.

#### Installation for Docker
```
git clone https://github.com/hakanozdmr/Tech_Career_TodoApp.git
cd todo-api
mvn clean install
docker build -t todo-api .
cd ..
cd todo-fe
docker build -t todo-fe .
docker-compose up -d
```
## Usage

The application offers the following core functionalities:

- **Task Creation**: Add a new task by filling out the fields in the "New Task" section and clicking the "Add" button.

- **Task Update**: To update an existing task, enter the edit mode by clicking on the checkbox in the row where the task is located and in the update column. Then, update the information and click the "Update" button to save the changes.

- **Task Deletion**: Delete a task by clicking on the checkbox in the row where the task is located and in the delete column, or click the "Show" button in the modal that appears and then click the "Delete" button.

- **Status Change**: Click on the "Status" field of a task to change its status between completed and not completed.

- **List Tasks**: Use the buttons at the top of the task list to view all tasks, completed tasks, or tasks that need to be done.

- **Delete Tasks**: Click the "Delete All" button to delete all tasks, or click the "Delete Completed" button to delete completed tasks. This area is located at the bottom of the task list.

## API Endpoints

This application also provides the following API endpoints:

- `POST /v1/todo`: Adds a new task.
- `GET /v1/todo`: Lists all tasks.
- `GET /v1/todo/getAllTodosIsDoneTrue`: lists the ones with isDone = true.
- `GET /v1/todo/getAllTodosIsDoneFalse`: lists the ones with isDone = false
- `PUT /v1/todo/update/1/updateContent/?content=content`: Updates the name of the task.
- `PUT /v1/todo/update/updateTodoIsDone/1`: Changes the status of a specific task.
- `DELETE /v1/todo/delete/{id}`: Deletes a specific task.
- `DELETE /v1/todo/delete/delete/deleteTodoIsDoneTrue`: Deletes all tasks with isDone = true.
- `DELETE /task/api/v1/delete`: Deletes all tasks.

You can use these API endpoints

to perform these functionalities programmatically.

## Contributors

This project was prepared as part of the **Full-Stack Bootcamp** organized by techcareer.net and instructed by Mr. Hamit Mızrak.

## License

This project is licensed under the [MIT License](LICENSE).
