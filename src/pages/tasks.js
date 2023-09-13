import {TaskList, VIEW_LIST_TYPE} from "../components/tasks/task-list";
import {TaskForm} from "../components/tasks/task-form";
import {TaskHeader} from "../components/tasks/task-header";
import {useEffect, useState} from "react";
import {Drawer, Typography} from "@mui/material";
import {TaskDeleteDialog} from "../components/tasks/task-delete-dialog";
import {createTasks, deleteTask, getTasks, updateTasks} from "../api/tasks.api";
import {useSearchParams} from "react-router-dom";
import {ErrorMessage} from "../components/layout/error-message";


export const Tasks = () => {
    const [showFormPanel, setShowFormPanel] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [viewType, setViewType] = useState(VIEW_LIST_TYPE)
    const [selectedTask, setSelectedTask] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [listLoading, setListLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /*
    * LIST
    * */
    const fetchData = () => {
        setListLoading(true);
        const searchParam = searchParams.get('search');
        getTasks(searchParam)
            .then((fetchedTasks) => {
                setTasks(fetchedTasks);
                setListLoading(false);
            })
            .catch(e => {
                console.log('Error while try to fetch tasks', e)
                setErrorMessage("Failed to load items");
                setListLoading(false);
            })
    }

    /*
    * FORM HANDLING
    * */
    const handleEditRequest = (task) => {
        setSelectedTask(task);
        setShowFormPanel(true);
    }

    const handlePanelClose = () => {
        setSelectedTask(null);
        setShowFormPanel(false)
    }

    const handleFormSubmit = (formData) => {
        if (selectedTask) {
            updateTasks(selectedTask, formData)
                .then(() => {
                    handlePanelClose();
                    fetchData();
                }).catch(e => {
                console.log('Error while try save update task', e)
                setErrorMessage('Failed to update Task')
                handlePanelClose();
            });
        } else {
            createTasks(formData)
                .then(() => {
                    handlePanelClose();
                    fetchData();
                }).catch(e => {
                console.log('Error while try create task', e)
                setErrorMessage('Failed to create new Task')
                handlePanelClose();
            });
        }
    }

    /*
    * DELETE
    * */
    const handleDeleteRequest = (task) => {
        setSelectedTask(task);
        setShowDeleteDialog(true);
    }

    const handleDeleteDialogClose = () => {
        setSelectedTask(null);
        setShowDeleteDialog(false);
    }


    const handleDelete = () => {
        deleteTask(selectedTask)
            .then((response) => {
                handleDeleteDialogClose();
                fetchData();
            }).catch(e => {
            console.log('Error while try delete task', e)
            setErrorMessage('Failed to delete Task')
            handleDeleteDialogClose();
        });
    }

    /*
    * SEARCH
    * */
    const handleSearch = (searchText) => {
        if (!searchText) {
            return
        }
        searchParams.set('search', searchText)
        setSearchParams(searchParams);
        fetchData();
    }

    const handleClearSearch = () => {
        searchParams.delete("search");
        setSearchParams(searchParams);
        fetchData();
    }

    return (<>
        <Typography variant="h3">
            Tasks
        </Typography>
        <TaskHeader
            viewType={viewType}
            addNew={() => setShowFormPanel(true)}
            search={searchParams.get('search')}
            onSearch={handleSearch}
            onClearSearch={handleClearSearch}
            onChangeViewType={(viewType) => setViewType(viewType)}
        />
        {!errorMessage && <TaskList
            tasks={tasks}
            listLoading={listLoading}
            listType={viewType}
            hasSearch={!!searchParams.get('search')}
            onEdit={handleEditRequest}
            onDelete={handleDeleteRequest}
        />}
        <Drawer
            anchor={'right'}
            open={showFormPanel}
            onClose={() => setShowFormPanel(false)}
        >
            <TaskForm
                task={selectedTask}
                onClose={handlePanelClose}
                onSubmit={handleFormSubmit}
            />
        </Drawer>
        <TaskDeleteDialog
            isOpen={showDeleteDialog}
            selectedTask={selectedTask}
            onClose={handleDeleteDialogClose}
            onDelete={handleDelete}
        />
        {errorMessage && <ErrorMessage message={errorMessage}/>}
    </>)
}