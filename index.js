import core from '@actions/core';

try {
    const username = core.getInput('username');
    console.log(`Привет, ${username}!`);
    core.setOutput('greeting', `Привет, ${username}!`);
} catch (error) {
    core.setFailed(error.message);
}
