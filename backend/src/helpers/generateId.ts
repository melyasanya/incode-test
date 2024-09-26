import crypto from 'crypto';
import {v4 as uuidv4} from 'uuid';
// import {nanoid} from 'nanoid';

export function generateUniqueId() {
  const uniqueId = uuidv4();

  const hash = crypto.createHash('sha256').update(uniqueId).digest('hex');

  return hash;
}
