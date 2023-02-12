
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"]
)

class LoginData(BaseModel):
    username: str
    password: str

@app.post("/login")
async def login(data: LoginData):

    print(data.username)
    print(data.password)
    # Verify the username and password
    if data.username == "admin" and data.password == "secret":
        # Generate the JWT
        return {"access_token": "jwt_token"}
    else:
        return {"message": "Incorrect username or password"}
