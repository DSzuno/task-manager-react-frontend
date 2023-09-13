import {TaskListView} from "./task-list-view";
import {TaskGridView} from "./task-grid-view";
import {ContentLoader} from "../layout/content-loader";
import {EmptyListCard} from "../layout/empty-list-card";
import {SearchOff} from "@mui/icons-material";

export const VIEW_LIST_TYPE = 'list';
export const VIEW_GRID_TYPE = 'grid'
export const TaskList = ({listLoading, tasks, listType, onEdit, onDelete, hasSearch}) => {
    return (<>
        {!listLoading && tasks.length > 0 ?
            listType === 'list' ?
                <TaskListView tasks={tasks}
                              onEdit={onEdit}
                              onDelete={onDelete}
                /> :
                <TaskGridView tasks={tasks}
                              onEdit={onEdit}
                              onDelete={onDelete}
                /> : null
        }
        {listLoading && <ContentLoader/>}
        {!listLoading && !hasSearch && tasks.length === 0 && <EmptyListCard/>}
        {!listLoading && hasSearch && tasks.length === 0 && <EmptyListCard message="Not found a searched item"
                                                                           icon={<SearchOff sx={{fontSize: 100}}
                                                                                            color="primary"/>}/>}
    </>)
}