import requests


def getJSON(url: str) -> dict:
    # split the url into owner and repo name
    repo_owner, repo_name = url.split('/')[-2:]
    # get the API url
    api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents"
    # get the JSON data
    raw_data = requests.get(api_url)
    data = cleanGitJSON(raw_data.json())
    # print(response.json())
    return data


def cleanGitJSON(raw_data):
    cleaned_data = []
    for item in raw_data:
        cleaned_data.append({"name": item["name"]})
    return cleaned_data

# Testing
# def main():
#     result = getJSON(
#         "https://github.com/2023-opportunity-hack/SouL--DigitalRecordsManagementforMuseumsandHistoricalSites")


# main()
