# ანდრია ურუმაშვილი — React Portfolio

პორტფოლიო React-ით, **react-router** როუტინგით. მთავარი გვერდი დაყოფილია კომპონენტებად; გამეორებადი ელემენტები — reusable კომპონენტებია.

## სტეკი

- React 19 + Vite
- react-router 7 (`createBrowserRouter`)
- Tailwind CSS v4

## გვერდები (routes)

| მისამართი | გვერდი | აღწერა |
|---|---|---|
| `/` | `HomePage` | Hero, პროექტები, უნარები, კონტაქტი |
| `/about` | `AboutPage` | ბიო, პრინციპები, უნარები |
| `/users` | `UsersPage` | JSONPlaceholder API + ძებნა |
| `*` | `NotFoundPage` | 404 |

## API

`GET https://jsonplaceholder.typicode.com/users` — თანამშრომლების სია.  
`UsersPage`-ზე მუშაობს ძებნა სახელით, username-ით, ელფოსტით, კომპანიითა და ქალაქით; ასევე loading / error / empty მდგომარეობები და retry.

## კომპონენტები

**გვერდის:** `Layout` (Header + Outlet + Footer), `Header` (burger მენიუ), `Hero`, `About`, `Projects`, `Skills`, `Contact`, `Footer`

**Reusable:** `ProjectCard`, `SkillCard`, `LearningCard`, `InfoCard`, `UserCard`, `Button`, `Badge`, `Tag`, `SectionHeading`, `Icon`

მონაცემები: `src/data.js`

## გაშვება

```bash
npm install
npm run dev
```

http://localhost:5173/

```bash
npm run build
npm run preview
```

## კონტაქტი

andria.urumashvilite06@geolab.edu.ge
