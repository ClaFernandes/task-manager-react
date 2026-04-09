# Focus.

A aplicação web **Focus.** é um gerenciador de tarefas desenvolvido com **React**, utilizando **Vite** para build e **Tailwind CSS** para estilização.

---

## 🚀 Demo Online

Experimente o aplicativo diretamente no navegador:  
[Focus. - Demo](https://ClaFernandes.github.io/task-manager-react)

---

## ✨ Funcionalidades

- Adicionar tarefas com título obrigatório e descrição opcional  
- Marcar tarefas como concluídas  
- Deletar tarefas  
- Visualizar detalhes de cada tarefa  
- Persistência de tarefas usando **localStorage**  
- Interface responsiva e moderna com **Tailwind CSS**  

---

## 🛠️ Tecnologias utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## 📁 Estrutura do projeto

task-manager-react/
├── public/
│   └── index.html          # HTML principal
├── src/
│   ├── components/
│   │   ├── AddTask.jsx
│   │   ├── Tasks.jsx
│   │   ├── Button.jsx
│   │   └── Input.jsx
│   ├── pages/
│   │   └── TaskPage.jsx
│   ├── App.jsx
│   ├── index.js
│   └── ...
└── package.json

---

## 📁 Fluxo de dados e componentes

App.jsx
├── State: tasks[]
├── Funções: onAddTaskSubmit, onTaskClick, onDeleteTaskClick
├── Renderiza:
│   ├── <AddTask /> → dispara submit
│   └── <Tasks /> → dispara eventos de clique/deletar/ver detalhes

AddTask.jsx
├── Inputs: <Input />
└── Botão: <Button /> "Adicionar Tarefa"

Tasks.jsx
├── Recebe tasks[] e funções de App.jsx
├── Lista tarefas com:
│   ├─ Concluir → onTaskClick
│   ├─ Ver detalhes → TaskPage.jsx
│   └─ Deletar → onDeleteTaskClick

TaskPage.jsx
├── Lê query string (?title, ?description)
├── Renderiza detalhes da tarefa
└── Botão voltar → navigate(-1)

---

## 🔹 Resumo visual do fluxo

Usuário
  │
  ▼
App.jsx (state tasks)
  │
  ├── <AddTask /> → onAddTaskSubmit → App.jsx atualiza tasks
  └── <Tasks /> → dispara onTaskClick / onDeleteTaskClick / Ver detalhes
localStorage <- App.jsx atualiza automaticamente

---

## 👩‍💻 Autora

Projeto desenvolvido por Clarice Fernandes.

GitHub: https://github.com/ClaFernandes
