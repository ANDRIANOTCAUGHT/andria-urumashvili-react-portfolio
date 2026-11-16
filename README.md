# ანდრია ურუმაშვილი — React Portfolio

პორტფოლიოს საიტი **React**-ით. მთავარი გვერდი დაყოფილია კომპონენტებად; გამეორებადი UI ელემენტები (ბარათები, ღილაკები, თეგები) არის reusable კომპონენტები.

## სტეკი

- React 19 + Vite
- Tailwind CSS v4
- JavaScript (JSX)

## კომპონენტები

### გვერდის სექციები
| კომპონენტი | დანიშნულება |
|---|---|
| `Header` | ნავიგაცია + burger მენიუ (useState) |
| `Hero` | მთავარი ჰირო |
| `About` | ჩემ შესახებ |
| `Projects` | პროექტების სია |
| `Skills` | უნარები + სწავლა |
| `Contact` | კონტაქტი |
| `Footer` | ფუტერი |

### გამეორებადი (reusable)
| კომპონენტი | დანიშნულება |
|---|---|
| `ProjectCard` | პროექტის ბარათი (`projects.map`) |
| `SkillCard` | უნარის ბარათი |
| `LearningCard` | სწავლის ბარათი |
| `InfoCard` | პრინციპის ბარათი |
| `Button` | ღილაკი / ლინკი |
| `Badge` | სტატუსის ბეიჯი |
| `Tag` | ტეგი |
| `SectionHeading` | სექციის სათაური |
| `Icon` | Material Symbol |

მონაცემები: `src/data.js`

## გაშვება

```bash
npm install
npm run dev
```

```bash
npm run build
```

## კონტაქტი

andria.urumashvilite06@geolab.edu.ge
