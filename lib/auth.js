// lib/auth.js
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export function getUserFromToken(req) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.token;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch {
    return null;
  }
}
