# Microservices Architecture Lab
A microservices architecture for software architecture lab

### Architecture
The application is composed:

- **Forecast UI:** The interfaces for the user to interact with the whole system.
- **Forecast Microservice:** Predict the sales of a specific product.
- **Security Microservice:** responsible for Authentication and Authorization.
- **Planning Microservice:** responsible for The creation of plans based on the generated forecast.
- **API Gateway:** Orchestrates requests from the client. All requests should pass through it.

![Architecture](architecture.png)

### Execution
- **Authentication:**
<p align="center">
  <img alt="Light" src="https://user-images.githubusercontent.com/62222721/163634872-5c9c64a3-08cb-4251-a33e-7d0f8891b3f2.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="https://user-images.githubusercontent.com/62222721/163634884-5a333fba-9dea-4340-bf63-3378a3c193b2.png" width="45%">
</p>

- **Forecast:** 


![278175231_730566624981865_2951465768396047681_n](https://user-images.githubusercontent.com/62222721/163634900-fef6f81e-9433-4b40-93d8-e8fc5d56ba92.png)
![278394737_1231706827236551_8341425719846401754_n](https://user-images.githubusercontent.com/62222721/163634904-9362eb5a-0262-49da-8527-81584d38cd43.png)
