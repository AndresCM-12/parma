import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

type Data = { message?: string; error?: string };

const EmailSchema = z
  .string()
  .email({ message: "Por favor ingrese un email válido" });

const subscribeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const emailValidation = EmailSchema.safeParse(req.body.email);
  const name = req.body.name;
  const origin = req.body.origin;

  if (!emailValidation.success) {
    return res.status(400).json({ error: "Por favor ingrese un email válido" });
  }

  const API_KEY = "dda03abaaecaec5c3febd94e01b696c3-us12";
  const API_SERVER = "us12";
  const AUDIENCE_ID = "81b126cb59";

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: emailValidation.data,
    status: "subscribed",
    origin: origin,
    name: name,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status == 200) {
      return res
        .status(201)
        .json({ message: "Tu suscripción ha sido generada" });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `${error.response?.status}`,
        `${error.response?.data.title}`,
        `${error.response?.data.detail}`
      );

      if (error.response?.data.title == "Member Exists") {
        return res.status(400).json({
          error:
            "Parece ser que ya estás suscrito con ese correo, intenta con otro diferente.",
        });
      }

      if (error.response?.data.title == "Invalid Resource") {
        return res.status(400).json({
          error:
            "Parece ser que estás intentando utilizar un correo falso o inválido, intenta con otro correo.",
        });
      }
    }

    return res.status(500).json({
      error:
        "Error del servidor, intente más tarde o contacte a soporte técnico",
    });
  }
};

export default subscribeHandler;
