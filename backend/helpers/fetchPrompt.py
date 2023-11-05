import boto3
import json
import re


def fetchInferenceResult(input):
    bedrock_runtime = boto3.client(
        service_name='bedrock-runtime',
        region_name='us-east-1',
    )

    prompt = str(input)
    # print(prompt)
    kwargs = {
        "modelId": "cohere.command-text-v14",
        "contentType": "application/json",
        "accept": "*/*",
        "body": "{\"prompt\":\"Act as a bot. Explain this github repository by a key-pair ({'name': ..., 'description': ..., 'type':.., 'url': ...}) value. You just need to explain the potential content in each folder in the 'description' field and keep every other fields the same. Make sure every object have their description. Return your answer in JSON format without any further explanation. Provide your answer between '```json' and '```', and it should be in a list.\\n"
        + prompt
        + "\",\"max_tokens\":4000,\"temperature\":0.75,\"p\":0.35,\"k\":128,\"stop_sequences\":[],\"return_likelihoods\":\"NONE\"}",
    }

    response = bedrock_runtime.invoke_model(**kwargs)
    response_body = json.loads(response['body'].read())
    data = response_body['generations'][0]['text']
    # print(data)

    json_data = re.search(r'```json(.*?)```', data, re.DOTALL)

    if json_data:
        # Extracting the JSON content from the matched pattern
        json_content = json_data.group(1)

        # Converting the extracted JSON content into a Python dictionary
        data_dict = json.loads(json_content)
        return {'data': data_dict}
    else:
        return {'error': 'No JSON data found in the response.'}


# Testing
# test_data = [
#     {"name": '.dockerignore'},
#     {"name": '.env.example'},
#     {"name": '.github'},
#     {"name": '.gitignore'},
#     {"name": '.pre-commit-config.yaml'},
#     {"name": 'LICENSE.md'},
#     {"name": 'README.md'},
#     {"name": 'backend'},
#     {"name": 'codecov.yaml'},
#     {"name": 'docker-compose.yaml'}
# ]
# fetchInferenceResult(test_data)
