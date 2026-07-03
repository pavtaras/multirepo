import type { Request, Response, NextFunction } from "express";

export function urlLogger(req: Request, _res: Response, next: NextFunction) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

export enum UserType {
  REGULAR, NORMAL
}
