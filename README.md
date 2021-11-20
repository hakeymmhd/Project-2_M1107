About the app:
The app takes in ingredient keywords from the user based on the available ingredients at home, and generates recipe suggestions. 

Link:
https://cook-me-something.netlify.app

Technologies:
- React
- Sponacular API
- Material UI for card display
- Carousel from react-multi-carousel
- React Router v6
- useState, useLocation, useNavigation for page manipulation

MVP:
- User selects keywords from a list (buttons or dropdown) of common ingredients. App saves these in a state array.
- GET API call based on the selected keywords.
- Render recipe suggestions for user selection. 
- Save the selected recipes in seperate state.
- GET API call based on selected recipe ID. 
- Render new page with printable page of recipe.

Desirables:
- Responsive web design
- Dark theme for late-night working adults with babies and sleeping partners
- Random recipe suggestions at ingredient selection page
- Save favorite recipes
- Generate meal plan based on favorite recipes