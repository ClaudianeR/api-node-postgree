//import { Pool } from 'pg';
import pg from 'pg';

const { Pool } = pg;

export const config = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node-api',
    password: 'col@123',
    port: 5432
    
});
