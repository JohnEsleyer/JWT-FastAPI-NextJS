from fastapi import FastAPI, HTTPException 
from fastapi.responses import JSONResponse 
from pydantic import BaseModel 
import sqlite3

app = FastAPI()

# Connect to SQLite database
conn = sqlite3.connect("users.db")
cursor = conn.cursor() 


