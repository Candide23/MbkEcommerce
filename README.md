# Project Overview
This project involves building a real-time e-commerce application, which will function as a Full Stack application. The front-end will be developed using Angular, while the back-end will be powered by Spring Boot. Communication between the front and back-end will be facilitated through a REST API. Additionally, the back-end will incorporate a database setup with full CRUD (Create, Read, Update, Delete) support for the specified database.

## Project Requirements
Outlined below are the project requirements as specified by the management:

## Display a list of products.
#### Implement functionality to add products to the shopping cart with CRUD support.
#### Enable shopping cart checkout.
#### Implement user login/logout security.
#### Provide the capability to track previous orders for logged-in users.

## Wireframes
The wireframes provide a visual representation of the application's layout and functionality:

#### Home Page: Features a search bar, shopping cart status, category navigation, and product listings.
#### Product Details Page: Displays detailed information about a selected product, including description and pricing.
#### Shopping Cart Details Page: Shows a list of items in the shopping cart with options to modify quantities and perform checkout.
#### Checkout Page: Collects customer information and allows order review before finalizing the purchase.


# How to  run the application, follow these steps:

## Prerequisites
#### Ensure you have Node.js installed on your system.
#### Install Angular CLI globally by running ```npm install -g @angular/cli.```
#### Make sure you have Java Development Kit (JDK) installed for running Spring Boot applications.
#### Set up a database server compatible with Spring Boot (e.g., MySQL, PostgreSQL).

## Frontend Setup
#### Navigate to the frontend directory of the project: ```cd src/main/ui-angular```
#### Install dependencies by running ```npm install.```
#### Start the Angular development server by running ```ng serve.```

## Backend Setup
#### Navigate to the backend directory of the project.
#### Configure the database connection in the application.properties file.
#### Build the Spring Boot application by running ./mvnw clean package (if using Maven) or ./gradlew build (if using Gradle).
#### Run the application by executing the generated JAR file or using ./mvnw spring-boot:run (if using Maven) or ./gradlew bootRun (if using Gradle).

## Accessing the Application
#### Once both the frontend and backend servers are running, you can access the application by navigating to http://localhost:4200 in your web browser
