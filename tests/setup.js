import dotenv from 'dotenv';
dotenv.config()

process.env.NODE_ENV = 'test';

if(!process.env.JWT_SECRET){
    process.env.JWT_SECRET = 'test-jwt-secret-key';
}

if(!process.env.JWT_SECRET_REFRESH){
    process.env.JWT_SECRET_REFRESH = 'test-jwt-refresh-secret-key'; 
}