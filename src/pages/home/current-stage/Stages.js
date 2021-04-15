export const stages = [
  {
    topic: "тестове завдання",
    goal: "продемонструвати знання і уміння, необхідні для інтернатури",
    task: (
      <>
        <p>Обрати шаблон та зверстати веб-сторінку</p>
        <p>
          Наповнити сторінку вмістом: описом базових понять, знання яких
          необхідні для проходження інтернатури.
        </p>
      </>
    ),
  },
  {
    topic: "основи створення проектів на react",
    goal:
      "ознайомитись з node та npm, отримати базові поняття про react," +
      " розгорнути перший проект за допомогою react cli",
    task: (
      <>
        <p>1. Встановити node.js та npm</p>
        <p>2. Створити новий проект за допомогою утиліти create react app</p>
        <p>3. Перенести зверстану сторінку у react компоненту</p>
      </>
    ),
  },
  {
    topic: "основи js, змінні, оператори, умови",
    goal: "ознайомитись з поняттям змінної",
    task: (
      <p>
        Виділити потенційно динамічний контент на сторінці (імена, дати, тексти)
        та перенести його в змінні. Змінні повинні бути константами в компоненті
        або в state.
      </p>
    ),
  },
  {
    topic: "основи js, масиви",
    goal: "навчитися працювати з масивами",
    task: (
      <>
        <p>
          На сторінці створити таблицю з біографією по рокам. Дані записати в
          масив. Зробити сортування даних по кліку (без допомоги і з допомогою
          функцій сортування). Додати дві кнопки, по кліку на першу додати новий
          елемент масиву, і видалити його по кліку на другу. Результати виводити
          в консоль за допомогою console.log.
        </p>
      </>
    ),
  },
  {
    topic: "основи js, об'єкти",
    goal: "навчитись працювати з об'єктами",
    task: (
      <>
        <p>
          ускладнити таблицю з минулого уроку, зробити мінімум два рівні
          вкладеності. Додати і видалити елемент з об'єкту, вибрати елемент
          об'єкту по ключу. Переписати частину об'єкту за допомогою spread
          оператору.
        </p>
      </>
    ),
  },
  {
    topic: "основи js, область видимості",
    goal: "ознайомитись з поняттям області видимості",
    task: (
      <>
        <p>
          переписати функції сортування, додавання і видалення записів біографії
          з минулого завдання таким чином, щоб усе необхідне приходило у якості
          параметрів (без використання зовнішніх змінних), а функція повертала
          новий об'єкт (а не перезаписувала старий). Після виклику функції
          вивести в консоль старий і новий об'єкти.
        </p>
      </>
    ),
  },
  {
    topic: "основи js, область видимості, fetch",
    goal: "ознайомитись з поняттям області видимості, ознайомитись з fetch",
    task: (
      <>
        <p>
          отримати інформацію з будь-якого стороннього апі та показати її на
          сторінці у вигляді списку або таблиці
        </p>
      </>
    ),
  },
  {
    topic: "основи js, події",
    goal: "ознайомитись з подіями в js і react",
    task: (
      <>
        <p>
          зробити набір гарячих клавіш для підсвічування активного елементу зі
          списку або апі, або з уроку 5. по Кліку робити елемент активним
          (підсвічувати бордером або міняти колір шрифту) або неактивним.
          Зробити перетягування елементів списку мишею, щоб можна було змінювати
          порядок вручну. Вивести на сторінці картинку з алертом, який
          спрацьовує на подію load та error.
        </p>
      </>
    ),
  },
  {
    topic: "основи React, React компоненти, чисті функції",
    goal:
      "ознайомитись з компонентами в React, ознайомитись з чистими функціями " +
      "та необхідністю їх використання",
    task: (
      <>
        <p>
          розбити додаток на stateful і stateless компоненти, переписати логіку
          з використанням state і props, у тому числі з використанням чистих
          функцій. У підсумковому варіанті використовувати максимальну кількість
          функцій з життєвого циклу компоненти та пояснити мету використання.
        </p>
      </>
    ),
  },
  {
    topic: "основи React, Virtual DOM, реконсиляція, HOC ",
    goal:
      "з'ясувати для чого потрібні Virtual DOM та HOC", 
    task: (
      <>
        <p>
          Пояснити процеси, які виникають на сторінці при оновленні, для чого потрібні HOC
          і реалізувати HOC для схожих компонент в проекті.
        </p>
      </>
    ),
  },
];