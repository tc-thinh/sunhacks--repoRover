// Asynchronous function to check for a GitHub URL using regex
// Input: url (string)
// Output: isValid (boolean)

/**
 * Checks if the provided string is a valid GitHub URL
 * @async
 * @function isGitHubUrl
 * @param {string} url - The string to check
 * @returns {Promise<boolean>} - A Promise that resolves with a boolean indicating whether the string is a valid GitHub URL
 * @throws {Error} - If there was an error in the regex process
 */
async function isGitHubUrl(url) {
    try {
        // Log the URL being tested
        console.log(`Testing URL: ${url}`);

        // Regular expression for matching GitHub URLs
        const githubUrlRegex =
            /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+(?:\/)?$/;
        // console.log(githubUrlRegex.test('https://github.com/spy16/droplets')); // This should log 'true'

        // Test the URL against the regex asynchronously
        const isValid = await new Promise((resolve, reject) => {
            try {
                const result = githubUrlRegex.test(url);
                console.log(`Regex test result for ${url}: ${result}`); // Log the test result
                resolve(result);
            } catch (error) {
                console.error(`Regex test error for ${url}: ${error}`);
                reject(error);
            }
        });

        return isValid; // Return the result of the regex test
    } catch (error) {
        console.error(`Error checking GitHub URL ${url}: ${error}`);
        throw error; // Throw the error to be handled by the caller
    }
}

// Export the functions for use in other modules
module.exports = {
    isGitHubUrl,
};
