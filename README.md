# Book Store Website

This project is an Angular-based **Book Store** application that offers a sleek, modern design with key features for book browsing, purchasing, and customer engagement.

# Table of Contents

1. [Features](#features)
2. [Installation and Setup](#installation-and-setup)
   - [Prerequisites](#prerequisites)
   - [Installation Steps](#installation-steps)
3. [Folder Structure](#folder-structure)
4. [Technologies Used](#technologies-used)
5. [API Integration](#api-integration)
6. [How to Customize](#how-to-customize)
   - [Add New Components](#add-new-components)
   - [Modify Styles](#modify-styles)
   - [Extend Features](#extend-features)
7. [Links](#links)
8. [Contact](#contact)

## Features

- **Fully responsive** design for all devices.
- **Blogs**: Stay updated with the latest book releases and promotions.
- **Wishlist**: Save your favorite books for future browsing.
- **Loading Page** for a polished user experience.
- **Shop Component** Views tailored for better exploration.
- **Featured Books**: Highlights a collection of books with title, author, price, and user actions (wishlist, cart).
- **Top Categories**: Displays popular categories with custom navigation.
- **Client Testimonials**: Features customer reviews to build trust.
- **Latest News**: Shares the latest updates about books and promotions.

## Installation and Setup

### Prerequisites

1. **Node.js**: Install the latest stable version from [Node.js official website](https://nodejs.org).
2. **Angular CLI**: Install globally using:
   ```bash
   npm install -g @angular/cli
   ```

### Installation Steps

1. **Clone the Repository**:
   Run `git clone <repository-url>`
   Run `cd <repository-folder>`
2. **Install Dependencies Run the following command to install all necessary dependencies**:
   Run `npm install`
3. **Run the Application Start the development server**:
   Run `ng serve`
   Open your browser and navigate to `http://localhost:4200/`.

## Folder Structure

- **`src/app/components`**: Contains all Angular components (e.g., `hero`, `shop-sec`, `discount-section`).
- **`src/app/services`**: Includes services for handling business logic and API calls.
- **`src/assets`**: Contains static assets such as images, icons, and styles.
- **`src/environments`**: Manages environment-specific variables, including API keys.

## Technologies Used

- **Framework**: Angular
- **Styling**: CSS and Bootstrap
- **API**: Google Books API for book data
- **Carousel**: Swiper.js for interactive carousels
- **Icons**: FontAwesome for rich iconography

## API Integration

The project integrates with the **Google Books API** to fetch book data dynamically.  
Ensure you configure your API key in the respective service file. Add your key in the `src/environments/environment.ts` file:

```typescript
export const environment = {
  production: false,
  googleBooksApiKey: "<YOUR_API_KEY>",
};
```

## How to Customize

1. **Add New Components**
   Generate a new Angular component using:
   ```bash
   ng generate component <component-name>
   ```
2. **Modify Styles**
   Update global CSS in src/assets/styles/ or individual component styles for customizations.
3. **Extend Features**
   - Update services in src/app/services/ to handle new data.
   - Enhance UI by creating additional components in src/app/components.

## Links

- **Live URL**: [Demo](https://unique-yeot-2626e4.netlify.app/home)

## Contact

For any inquiries, please contact

- **Name**: [Basem Sameh](Basem-Sameh)
- **GitHub**: [GitHub Profile](https://github.com/basemsameh)
- **Linkedin**: [Linkedin](https://www.linkedin.com/in/basem-sameh-671b5b212/)
- **Email**: [basemsameh300@gmail.com](basemsameh300@gmail.com).
