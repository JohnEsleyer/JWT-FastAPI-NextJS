
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class LoginData(BaseModel):
    username: str
    password: str

@app.post("/login")
async def login(data: LoginData):
    # Verify the username and password
    if data.username == "admin" and data.password == "secret":
        # Generate the JWT
        return {"access_token": "jwt_token"}
    else:
        return {"message": "Incorrect username or password"}
