// declare global {
//   namespace Express {
//     interface Request {
//       user: JwtPayload | null;
//     }
//   }
// }

// declare module Express {
//   interface Request {
//     user: { email: string; role: string };
//     uploadedFolder: string;
//   }
// }

declare module Express {
  interface Request {
    user: JwtPayload | null;
    uploadedFolder: string;
  }
}
