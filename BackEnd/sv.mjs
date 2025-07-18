import express from 'express';
import pkg from './generated/prisma/default.js';
import cors from 'cors';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

// Criar novo usuário
app.post("/usuarios", async (req, res) => {
  const { name, age, email } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name, age: Number(age), email },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    res.status(500).json({ error: "Erro ao salvar usuário" });
  }
});

app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});