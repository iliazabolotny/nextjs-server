import { prismaClient } from "@/lib/prisma/prismaClient";

export async function GET() {

  const brands = await prismaClient.brand.findMany();

  return Response.json(brands);
}
