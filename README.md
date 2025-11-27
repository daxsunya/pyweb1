## Локальный запуск

1. **Клонирование репозитория**

```bash
git clone https://github.com/daxsunya/pyweb1.git
cd pyweb1
```

2. Установка зависимостей

```bash
pip install mkdocs mkdocs-material
```

3. Запуск локального сервера
```bash
mkdocs serve
```
4. Открытие приложения по адресу: http://127.0.0.1:8000/

## Шаги выполнения
1. Создать проект
2. Проверить работу проекта локально (хост http://127.0.0.1:8000/ из п. Локальный запуск)
<img width="1509" height="932" alt="Снимок экрана 2025-11-27 в 23 40 12" src="https://github.com/user-attachments/assets/5ea29f79-6703-4c62-98bd-17b69280fd1a" />
<img width="1509" height="932" alt="Снимок экрана 2025-11-27 в 23 38 00" src="https://github.com/user-attachments/assets/1ea3004b-d2e5-45a7-af4b-51469f43a8ec" />
4. Выдать разрешение на запись из actions (для публикации gitlab pages)
5. Отметить ветку с именем "gh-pages" как целевую для публикации (через repository settings)
6. Создать файл сборки в workflow github
<img width="1509" height="772" alt="Снимок экрана 2025-11-27 в 23 42 08" src="https://github.com/user-attachments/assets/c17daba9-b008-41c7-bc7b-df8a00de0b20" />
7. Проверить публикацию на github pages
<img width="1509" height="932" alt="Снимок экрана 2025-11-27 в 23 46 47" src="https://github.com/user-attachments/assets/0a882abc-912f-4432-becf-87087b8a116a" />

## Используемые технологии

- [MkDocs](https://www.mkdocs.org/) — генератор статических сайтов из Markdown  
- HTML, CSS, JS — для кастомизации темы  
- GitHub Actions — автоматическая сборка и деплой  
- PostCSS — для обработки CSS  
