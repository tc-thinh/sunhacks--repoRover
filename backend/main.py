from fastapi import FastAPI
from pydantic import BaseModel
from helpers import get_git_JSON, fetchPrompt

app = FastAPI()


class LinkData(BaseModel):
    link: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/process_data")
async def process_data(link_data: LinkData):
    JSON_data = get_git_JSON.getJSON(link_data.link)
    # result = JSON_data
    result = fetchPrompt.fetchInferenceResult(JSON_data)
    return {"data": result}
