from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def index():
    return {"message": ""}

app.mount("/img", StaticFiles(directory="img",html=False), name="img")
app.mount("/data", StaticFiles(directory="data",html=False), name="data")

import uvicorn
if __name__ == "__main__":
  uvicorn.run("fapi:app", host="192.168.0.32", port=8000, reload=True)

# コマンド実行の場合
# uvicorn main:app --reload host=0.0.0.0 port=80