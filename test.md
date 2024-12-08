# Cinema! Front End

## Project Description
Cinema! is a MERN (MongoDB, Express, React, Node.js) stack application designed for movie enthusiasts. The front end consumes data from **The Movie Database (TMDb) API**, enabling users to explore various movie categories. The back end handles user authentication, registration, and login using MongoDB.

## Features
- **Browse Movies:** Fetch and display movie data from TMDb API.
- **User Authentication:** Register and log in securely with credentials stored in MongoDB.
- **Responsive Design:** Styled with **Tailwind CSS** for a clean and mobile-friendly UI.
- **Pagination & Carousels:** Smooth browsing experience with paginated lists and interactive carousels.

## Tech Stack
### Front End
- **React**
- **React Router DOM**
- **Redux Toolkit** for state management
- **Axios** for API requests
- **React Paginate** for pagination
- **React Multi Carousel** for interactive carousels
- **React Lazy Load Image Component** for optimized image loading
- **Tailwind CSS** for styling

### Back End
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose** for data management
- **bcryptjs** for secure password hashing
- **dotenv** for environment variables
- **CORS** for cross-origin resource sharing
- **Serverless HTTP** for deploying back end on Netlify

## Deployment
- **Front End:** Deployed on **Netlify**
- **Back End:** Deployed on **Netlify** using serverless functions

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/mziliNassim/cinema-mern.git
   cd cinema-mern
   ```

2. Install dependencies for the front end:
   ```bash
   cd src
   npm install
   ```

3. Install dependencies for the back end:
   ```bash
   cd Backend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `Backend` directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     TMDB_API_KEY=your_tmdb_api_key
     ```

5. Run the project locally:
   - Start the back end:
     ```bash
     cd Backend
     npm run dev
     ```
   - Start the front end:
     ```bash
     cd src
     npm start
     ```

6. Access the application at [http://localhost:3000](http://localhost:3000).

## Project Structure
### Front End
- **src/**: Contains all front end components, routes, and assets.
  - **components/**: Reusable UI components
  - **data/**: All API links
  - **features/**: Includes `store.js` and `userSlice`
  - **hooks/**: Custom hooks like `useFetchAxios.js`
  - **img/**: Images and icons
  - **pages/**: Pages for different views
  - **redux/**: State management setup

### Back End
- **Backend/**: Contains server-side code
  - **.netlify/**: Configuration for serverless deployment
  - **config/**: Configuration files for database and other settings
  - **functions/**: Serverless functions for Netlify
  - **models/**: Mongoose models for users
  - **routes/**: API routes for user authentication
  - **public/**: Publicly accessible files like documentation

## Dependencies
### Front End
- `axios`
- `react-lazy-load-image-component`
- `react-multi-carousel`
- `react-paginate`
- `react-redux`
- `react-router-dom`
- `@reduxjs/toolkit`

### Back End
- `bcryptjs`
- `cors`
- `dotenv`
- `express`
- `mongoose`
- `serverless-http`

## Future Enhancements
- Add user profiles with favorite movies.
- Implement a search functionality.
- Add movie reviews and ratings.

## License
This project is licensed under the MIT License.

---

Feel free to contribute or provide feedback!

