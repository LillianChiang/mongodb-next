// pages/api/employees.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { name, birthday } = req.body;
      const employee = await prisma.employee.create({
        data: {
          name,
          birthday: new Date(birthday),
        },
      });
      res.status(201).json(employee);
    } else if (req.method === 'GET') {
      const employees = await prisma.employee.findMany();
      res.status(200).json(employees);
    } else {
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
