
const basePath = process.env.BASE_PATH || 'http://localhost:8000'
const version = process.env.API_VERSION || '/api/v1';
const path = basePath + version;
export const getTasks = async (query = null) => {
    console.log(query);
    const queryParams = new URLSearchParams({ search: query});
    return fetch(`${path}/tasks?${queryParams}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
        .then((data) => data);
}

export const createTasks = async (formData) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };
    return fetch(`${path}/tasks`, requestOptions)
        .then(response => response.json())
}

export const updateTasks = async (task, formData) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };
    return fetch(`${path}/tasks/${task._id}`, requestOptions)
        .then(response => response.json())
}

export const deleteTask = async (task) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${path}/tasks/${task._id}`, requestOptions)
        .then(response => response.json())
}