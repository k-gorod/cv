export const globalFunctions: {
    [key: string]: (key?: unknown) => void | unknown;
  } = {};
export const arrayOfLangOpts = ['Eng','Ru', 'some', 'thing','else']
export const slides = [
  {
    id:1,
    src:'/src/images/Kostya.jpg'
  },{
    id:2,
    src:'@/images/Kostya2.jpg'
  },{
    id:3,
    src:'@/images/Kostya3.jpg'
  }
]
interface TextLang {
  [key: string]: {
    [key: string]: string
  }
}
export const translateData: TextLang = {
  resume: {
    Ru: "Резюме",
    Eng: "Resume"
  },
  name: {
    Ru: "Имя: Костя",
    Eng: "Name: Kostya"
  },
  sName :{
    Ru: "Фамилия: Городничук",
    Eng: "Second Name: Gorodnichuk"
  },
  age :{
    Ru: "Возраст: 23 года",
    Eng: "Age: 23 y.o."
  },
  educ :{
    Ru: "Образование: ",
    Eng: "Education: "
  },
  exp :{
    Ru: "Опыт работы: React разработчик в волантерской организации(2 месяца), JavaScript разработчик (Phaser 3)(1 месяц)",
    Eng: "Experience: React developer in volunteer organization(2 months), JavaScript developer (Phaser 3)(1 month) "
  },
  search :{
    Ru: "Поиск Фильма",
    Eng: "Movie Search"
  },
  enter :{
    Ru: "Введите название фильма на Английском",
    Eng: "Enter movie name in English"
  },
  find :{
    Ru: "Найти",
    Eng: "Find"
  },
  
} 