# Rooted Deck – Client Side

Rooted Deck is a reflection and journaling app centered around the wisdom of trees and oracle card readings. This repository contains the **client-side React application** that enables users to draw cards, engage in spreads, and journal their insights within a calm, mythical interface.

## Features

- Card draws and spreads, including single and multi-card formats
- Journal entry creation tied to specific readings
- Mood and lunar phase tracking for each journal session
- Rich text editing using [Tiptap](https://tiptap.dev/)
- User authentication with private reflections
- Card detail views with meanings, keywords, and symbolism
- A nature-inspired design with Celtic-style visual elements

## Tech Stack

- **Framework**: React (Next.js)
- **State Management**: useContext
- **Text Editor**: Tiptap
- **Styling**: Tailwind CSS
- **Routing**: Next.js App Router
- **Authentication**: JSON Web Tokens (JWT) stored in `localStorage`
- **Backend Integration**: Django REST Framework

## Getting Started

### 1. Clone the Repository

````bash
git clone https://github.com/your-username/rooted-deck-client.git
cd rooted-deck-client```

### 2. Install Dependencies
```bash
npm install ```
### 3. Set Up Environment Variables
Create a .env.local file in the root directory
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
````

### 4. Start the Development Server

`npm run dev`

### Folder Structure Overview

/components → Reusable UI elements
/pages → Route-based components
/context → Global state providers
/styles → Tailwind and custom CSS
/utils → Helper functions

### Future Enhancements

- Deck Customization
- Journal entry search and filtering
- Optional reflection reminders

### Contributing

Pull requests are welcome. For major changes, please open an issue to discuss what you would like to change.
