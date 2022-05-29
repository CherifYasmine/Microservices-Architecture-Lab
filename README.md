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
  <img src="https://user-images.githubusercontent.com/62222721/163636139-7a2ab009-3f41-48b2-ad9a-7d8595a02b9f.png" width="48%" height="400px">
  <img src="https://user-images.githubusercontent.com/62222721/163636143-78334156-cc65-406a-bb8d-d11607d490d7.png" width="48%" height="400px">
</p>

- **Forecast:** 

![278175231_730566624981865_2951465768396047681_n](https://user-images.githubusercontent.com/62222721/163634900-fef6f81e-9433-4b40-93d8-e8fc5d56ba92.png)
![278394737_1231706827236551_8341425719846401754_n](https://user-images.githubusercontent.com/62222721/163634904-9362eb5a-0262-49da-8527-81584d38cd43.png)
