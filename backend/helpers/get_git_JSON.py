import requests


def getJSON(url: str) -> dict:
    # split the url into owner and repo name
    repo_owner, repo_name = url.split('/')[-2:]
    # get the API url
    api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents"
    # get the JSON data
    response = requests.get(api_url)
    # print(response.json())
    return response.json()

# Testing
# def main():
#     result = getJSON(
#         "https://github.com/2023-opportunity-hack/SouL--DigitalRecordsManagementforMuseumsandHistoricalSites")


# main()
