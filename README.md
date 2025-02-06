
# React Router Project

ეს არის React-ით შექმნილი ვებსაიტი, რომელიც იყენებს React Router-ს გვერდების მართვისთვის. პროექტი მოიცავს რამდენიმე გვერდს და იყენებს API-დან მიღებულ მონაცემებს გალერეის გასამართად.

## გამოყენებული ტექნოლოგიები
**React Hooks** - პროექტში გამოყენებულია `useState`, `useEffect`, `useNavigate`, `useParams` და სხვა hooks ფუნქციონალობისთვის.
**React Custom Hooks** - გამოყენებულია `useFetch` ჰუკი API-დან მონაცემების ასაღებად.
**React Router** - გვერდების სამართავად გამოყენებულია `react-router-dom`.
**Axios** - მონაცემების API-დან ასაღებად.
**Framer Motion** - ანიმაციების დასამატებლად.
**LocalStorage** - მონაცემების ლოკალურად შესანახად.

## პროექტის სტრუქტურა
```
/src
  ├── components
  │   ├── Navbar.jsx
  │   ├── Footer.jsx
  ├── pages
  │   ├── Home.jsx
  │   ├── Gallery.jsx
  │   ├── Profile.jsx
  │   ├── ErrorPage.jsx
  ├── App.jsx
  ├── main.jsx
  ├── hooks
  │   ├── useFetch.js
  ├── styles
  │   ├── index.css
  │   ├── gallery.css
  │   ├── home.css
```

## როგორ გავუშვათ პროექტი?
1. რეპზიტორის გადმოწერა:  
   ```sh
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```
2. ინსტალაცია:  
   ```sh
   npm install
   ```
3. ლოკალურად გაშვება:  
   ```sh
   npm run dev
   ```

## პროექტის ფუნქციონალი
- მთავარ გვერდზე გამოსახულია ღილაკი, რომელიც გადადის გალერეის გვერდზე.
- გალერეაში გამოიყენება API-დან მიღებული სურათები.
- პროფილის გვერდი დინამიურად იღებს სახელებს URL-დან.
- **Framer Motion** გამოყენებულია ელემენტების ანიმაციებისთვის.
- **LocalStorage** ინახავს მომხმარებლის მონაცემებს.

