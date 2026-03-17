import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import primsErrorCodes from "../../config/prismaErrorCodes.json";
import { Prisma } from "../../generated/prisma/client";

export default {
  list: async (request: Request, response: Response) => {
    try {
      const users = await prisma.cursos.findMany();
      return response.status(200).json(users);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        // @ts-ignore
        return response.status(primsErrorCodes[e.code] || 500).json(e.message);
    }
    return response.status(500).json("Unkown error. Try again later");
  },
  create: async (request: Request, response: Response) => {
    try {
      const { nome,  professor, cargaHoraria, descricao } = request.body;
      const user = await prisma.cursos.create({
        data: {
          nome,
          professor,
          cargaHoraria,
          descricao,
        },
      });

      return response.status(201).json(user);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        // @ts-ignore
        return response.status(primsErrorCodes[e.code] || 500).json(e.message);
    }
    return response.status(500).json("Unkown error. Try again later");
  },

  getByid: async (reqeust: Request, response: Response) => {
    try {
      const { id } = reqeust.params;
      const user = await prisma.cursos.findUnique({
        where: {
          id: +id,
        },
      });
      return response.status(200).json(user);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        // @ts-ignore
        return response.status(primsErrorCodes[e.code] || 500).json(e.message);
    }
    return response.status(500).json("Unkown error. Try again later");
  },
  update: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { nome, professor, cargaHoraria, descricao } = request.body;
      const user = await prisma.cursos.update({
        data: {
          nome,
          professor,
          cargaHoraria,
          descricao,
        },
        where: { id: +id },
      });
      return response.status(200).json(user);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        // @ts-ignore
        return response.status(primsErrorCodes[e.code] || 500).json(e.message);
    }
    return response.status(500).json("Unkown error. Try again later");
  },
  delet: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const user = await prisma.cursos.delete({
        where: {
          id: +id,
        },
      });
      return response.status(200).json(user);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        // @ts-ignore
        return response.status(primsErrorCodes[e.code] || 500).json(e.message);
    }
    return response.status(500).json("Unkown error. Try again later");
  },
};
