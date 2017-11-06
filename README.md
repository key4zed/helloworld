# helloworld
Шаблон пустого проекта на metadata.js
По мотивам http://infostart.ru/public/540168/ для [v2](https://github.com/oknosoft/metadata.js/tree/develop/packages)

### Назначение и возможности
- Ввод и редактирование докумнтов поступления - выбытия - перемещения денег
- Формирование отчета о движении денег
- Автономная работа при отсутствии доступа к Интернет
- Фоновая синхронизация с ИБ 1С

### Демо онлайн
Живое демо доступно по ссылке https://light.oknosoft.ru/helloworld/v2/

### Использованы следующие библиотеки и инструменты:
#### Серверная часть
- [CouchDB](http://couchdb.apache.org/), NoSQL база данных с поддержкой master-master репликации
- [Nginx](http://nginx.org/ru/), высокопроизводительный HTTP-сервер
- [NodeJS](https://nodejs.org/en/), JavaScript runtime built on Chrome's V8 JavaScript engine

#### Управление данными в памяти браузера
- [Metadata-core](https://github.com/oknosoft/metadata.js/tree/develop/packages/metadata-core), движок ссылочной типизации для браузера и Node.js
- [PouchDB](https://pouchdb.com/), клиентская NoSQL база данных с поддержкой автономной работы и репликации с CouchDB
- [AlaSQL](https://github.com/agershun/alasql), SQL-интерфейс к массивам javascript в памяти браузера и Node.js
- [Aes](http://www.movable-type.co.uk/scripts/aes.html), библиотека шифрования/дешифрования строк
- [Redux](https://github.com/reactjs/redux), диспетчер состояния веб-приложения
- [Xlsx](https://github.com/SheetJS/js-xlsx), библиотека для чтения и записи XLSX / XLSM / XLSB / XLS / ODS

#### UI библиотеки и компоненты интерфейса
- [Material-ui](http://www.material-ui.com/), компоненты React UI в стиле Google's material design
- [React virtualized](https://github.com/bvaughn/react-virtualized), компоненты React для динамических списков
- [React data grid](https://github.com/adazzle/react-data-grid), React компонент табличной части
- [Filesaver.js](https://github.com/eligrey/FileSaver.js), HTML5 реализация метода saveAs
- [Moment.js](http://momentjs.com/), библиотека форматирования интервалов и дат
- [Rubles.js](http://meritt.github.io/rubles/), библиотека форматирования чисел - сумма прописью

### Структура папок проекта
```
.
├─ build    # Сюда компилируются файлы для публикации на вебсервере
├─ config   # Файлы настроек приложения
├─ scripts  # Скрипты для сборки и тестирования
└─ src      # Исходный код приложения
```
Дополнительное описание файлов проекта см. в readme вложенных папок

### Конфигурация приложения

#### Подготовить данные и выгрузить их в CouchDB
Конфигурацию 1С можно взять [здесь](https://github.com/oknosoft/metadata.js/tree/master/integration_1c).

Установка CouchDB v2:
- загрузить [CouchDB](http://couchdb.apache.org/#download);
- запустить службу `bin/couchdb.cmd` в каталоге установки.

Для настройки CouchDB в режиме единичного узла или кластера необходимо выбрать соответствующую опцию в [Fauxton](http://localhost:5984/_utils#setup) или проделать тоже самое вручную:
- создать пользователя с правами администратора
- чтобы разрешить доступ к `couchdb` по ip адресу, отличному от `localhost` необходимо установить `bind_address` равный `0.0.0.0`
- включить CORS, перейдя в `Configuration/CORS`.

Следуя [этой](https://github.com/oknosoft/metadata.js/tree/master/integration_1c) инструкции загрузить конфигурацию 1С.

Далее необходимо открыть форму `интеграция:настройка`.
- на вкладке `Адреса сервисов` указать адрес CouchDB вместе с префиксом базы данных в поле `HTTP`, имя администратора Couchdb `User name` и его пароль `Password`. После каждого изменения значений на этой вкладке необходимо нажать кнопку `Записать URLS`;
- на вкладке `Регистрация` необходимо нажать кнопки `Настроить CouchDB`, после этого сначала кнопку `Заполнить` и затем `Регистрация новых`;
- на вкладке `Метаданные` нажать кнопку `Записать meta`;
- на вкладке `Синонимы` нажать кнопку `Записать meta`.

#### Пересобрать файл описания метаданных
Этот шаг нужен только в том случае, если изменены метаданные приложения (добавлены поля, документы, справочники, синонимы и т.д.)
Для пересборки необходимо отредактировать файл `config/app.settings.js` и запустить скрипт `npm run prebuild:meta`. В результате будет обновлён файл `src/metadata/init.js`.

#### Сконфигурировать приложение
Путем модификации файла `config/app.settings.js`

## Лицензия
[MIT](LICENSE)

Данная лицензия распространяется на все содержимое репозитория, но не заменяет существующие лицензии для продуктов, используемых библиотекой metadata.js

(c) 2014-2017, компания Окнософт (info@oknosoft.ru)
