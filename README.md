# Project Title
Invent - Exploring the Boundless Realm of Imagination

## Overview
Invent is the online publishing platform for professionals publishing technology trends and news. 

### Problem
In today's fast-paced world, staying updated with the latest technology trends and news can be challenging for professionals in the industry. Existing online publishing platforms may lack a focused approach towards delivering insightful content tailored to the needs and interests of technology enthusiasts. This fragmentation can lead to inefficiencies in accessing relevant information and insights, hindering professionals' ability to stay informed and competitive in their respective fields.

### User Profile
- **Audience Inclusivity**: Invent caters to professionals in the technology sector, such as software developers, engineers, IT professionals, and technology enthusiasts, while also extending its reach to individuals from non-tech sectors aspiring to enter the tech field.
- **Knowledge Expansion**: Users access the platform to stay informed about emerging technology trends, gain insights into industry developments, and explore innovative ideas and solutions, regardless of their current level of expertise or background.
- **Comprehensive Resource**: Invent serves as an invaluable resource for both seasoned professionals and newcomers by providing comprehensive coverage of diverse topics within the technology domain, fostering continuous learning and skill development.
- **User Experience Considerations**: Special considerations are given to ensuring user-friendly navigation, personalized content recommendations, and seamless integration with social sharing and discussion features, accommodating users from various backgrounds and skill levels.

### Features

#### Authentication
- **Sign Up**: Users can create an account to access personalized features.
- **Login**: Secure login functionality allows users to access the application using their credentials.
- **Password Reset**: Users can reset their password if forgotten, ensuring continued access to their account.

#### Blog Post Management
- **Create**: Users can create new blog posts, enabling them to share content with other users.
- **Edit/Delete/Update**: Users have control over their own blog posts, allowing them to edit, delete, or update content as needed.

#### Commenting
- **Engagement**: Users can engage with other users by commenting on blog posts, fostering discussions and interactions around content.

#### Preference Expression
- **Like/Dislike**: Users can like or dislike blog posts and comments to express their preferences and opinions on content.

#### Categorization and Tagging
- **Organization**: Users can categorize and tag their blog posts to enhance organization and improve searchability within the platform.

#### Search Functionality
- **Content Discovery**: Users can search for specific blog posts or topics within the application, improving usability and facilitating content discovery.

#### Admin Privileges (For Admin Users)
- **User Account Management**: Admin users can manage user accounts, including creating, updating, and deleting accounts as necessary.
- **Content Moderation**: Admin users have the ability to review and moderate blog posts, comments, or user-generated content within the platform.

## Implementation

### Tech Stack

- **Frontend**:
  - React
  - React Router
  - Axios

- **Backend**:
  - Node.js
  - Express
  - Database

### APIs

List any external sources of data that will be used in your app.

### Sitemap

- Home Page
- Dashboard Page
- Profile Page
- Blog Posts List
- View Single Blog Post
- Create New Blog Post
- Edit Existing Blog Post
- Delete Blog Post
- User Authentication:
  - Register
  - Login
  - Logout

### Mockups

#### Home Page
![Home Pgae](https://github.com/TejalAGunjal/Capstone-Project---InventBlog/blob/main/MockUps/HomePage.jpeg)

#### SignIn Page
![SignIn Page](https://github.com/TejalAGunjal/Capstone-Project---InventBlog/blob/main/MockUps/SignInPage.jpeg)

#### Welcome Page
![Welcome Page](https://github.com/TejalAGunjal/Capstone-Project---InventBlog/blob/main/MockUps/WelcomePage.jpeg)

#### Dashboard Page
![Dashboard Page](https://github.com/TejalAGunjal/Capstone-Project---InventBlog/blob/main/MockUps/DashboardPage.jpeg)

#### Profile Page
![Profile Page](https://github.com/TejalAGunjal/Capstone-Project---InventBlog/blob/main/MockUps/ProfilePage.jpeg)

### Data

User Data: Includes user profiles, preferences, saved articles, and activity logs.
Article Data: Contains articles, authors, publication dates, and categories.
Discussion Data: Stores comments, replies, and forum discussions.

### Endpoints

Articles
GET /articles: Retrieve a list of articles.
GET /articles/:id: Retrieve a specific article by its ID.
POST /articles: Create a new article.
PUT /articles/:id: Update an existing article.
DELETE /articles/:id: Delete an article.
Comments
POST /comments: Add a comment to an article.
PUT /comments/:id: Update an existing comment.
DELETE /comments/:id: Delete a comment.

### Auth

User authentication will be implemented using JWT tokens. Upon successful login, users will receive a token which they will include in subsequent requests to access protected endpoints. Authorization middleware will verify the token's validity and grant or deny access accordingly.

## Roadmap

Set up project structure and environment.
Implement basic frontend layout and navigation.
Set up user authentication system.
Develop backend API endpoints for article management.
Integrate frontend with backend for article retrieval and display.
Implement user profile functionality.
Build search and filtering functionality.
Develop interactive discussion features.
Enhance user experience and responsiveness.
Conduct testing and debugging.
Fine-tune user interface and user experience.
Prepare for deployment.

## Nice-to-haves

Integration with third-party APIs for additional content sources
Advanced analytics to track user engagement and content popularity
Implementing progressive web app features for offline access and push notifications
Adding social login options for easier user registration and login.
