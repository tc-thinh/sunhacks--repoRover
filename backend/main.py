from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class LinkData(BaseModel):
    link: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/process_data")
async def process_data(link_data: LinkData):
    # Do something with the received link (link_data.link)
    processed_data = f"Processed data from link: {link_data.link}"
    return {"processed_data": processed_data}
