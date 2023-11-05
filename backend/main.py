from fastapi import FastAPI
from pydantic import BaseModel
from helpers import getGitJSON, fetchPrompt

app = FastAPI()


class LinkData(BaseModel):
    link: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/process_data")
async def process_data(link_data: LinkData):
    JSON_data, repo_name = getGitJSON.getJSON(link_data.link)
    # result = JSON_data
    result = fetchPrompt.fetchInferenceResult(JSON_data)
    return {"data": result, "repo_name": repo_name}


@app.post("/process_sub_data")
async def process_sub_data(link_data: LinkData):
    print(link_data.link)
    JSON_data, repo_name = getGitJSON.getJSONSubRepo(link_data.link)
    # result = JSON_data
    result = fetchPrompt.fetchInferenceResult(JSON_data)
    # print(result)
    return {"data": result, "repo_name": repo_name}
