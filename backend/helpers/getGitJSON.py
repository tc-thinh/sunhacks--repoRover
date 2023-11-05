import requests


def getJSON(url: str) -> dict:
    # split the url into owner and repo name
    repo_owner, repo_name = url.split('/')[-2:]
    # get the API url
    api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents"
    # get the JSON data
    raw_data = requests.get(api_url)
    # print(raw_data.json())
    data = cleanGitJSON(raw_data.json())
    return (data, repo_name)


def getJSONSubRepo(api_url: str) -> dict:
    raw_data = requests.get(api_url)
    # print(raw_data.json())
    data = cleanGitJSON(raw_data.json())
    # data, repo_name
    return (data, api_url.split('/')[-1])


def cleanGitJSON(raw_data):
    cleaned_data = []
    for item in raw_data:
        obj = {}
        obj['name'] = item['name']
        obj['path'] = item['path']
        if (item['size'] > 0):
            obj['type'] = 'file'
            obj['url'] = item['download_url']
        else:
            obj['type'] = 'folder'
            obj['url'] = item['_links']['self']

        cleaned_data.append(obj)
    return cleaned_data

# Testing


# def main():
#     result = getJSON(
#         "https://github.com/2023-opportunity-hack/SouL--DigitalRecordsManagementforMuseumsandHistoricalSites")
#     for i in result:
#         print(i)


# main()
